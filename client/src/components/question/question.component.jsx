import React from 'react';
import './question.styles.scss';

const Question = (props) => {
 let {optionId} = props;
    
const questionDetail = props.questionDetail === undefined ? undefined : props.questionDetail;

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
            <input type="text" className="input" value={questionDetail.descripcion_pregunta}/>
        <span>?</span>
            {questionDetail.Options.map(option => {
                optionId++;
                return (
                    <div className="survey-update__answers">
                        <ul>
                            <li key={option.id}>{String.fromCharCode(96 + optionId)})<input type="text" className="input" value={option.description}/></li>
                        </ul>
                    </div>
                )
                
            })}
    </div>) 

}

export default Question;