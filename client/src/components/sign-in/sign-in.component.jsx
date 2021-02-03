import React, { useState } from 'react';
import './sign-in.styles.scss';
import GoogleLogo from '../../assets/google-icon.svg';
import { setCurrentUser } from '../../redux/user/user.actions';
import {connect} from 'react-redux';
import { signInWithGoogle } from '../../firebase/firebase.util';

const SignIn = ({currentUser, setCurrentUser}) => {

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
     const [user, setUser] = useState({})
    
   const handleSubmit = event => {
        event.preventDefault();
        setCurrentUser(user);
        console.log(currentUser);
    }

    const handleGoogleSubmit = event => {
        event.preventDefault();
        signInWithGoogle();
    }

  const handleChange = event => {
        const {value, name} = event.target;
        setUser({...user, [name] : value });
        
    }




    return(
        <div className="sign-in">
            <form className="sign-in__form">
                    <h2 className="sign-in--primary-header">Sign In</h2>

                    <button className="button sign-in__button--google" onClick={handleGoogleSubmit}>
                        <img src={GoogleLogo} alt="Google Logo" className="google-logo"/>    
                        <span className="">Google</span>
                    </button>

                     <label className="sign-in__username-label">Name</label>
                         <input name="username" type="text" className="sign-in__username-input" onChange={handleChange}/>

                     <label className="sign-in__password-label">Password</label>
                         <input name="password" type="password" className="sign-in__password-input" onChange={handleChange}/>

                <button className="button sign-in__button" onClick={handleSubmit}>Sign In</button>
            </form>

        </div>

    );

 
}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);