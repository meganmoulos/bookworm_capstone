import React from 'react';

function User({currentUser}) {
    return (
        <div>
            <img src={currentUser.image} alt={currentUser.username} width='150px' />
            <h1>Hello, {currentUser.username}!</h1>

        </div>
    );
}

export default User;