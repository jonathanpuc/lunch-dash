import React, { Component } from 'react';
import { auth, googleAuthProvider } from './firebase';

class SignIn extends Component {
    render() {
        return (
        <div className="sign-in">
            <button onClick={() => auth.signInWithPopup(googleAuthProvider)}>
                Sign In
            </button>
        </div>
        );
    }

}

export default SignIn;


