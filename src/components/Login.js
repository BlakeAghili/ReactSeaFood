import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => (
    <nav className='login'>
        <h2>Inventory Login</h2>
        <p>Sign-in to manager's inventory site:</p>
        <button className='facebook' onClick={() => props.authenticate('Facebook')}>
            Login with Facebook
        </button>
    </nav>
);


Login.propTypes = {
    authenticate: PropTypes.func.isRequired
}
export default Login;
