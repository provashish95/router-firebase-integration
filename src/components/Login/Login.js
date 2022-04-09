import React from 'react';
import './Login.css';


const Login = () => {
    return (
        <div>
            <h3>Please login</h3>
            <div style={{ margin: '20px' }}>
                <button>Google sign in</button>
            </div>
            <form>
                <input type="text" name="name" placeholder='Enter your name..' /><br />
                <input type="email" name="email" placeholder='Example@gmail.com' /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;