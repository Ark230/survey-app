import React from 'react';
import './sign-in.styles.scss';
import GoogleLogo from '../../assets/google-icon.svg';


const SignIn = () => {

    return(
        <div className="sign-in">
            <form className="sign-in__form">
                    <h2 className="sign-in--primary-header">Sign In</h2>

                    <button className="button sign-in__button--google">
                        <img src={GoogleLogo} alt="Google Logo" className="google-logo"/>    
                        <span className="">Google</span>
                    </button>

                     <label className="sign-in__username-label">Name</label>
                     <input type="text" className="sign-in__username-input"/>
                     <label className="sign-in__password-label">Password</label>
                     <input type="password" className="sign-in__password-input"/>

                <button className="button sign-in__button">Sign In</button>
            </form>

        </div>

    );

}

export default SignIn;