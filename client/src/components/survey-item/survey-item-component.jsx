import React from 'react';
import './survey-item-styles.scss';
import { Link } from 'react-router-dom';
import SurveyUpdate from '../../pages/survey-update/survey-update.component';


const SurveyItem = (props) => {
   const {nombre, preguntas, fecha, id} = props.detail;
   
    return(
        <div className="survey-list__item">
            <div className="survey-list__item--info">
                <h2>{nombre}</h2>
                <p>Preguntas:  {preguntas}</p>
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
