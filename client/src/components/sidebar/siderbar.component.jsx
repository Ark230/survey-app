import React from 'react';
import './sidebar.styles.scss';
import { Link } from 'react-router-dom';


<Link to="/about">
  
</Link>;


const SideBar =  () => {
    return(
        <div className="sidebar">
            <div className="sidebar__logo">
                <h2>Survey App</h2>
            </div>

            <div className="sidebar__wrapper">
                <ul className="sidebar__nav">
                    <li><a href="#">Surveys</a></li>
                    <li><Link to="/manage">Manage Surveys</Link></li>
                    <li><a href="#">Reports</a></li>
                </ul>

            </div>


        </div>
    );

}


export default SideBar;
