import React, { useEffect, useState } from 'react';
import './survey-management.styles.scss';
import SurveyItem from '../../components/survey-item/survey-item-component';
import {connect} from 'react-redux';
import { LoadSurveys } from '../../redux/survey/survey.actions';

const SurveyManagement = ({surveys, loadSurveys}) => {
    const [items, setItems] = useState({});
    
    const getItems = async() => {
        const data = await fetch('http://localhost:4000/manage');
        const items = await data.json();
        loadSurveys(items);
        setItems(items);
    }


    useEffect(() => {
        getItems();
        
    },[])


    return(
       <div className="survey-list">
        
           {Object.keys(items).length === 0 ? <h1>Loading</h1> : items.map(item => <SurveyItem key={item.id} detail={item}/>)}
           
       </div>
        
    
    );
}

const mapStateToProps = state => ({
    surveys: state.surveyQuestions
})

const mapDispatchToProps = dispatch => ({
    loadSurveys: surveys => dispatch(LoadSurveys(surveys))

})


export default connect(mapStateToProps, mapDispatchToProps)(SurveyManagement);