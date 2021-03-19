import React from 'react';
import './home.styles.scss';
import { connect } from 'react-redux';
import SideBar from '../../components/sidebar/siderbar.component';
import SurveyManagement from '../survey-management/survey-management.component';
import { Switch, Route } from 'react-router-dom';
import SurveyUpdate from '../survey-update/survey-update.component';
import SurveyManagementContainer from '../survey-management/survey-management-container.component';

const Home = ({user}) => {
    return(
        <div>
            <SideBar/>
            <Switch>
                 <Route exact path="/manage" component={SurveyManagementContainer}/>
                 <Route path="/manage/survey/:id" component={SurveyUpdate}/>
            </Switch>
        </div>    

        );
}

const mapStateToProps = state => ({
    user: state.currentUser
})

export default connect(mapStateToProps, null)(Home);