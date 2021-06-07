

const Survey = require('../sequelize/models/encuesta.model');
const Option = require('../sequelize/models/opcion.model');
const Question = require('../sequelize/models/pregunta.model');
const sequelize = require('../util/database');
const { QueryTypes } = require('sequelize');


exports.getSurveys = async (req, res) => {
    try {
        const surveys = await Survey.findAll({
            include: {
                model: Question,
                include: Option
              }
              , attributes: ['id', 'nombre', [sequelize.fn('date_format', sequelize.col('fecha'), '%d/%m/%Y'), 'fecha']]
        });
        
        res.send(surveys);
    } catch (error) {
        console.log(error);
    }
};

exports.getSurveyById = async (req, res) => {
    const survey = await Survey.findByPk(req.params.id);

    res.send(survey);


}

//ver si hay cambios con las preguntas existentes y crear las preguntas nuevas updateAndCreate
exports.updateSurveyQuestions = async (req, res) => {
    try {
            const response = req.body;
            const questions = response['0'];
            
            const bdQuestions = await getQuestionsBySurvey(1);
            
            let questionChanges = [];
            let optionChanges = {};
            let finalArray = [];
            let optionsLength = 0;
            let insideOptionsObject = false;

            function isObject(object) {
                return object != null && typeof object === 'object';
            }

            function compareQuestions(object1, object2) {
            const keys1 = Object.keys(object1);
            const keys2 = Object.keys(object2);

            for (const key of keys2) {
                const val1 = object1[key];
                const val2 = object2[key];
                
                const areObjects = isObject(val1) && isObject(val2);
                //Si el val1 es undefined es porque es una pregunta nueva
                if(val1 === undefined){
                   finalArray.push(val2);
                   console.log(finalArray, 'finalArray push new question');
                    continue;
                }

                if(optionChanges !== undefined && optionsLength > 0 && insideOptionsObject === true && key === 'descripcion'){
                    
                    optionsLength--;
                
                }else if(optionChanges !== undefined && optionsLength === 0 && insideOptionsObject === true){
                    //cuando llegue a 0 actualizar pregunta
                    optionChanges = {};
                    insideOptionsObject = false;
                }

                if(areObjects && key === 'Options'){ 
                    optionChanges = {[key] : []};
                    optionsLength = object2['Options'].length;
                    insideOptionsObject = true;
                }

              

                if (
                areObjects && !compareQuestions(val1, val2) ||
                !areObjects && val1 !== val2
                ) {
                    console.log(object2, 'ob2', object1, 'ob1');

                //si es mayor a 0 es porque se deben agregar opciones. sino es porque
                //se debe cambiar solo la descripcion de la pregunta
                if(Object.keys(optionChanges).length > 0){
                    console.log('you shouldnt be here');
                    
                    const [keys3] = Object.keys(optionChanges);
                    //optioChanges['Options'] si no se han agregado cambios de opciones aun
                    if(optionChanges[keys3].length === 0){
                        
                    optionChanges[keys3] = [{id: object2['id'], [key] : val2}];
                                const {Options} = optionChanges;
                                //si no existe un cambio en la desc de la pregunta, se agrega
                                //solo el cambio de opciones
                                if(questionChanges.length === 0){
                                    questionChanges = [{id: object2['id_pregunta'], Options}]
                                //setea desde 0 el objeto la propiedad Options con los cambios
                                // de las opciones hasta el momento
                                }else{
                                    
                                    //questionChanges[0].Options = Options;
                                    questionChanges.forEach(change => {
                                        if(change.id === object2['id_pregunta']){
                                            change.Options = Options
                                        }
                                    });
                                }
                    
                    //si se van a agregar más cambios de opciones   
                    }else{
                    
                            optionChanges.Options.push({id:object2['id'], [key]: object2[key]})

                            const {Options} = optionChanges;
                            //el array esta vacio porque se borro en una pasada anterior
                            //se tiene el 0 porque se creia que siempre debia ser la primera
                            //posicion, ver como acceder a la posicion que corresponda
                            //mediante el id quizas
                            
                            questionChanges.forEach(change => {
                                if(change.id === object2['id_pregunta']){
                                    change.Options = Options
                                    console.log("you shouldn't be here");
                                }
                            });
				

                    }
                
                }else{
                    console.log('why tho');
                    questionChanges.push({id:object2['id'], [key]: val2});

                }

                }
            }

                if(questionChanges.length > 0) {
                    finalArray.push(...questionChanges);
                }
                
                questionChanges = [];
                
            return true;

            }
            
            compareQuestions(bdQuestions, questions);

            finalArray.map(async (question) => {
                console.log(question, 'insideeeee new');
                const questionsExists = await Question.findByPk(question.id);

                if(questionsExists !== null){
                    Question.update({descripcion: question.descripcion},
                        { where: { id: question.id} }).then(r => console.log(r, 'questionExists'));
                    
                    if(question.hasOwnProperty('Options')){
                        question.Options.map(option => {
                            Option.update({descripcion: option.descripcion},{where: {id: option.id}})
                        });

                    }
                }else{

                    Question.create({descripcion: question.descripcion, id_encuesta: question.id_encuesta}).then(r => {

                        if(question.hasOwnProperty('Options')){
                            question.Options.map(option => {
                                    Option.create({descripcion: option.descripcion, id_pregunta: option.id_pregunta})
                            });
                        }

                    });

                }
          
            }
            
            );
            

            res.end();

        }catch(e) {
            console.error(e);
        }
    
    }

//descomponer dataValues del objeto 
const getQuestionsBySurvey = async (id) => {
    try {
        const response = await Question.findAll({
            include: {
                model: Option,
                attributes: ['id', 'descripcion', 'id_pregunta']
              },
            where: {id_encuesta:id}
        });
        
        const questions = response.map(question => question.toJSON());


        return questions;
    } catch (error) {
        console.log(error);
    }

}



    
