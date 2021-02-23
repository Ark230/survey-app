import React, { useEffect, useState } from 'react';
import './survey-update.styles.scss';
import { withRouter } from 'react-router-dom';
import Question from '../../components/question/question.component';




const SurveyUpdate = ({match}) => {
    const [surveyQuestions, setSurveyQuestions] = useState({});
    const {params} = match;

    useEffect(() => {
        const getSurveyQuestions = async () => {
            const response = await fetch(`http://localhost:4000/manage/survey/${params.id}`);
            const questions = await response.json();
            setSurveyQuestions(questions);
        }

        getSurveyQuestions();
        
    }, []);

    const saveChanges = (event) => {
        event.preventDefault();

    }

    const addQuestion = () => {

        const questions = surveyQuestions;
        questions.push({});
        const newQuestions = [...questions];
        setSurveyQuestions(newQuestions);

    }


    return(
        <div className="survey-update-container">
            <form onSubmit={saveChanges}>
                        <h1>Mascota Favorita</h1>
                        <button className="button btn-save" >Guardar</button>
                            { Object.keys(surveyQuestions).length === 0 ? <h1>Loading</h1> : surveyQuestions.map(question => {
                                // uses an accumulator to transform the option id into a letter, resets it per every question
                                let optionId = 0;
                
                                return (Object.keys(question).length === 0) ? 
                                    <Question optionId={optionId}/> :
                                    <Question questionDetail={question} optionId={optionId}/>
                   
                            })
                            
                            }
                </form> 

               <button className="button btn-form" onClick={addQuestion}>Add question</button> 
        </div>
    );

}


export default withRouter(SurveyUpdate);
