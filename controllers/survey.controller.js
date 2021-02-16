

const Survey = require('../sequelize/models/encuesta.model');
const sequelize = require('../util/database');
const { QueryTypes } = require('sequelize');

exports.getSurveys = async (req, res) => {
    let surveys = await sequelize.query(`SELECT a.id,
                                   a.nombre,
                                   DATE_FORMAT(a.fecha, '%d/%m/%Y') as fecha, 
                                  (SELECT COUNT(*) FROM encuesta b JOIN pregunta c on b.id = c.id_encuesta) as preguntas
                                  FROM encuesta a`, {type: QueryTypes.SELECT});
    res.send(surveys);
    
};

