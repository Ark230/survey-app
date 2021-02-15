import React from 'react';
import './survey-item-styles.scss';

const SurveyItem = () => {

    return(
        <div className="survey-list__item">
            <div className="survey-list__item--info">
                <h2>Mascota Favorita</h2>
                <p>Preguntas: </p>
            </div>
            <div className="survey-list__item--date">
                <p>7/2/21</p>
            </div>
            <button className="button item-button">Editar</button>
        </div>
    )

}

export default SurveyItem;
