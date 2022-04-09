import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Products.css';

const Products = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h4>this is Products</h4>
            <p>Current user name: {user?.displayName ? user.displayName : 'Nobody'}</p>
        </div>
    );
};

export default Products;