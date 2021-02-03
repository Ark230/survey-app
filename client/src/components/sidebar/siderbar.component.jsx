import React from 'react';
import './sidebar.styles.scss';

const SideBar =  () => {
    return(
        <div className="sidebar">
            <div className="sidebar__logo">
                <h2>Survey App</h2>
            </div>

            <div className="sidebar__wrapper">
                <ul className="sidebar__nav">
                    <li><a href="#">Surveys</a></li>
                    <li><a href="#">Manage Surveys</a></li>
                    <li><a href="#">Reports</a></li>
                </ul>

            </div>


        </div>
    );

}


export default SideBar;
