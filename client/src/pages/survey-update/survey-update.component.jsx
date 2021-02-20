import React, { useEffect, useState } from 'react';
import './survey-update.styles.scss';



const SurveyUpdate = ({id}) => {
    const [surveyQuestions, setSurveyQuestions] = useState({});

    useEffect(() => {
        const getSurveyQuestions = async () => {
            const response = await fetch(`http://localhost:4000/manage/survey/${id}`);
            const questions = await response.json();
            setSurveyQuestions(questions);
        }

        getSurveyQuestions();
        
    }, [])

    return(
        <div className="survey-update-container">
            <h1>Mascota Favorita</h1>
            <button className="button btn-save">Guardar</button>

            <div className="survey-update__question">
                <span>¿</span>
                <input type="text" className="input"/>
                <span>?</span>

                <div className="survey-update-container__answers">
                    <ul>
                        <li>a) <input type="text" className="input"/></li>
                        <li>b) <input type="text" className="input"/></li>
                        <li>c) <input type="text" className="input"/></li>
                        <li>d) <input type="text" className="input"/></li>
                    </ul>
                </div>

            </div> 



            <button className="button btn-form">Add question</button>
            

        </div>

    );




}


export default SurveyUpdate;