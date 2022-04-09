import React from 'react';

const Register = () => {
    return (
        <div>
            <h4>Please Register Now</h4>
            <form>
                <input type="text" name="name" placeholder='Enter your name..' /><br />
                <input type="email" name="email" placeholder='Example@gmail.com' /><br />
                <input type="password" /><br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;