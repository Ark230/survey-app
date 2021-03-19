import React, { useEffect, useState } from 'react';
import './survey-management.styles.scss';
import SurveyItem from '../../components/survey-item/survey-item-component';
import {connect} from 'react-redux';
import { fetchSurveys } from '../../redux/survey/survey.actions';
import {compose} from 'redux';
import withSpinner from '../../components/with-spinner/with-spinner.component';
import { selectSurveyData, selectIsSurveyDataLoaded } from '../../redux/survey/survey.selectors';


const SurveyManagement = ({surveyData}) => {


    return(
        
       <div className="survey-list">
        {
            surveyData.map(survey => <SurveyItem key={survey.id} detail={survey}/>)
        }
           
       </div>
        
    
    );
}

const mapStateToProps = (state) => ({
    surveyData: selectSurveyData(state),
    isFetching: !selectIsSurveyDataLoaded(state)
});

const mapDispatchToProps = (dispatch) =>({
    fetchSurveys: () => dispatch(fetchSurveys())
});


export default compose(connect(mapStateToProps, mapDispatchToProps), withSpinner)(SurveyManagement);
