import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import './question.styles.scss';
import { EditSurvey } from '../../redux/survey/survey.actions';


const Question = (props) => {
 let {optionId, surveyId, saveSurveyQuestions} = props;
   

 const [questions, setQuestions] = useState({});
 const questionDetail = props.questionDetail === undefined ? undefined : props.questionDetail;
 

 
    useEffect(() => {
   
        if(Object.keys(questions).length === 0 ) setQuestions(questionDetail);
        
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

const saveChanges = event => {
    console.log(event.target.value);

   saveSurveyQuestions(questions, surveyId);
}

 return  (questionDetail === undefined) ? 

    (<div className="survey-update__question">
        <span>¿</span>
            <input type="text" className="input"/>
        <span>?</span>

        <div className="survey-update__answers">
            <ul>
                <li>a)<input type="text" className="input"/></li>
                <li>b)<input type="text" className="input"/></li>
                <li>c)<input type="text" className="input"/></li>
            </ul>
        </div>
    </div>) 
    
    :

    (<div className="survey-update__question">
        <span>¿</span>        
            <input key={questionDetail.id} onChange={handleChange} onBlur={saveChanges} name="descripcion_pregunta" type="text" className="input" value={questions.descripcion_pregunta || ''}/>
        <span>?</span>
        
            {Object.keys(questions).length >0 ? questions.Options.map(option => {
                optionId++;
                
                return (
                    <div key={option.id} className="survey-update__answers">
                        <ul>
                            <li >{String.fromCharCode(96 + optionId)})<input onBlur={saveChanges} onChange={handleChange} name={'option' + option.id} type="text" className="input" value={option.descripcion || ''}/></li>
                        </ul>
                    </div>
                )
                
            }) : undefined}
    </div>) 

}

const mapDispatchToProps = dispatch => ({
    saveSurveyQuestions: (questions, id) => dispatch(EditSurvey(questions, id))
});


export default connect(null, mapDispatchToProps)(Question);