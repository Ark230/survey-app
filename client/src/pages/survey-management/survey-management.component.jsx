import React, { useEffect, useState } from 'react';
import './survey-management.styles.scss';
import SurveyItem from '../../components/survey-item/survey-item-component';


const SurveyManagement = () => {
    const [items, setItems] = useState({});
    

    const getItems = async() => {
        const data = await fetch('http://localhost:4000/manage');
        const items = await data.json();
        setItems(items);
    }


    useEffect(() => {
        getItems();
        
    },[])


    return(
       <div className="survey-list">
        
           {Object.keys(items).length === 0 ? <h1>Loading</h1> : items.map(item => <SurveyItem detail={item}/>)}
           
       </div>
        
    
    );
}


export default SurveyManagement;