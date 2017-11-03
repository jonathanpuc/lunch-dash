import React from 'react';
import { auth } from './firebase';

const CurrentUser = ({user}) => {
    const {displayName, photoURL, uid} = user;
    return (
        <div>
            <div>
                <img 
                src={photoURL}
                alt={displayName}
                />
            </div>
            <div>
                <h3>{displayName}</h3>
                <button onClick={() => auth.signOut()}>Sign Out</button>
            </div>
        </div>
    )
}

export default CurrentUser;


