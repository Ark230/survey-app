import React, { useEffect } from 'react';
import { fetchSurveys } from '../../redux/survey/survey.actions';
import SurveyManagement from './survey-management.component';
import { connect } from 'react-redux';

const SurveyManagementContainer = ({fetchSurveys}) => {
    useEffect(()=>{
        fetchSurveys();
    }, [fetchSurveys])

    return(
        <SurveyManagement/>
    )
}


const mapDispatchToProps = (dispatch) =>({
    fetchSurveys: () => dispatch(fetchSurveys())
});


export default connect(null, mapDispatchToProps)(SurveyManagementContainer);


