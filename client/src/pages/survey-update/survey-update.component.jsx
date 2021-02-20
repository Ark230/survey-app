import React, { useEffect, useState } from 'react';
import './survey-update.styles.scss';
import { withRouter } from 'react-router-dom';



const SurveyUpdate = ({match}) => {
    const [surveyQuestions, setSurveyQuestions] = useState({});
    const {params} = match;

    useEffect(() => {
        const getSurveyQuestions = async () => {
            const response = await fetch(`http://localhost:4000/manage/survey/${params.id}`);
            const questions = await response.json();
            console.log(questions);
            setSurveyQuestions(questions);
        }

        getSurveyQuestions();
        
    }, [])

    return(
        <div className="survey-update-container">
            <h1>Mascota Favorita</h1>
            <button className="button btn-save">Guardar</button>
        { Object.keys(surveyQuestions).length === 0 ? <h1>Loading</h1> : surveyQuestions.map(question => {
            // uses an accumulator to transform the option id into a letter
            let optionId = 0;
            return(
                    <div className="survey-update__question">
                    <span>¿</span>
                    <input type="text" className="input" value={question.descripcion_pregunta}/>
                    <span>?</span>
                        {question.Options.map(option => {
                            optionId++;
                            return (
                                <div className="survey-update-container__answers">
                                    <ul>
                                        <li>{String.fromCharCode(96 + optionId)})<input type="text" className="input" value={option.descripcion}/></li>
                                    </ul>
                                </div>
                            )
                            
                        })}
                </div> 
            );
        })
           
        }

            <button className="button btn-form">Add question</button>
            

        </div>

    );




}


export default withRouter(SurveyUpdate);