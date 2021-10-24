import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
                <h3>Please Register</h3>
                <form >
                    <input type="text" />
                    <br />
                    <input type="password" />
                    <br /><br />
                    <input type="button" value="Submit" />

                </form>
                <Link to="/login"> Already Registered ? </Link>
        </div>
    );
};

export default Register;