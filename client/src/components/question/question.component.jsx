import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import './question.styles.scss';
import TrashCan from '../../assets/trash.svg';
import { deleteSurveyQuestion, EditSurvey } from '../../redux/survey/survey.actions';
import axios from 'axios';



const Question = (props) => {
 let {optionId, surveyId, saveSurveyQuestions, deleteSurveyQuestion2} = props;
   

 const [questions, setQuestions] = useState({});
 const questionDetail = props.questionDetail === undefined ? undefined : props.questionDetail;
 

 
    useEffect(() => {
        if(Object.keys(questions).length === 0 && questionDetail !== undefined){
            setQuestions(questionDetail);
            
        }
        
        
    }, [questions, questionDetail]) 



const handleChange = event => {
    
    const {name, value} = event.target;

    if(name.startsWith('option')){
        const optionsReplacement = Object.assign({}, questions);
        optionsReplacement.Options.forEach(option => {
           if(name.endsWith(option.id)) {
                option.descripcion = value;
                setQuestions(optionsReplacement);    
           }
            
        });


    }else{
        setQuestions({...questions, [event.target.name]:event.target.value});
    }

};

const handleDelete = event => {
    const ptrn = /\d/g;
    const match = (event.target.name).match(ptrn);
    let questionIdConcat = "";
    match.forEach(num => questionIdConcat = questionIdConcat + num);

    deleteSurveyQuestion2(questionDetail.id_encuesta, questionIdConcat);
   

}

const saveChanges = event => {
    saveSurveyQuestions(questions, surveyId);
}

return(
    <div>
            <div className="survey-update__question">
                <span>¿</span>        
                     <input key={questionDetail.id} onChange={handleChange} onBlur={saveChanges} name="descripcion" type="text" className="input" value={questions.descripcion || ''}/>
                <span>?</span>
                <a onClick={handleDelete}><img src={TrashCan} alt="trash can logo" name={`question-${questionDetail.id}`} className="trash-can-logo"/></a>

            {

                    questionDetail.Options.map(option => {
                        optionId++;
                    
                            return (
                                <div key={option.id} className="survey-update__answers">
                                    <ul>
                                        <li >{String.fromCharCode(96 + optionId)})<input onBlur={saveChanges} onChange={handleChange} name={'option' + option.id} type="text" className="input" value={option.descripcion || ''}/></li>
                                    </ul>
                                </div>
                            )
                        
                    })
                    
            }

            </div>   
        </div> 
     
     )

}

const mapDispatchToProps = dispatch => ({
    saveSurveyQuestions: (questions, id) => dispatch(EditSurvey(questions, id)),
    deleteSurveyQuestion2: (surveyId, questionId) => dispatch(deleteSurveyQuestion(surveyId, questionId))
});


export default connect(null, mapDispatchToProps)(Question);