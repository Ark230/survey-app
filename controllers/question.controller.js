const Question = require('../sequelize/models/pregunta.model');
const Option = require('../sequelize/models/opcion.model');


exports.getQuestionsBySurveyId = async (req, res) => {
    try {
          const questions = await Question.findAll({
            include: [
                    {model: Option,
                    attributes: ['id', 'descripcion']
                    }
            ],
            attributes: ['id', ['descripcion', 'descripcion_pregunta']],
            where: {id_encuesta: req.params.id}
        });
        res.send(questions);

    } catch (error) {
      console.log(error);
    }
 

};


exports.deleteQuestionFromSurvey = async (req, res) => {
  try {
      Option.destroy({
        where: {
          id_pregunta: req.params.id
        }
      });
      Question.destroy({
        where:{
          id: req.params.id
        }
      });
  } catch (error) {
      console.log(error);
  }

}
