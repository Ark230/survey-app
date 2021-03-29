import React, { useEffect, useState } from 'react';
import './survey-update.styles.scss';
import { withRouter } from 'react-router-dom';
import Question from '../../components/question/question.component';
import {connect} from 'react-redux';
import { LoadSurveys, fetchSurveys, addSurveyQuestion } from '../../redux/survey/survey.actions';
import { selectQuestionsBySurvey } from '../../redux/survey/survey.selectors';
import { addQuestion } from '../../redux/survey/survey.util';

const SurveyUpdate = ({match, addQuestion, surveyQuestionsz}) => {
    const [surveyQuestions, setSurveyQuestions] = useState([]);
    const {params} = match;

    useEffect(() => {

        const destructured = surveyQuestionsz[0];
        
        setSurveyQuestions(destructured);
    
        
    }, []);

    const saveChanges = (event) => {
        event.preventDefault();
        console.log('triggered?');

    }

    //retrieves the maxId of questions and creates and object just with that property, updating the state
    const addQuestionToSurvey = () => {

        const questions = [].concat(surveyQuestions);
        const idArray = questions.map(({id}) => id);
        const maxIdQuestion = Math.max(...idArray);

        
        const maxQuestion = questions.filter(question => question.id === maxIdQuestion);
        const options = maxQuestion[0].Options.map(({id}) => id);
        const maxIdOption = Math.max(...options);
        

        questions.push({id: maxIdQuestion+1, descripcion:'', Options:[{id: maxIdOption+1, descripcion:'', id_pregunta: maxIdQuestion}, {id: maxIdOption+2, descripcion:'', id_pregunta: maxIdQuestion}, {id: maxIdOption+3, descripcion:'', id_pregunta: maxIdQuestion}]})
        
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
    surveyQuestionsz: selectQuestionsBySurvey(ownProps.match.params.id)(state)

})

const mapDispatchToProps = (dispatch) =>({
    addQuestion: (question, id) => dispatch(addSurveyQuestion(question, id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SurveyUpdate));
