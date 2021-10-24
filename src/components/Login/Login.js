import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';

const Login = () => {

    // using hook and destructuring 
    const {signInUsingGoogle} = useFirebase() ; 
    return (
        <div>
                <h3>Please Login</h3>
                <button onClick={signInUsingGoogle}>Google Sign In</button>
                <br />
                <Link to ="/register"> New User ? </Link>
        </div>
    );
};

export default Login;