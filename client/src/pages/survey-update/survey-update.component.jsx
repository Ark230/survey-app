import React, { useEffect, useState } from 'react';
import './survey-update.styles.scss';
import { withRouter } from 'react-router-dom';
import Question from '../../components/question/question.component';
import {connect} from 'react-redux';
import { addSurveyQuestion } from '../../redux/survey/survey.actions';
import { selectQuestionsBySurvey } from '../../redux/survey/survey.selectors';
import axios from 'axios';
import {memoize} from 'lodash'

const SurveyUpdate = ({match, addQuestion, questionsLoaded}) => {
    const [surveyQuestions, setSurveyQuestions] = useState([]);
    const {params} = match;

    useEffect(() => {

        const [questions] = questionsLoaded;
        setSurveyQuestions(questions);

    }, []);

    const saveChanges = (event) => {
        event.preventDefault();
        saveChangesToDb(questionsLoaded);
    }

    const saveChangesToDb = memoize((questions) => {
            axios.post(`http://localhost:4000/manage/survey/${params.id}`,
            {...questions}).then((response) => {
                                    console.log(response);
                        }, (error) => {
                                    console.log(error);
            });

    });

    //retrieves the maxId of questions(last question) and creates and object just with that property, updating the state
    const addQuestionToSurvey = () => {

        const questions = [].concat(surveyQuestions);
        const idArray = questions.map(({id}) => id);
        const maxIdQuestion = Math.max(...idArray);

        
        const maxQuestion = questions.filter(question => question.id === maxIdQuestion);
        const options = maxQuestion[0].Options.map(({id}) => id);
        const maxIdOption = Math.max(...options);
        

        questions.push({id: maxIdQuestion+1, descripcion:'', id_encuesta:params.id, Options:[{id: maxIdOption+1, descripcion:'', id_pregunta: maxIdQuestion+1}, {id: maxIdOption+2, descripcion:'', id_pregunta: maxIdQuestion+1}, {id: maxIdOption+3, descripcion:'', id_pregunta: maxIdQuestion+1}]})
        
        const newQuestions = [...questions];

        addQuestion(newQuestions, 1);

        setSurveyQuestions(newQuestions);

    }


    return(
        <div className="survey-update-container">
            <form onSubmit={saveChanges}>
                        <h1>Mascota Favorita</h1>
                        <button className="button btn-save">Guardar</button>
                            { surveyQuestions.length === 0 ? <h1>Loading</h1> : surveyQuestions.map(question => {
                                // uses an accumulator to transform the option id into a letter, resets it per every question
                                let optionId = 0;
                                
                                return (
                                    <Question key={question.id} questionDetail={question} optionId={optionId} surveyId={params.id}/> )

                                })
                            
                            }
            </form> 

               <button className="button btn-form" onClick={addQuestionToSurvey}>Add question</button> 
        </div>
    );

}


const mapStateToProps = (state, ownProps) => ({
    questionsLoaded: selectQuestionsBySurvey(ownProps.match.params.id)(state)

})

const mapDispatchToProps = (dispatch) =>({
    addQuestion: (question, id) => dispatch(addSurveyQuestion(question, id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SurveyUpdate));
