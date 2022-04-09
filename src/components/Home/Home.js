
import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Home.css';

const Home = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h1>This is Home</h1>
            <h3>Current User: {user ? user.displayName : 'No body'}</h3>
        </div>
    );
};

export default Home;