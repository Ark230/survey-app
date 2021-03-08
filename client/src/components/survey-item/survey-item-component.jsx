import React from 'react';
import './survey-item-styles.scss';
import { Link } from 'react-router-dom';



const SurveyItem = (props) => {
   const {nombre, fecha, id, Questions} = props.detail;
   const numPreguntas = Questions.length;
   
    return(
        <div className="survey-list__item">
            <div className="survey-list__item--info">
                <h2>{nombre}</h2>   
                <p>Preguntas: {numPreguntas}</p>
            </div>
            <div className="survey-list__item--date">
                <p>{fecha}</p>
            </div>
            <Link to={"/manage/survey/" + id}>
                <button className="button item-button">Editar</button>
            </Link>    
        </div>
    )

}

export default SurveyItem;
