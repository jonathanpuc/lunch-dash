import React from 'react';
import { auth } from './firebase';
import './current-user.css';
const CurrentUser = ({user}) => {
    const {displayName, photoURL} = user;
    return (
        <div className="user-panel">
                <div className="image-container">
                <img
                className="display-photo" 
                src={photoURL}
                alt={displayName}
                />
                </div>
                <div className="profile-container">
                <h3>{displayName}</h3>
                <button onClick={() => auth.signOut()}>Sign Out</button>
                </div>
        </div>
    )
}

export default CurrentUser;


