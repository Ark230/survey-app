import React from 'react';
import './survey-management.styles.scss';
import SurveyItem from '../../components/survey-item/survey-item-component';


const SurveyManagement = () => {

    return(
        <div className="survey-list">
            <SurveyItem/>
            <SurveyItem/>
            <SurveyItem/>
        </div>
    );
}


export default SurveyManagement;