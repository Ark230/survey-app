

const Survey = require('../sequelize/models/encuesta.model');
const Option = require('../sequelize/models/opcion.model');
const Question = require('../sequelize/models/pregunta.model');
const sequelize = require('../util/database');
const { QueryTypes } = require('sequelize');

// exports.getSurveys = async (req, res) => {
//     const surveys = await sequelize.query(`SELECT a.id,
//                                    a.nombre,
//                                    DATE_FORMAT(a.fecha, '%d/%m/%Y') as fecha, 
//                                   (SELECT COUNT(*) FROM encuesta b JOIN pregunta c on b.id = c.id_encuesta) as preguntas
//                                   FROM encuesta a`, {type: QueryTypes.SELECT});
//     res.send(surveys);
    
// };

exports.getSurveys = async (req, res) => {
    try {
        const surveys = await Survey.findAll({
            include: {
                model: Question,
                include: Option
              }
              , attributes: ['id', 'nombre', [sequelize.fn('date_format', sequelize.col('fecha'), '%d/%m/%Y'), 'fecha']]
              //,raw:true
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