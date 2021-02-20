import React, { useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Login from './pages/login/login.component';
import Home from './pages/home/home.component';
import './styles/main.scss';
import { auth } from './firebase/firebase.util';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';




const App = ({setCurrentUser, userD}) => {
    
    useEffect(() => {
     const unsubscribe = auth.onAuthStateChanged(async (user) => {   
            if(user){
                setCurrentUser(user.displayName);
            }
        });

        return unsubscribe;

    }, [setCurrentUser]);


    return(
        <div>
            <Switch>
                <Route exact path="/signIn" render={() => userD ? (<Redirect to="/"/>) : (<Login/>)}/>
                <Route path="/" component={Home}/>
            </Switch>
        </div>
    );

}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = state => ({
    userD: state.currentUser

});


export default connect(mapStateToProps, mapDispatchToProps)(App);