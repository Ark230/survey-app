import React, { useEffect, useState } from 'react';
import './survey-update.styles.scss';
import { withRouter } from 'react-router-dom';
import Question from '../../components/question/question.component';
import {connect} from 'react-redux';
import { LoadSurveys, fetchSurveys } from '../../redux/survey/survey.actions';

const SurveyUpdate = ({match, fetchSurveys}) => {
    const [surveyQuestions, setSurveyQuestions] = useState([]);
    const {params} = match;

    useEffect(() => {
        const getSurveyQuestions = async () => {
            // fetchSurveys();
            // const response = await fetch(`http://localhost:4000/manage/survey/${params.id}`);
            // const questions = await response.json();
           // loadSurveys(questions);
            //setSurveyQuestions(questions);
        }

        getSurveyQuestions();
        
    }, []);

    const saveChanges = (event) => {
        event.preventDefault();

    }

    //retrieves the maxId of questions and creates and object just with that property, updating the state
    const addQuestion = () => {

        const questions = [].concat(surveyQuestions);
        const idArray = questions.map(({id}) => {
            return id;
        });
        questions.push({id: (Math.max(...idArray))+1, descripcion_pregunta:'', Options:[]})
        
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
                                return (
                                    <Question key={question.id} questionDetail={question} optionId={optionId} surveyId={params.id}/> )

                                })
                            
                            }
            </form> 

               <button className="button btn-form" onClick={addQuestion}>Add question</button> 
        </div>
    );

}

const mapDispatchToProps = (dispatch) =>({
    fetchSurveys: () => dispatch(fetchSurveys())
});

export default withRouter(connect(null, mapDispatchToProps)(SurveyUpdate));
