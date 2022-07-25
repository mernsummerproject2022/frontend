import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <>
        <div className='login-container'>
            <h1 className='login-title'>Please sign in</h1>

            <div className='login-area'>

                <div className='email-area'>
                <label htmlFor="email">Email</label>
                <input type="text" placeholder='Enter your email' name='email' autoComplete='none'/>
                
                </div>

                <div className='password-area'>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='Enter your password' name='password'/>
                </div>
            </div>

            <div className="button-container">
         <input type="submit" className='submit-btn' value={'LOG IN'} />
       </div>
       <div className='new-account-text'><h2>Don't have an account?<Link to='/register'> Create a new one</Link></h2></div>
        </div>

        </>
    )
};

export default LoginForm;