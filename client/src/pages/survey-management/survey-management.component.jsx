import React, { useEffect } from 'react';
import './survey-management.styles.scss';
import SurveyItem from '../../components/survey-item/survey-item-component';


const SurveyManagement = () => {

    useEffect(() => {
        const getItems = async() => {
            const data = await fetch('http://localhost:4000/manage');
            const items = await data.json();
            console.log(items, 'heys');
        }

        getItems();

    })


    return(
        <div className="survey-list">
            <SurveyItem/>
            <SurveyItem/>
            <SurveyItem/>
        </div>
    );
}


export default SurveyManagement;