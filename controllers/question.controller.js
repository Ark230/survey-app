const Question = require('../sequelize/models/pregunta.model');
const Option = require('../sequelize/models/opcion.model');
const sequelize = require('../util/database');
const { QueryTypes } = require('sequelize');

exports.getQuestionsBySurveyId = async (req, res) => {
    try {
          const questions = await Question.findAll({
            include: [
                    {model: Option}
            ]
        });
        res.send(questions);
     //   res.send(questions);

    } catch (error) {
      console.log(error);
    }
 


};

// export function getRequestsByWeek(req, res) {
//   return order.findAll({
//     include: [
//       {model: users, attributes: []}, // nothing in attributes here in order to not import columns from users
//       {model: products} // nothing in attributes here in order to not import columns from products
//     ],
//     attributes: ['id'], //in quotes specify what columns you want, otherwise you will pull them all
//     // Otherwise remove attributes above this line to import everything. 
//   })
//     .then(respondWithResult(res))
//     .catch(handleError(res));
// }