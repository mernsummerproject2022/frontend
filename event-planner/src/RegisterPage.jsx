import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const RegisterPage = () => {
    return ( 
        <>
        <div className='register-container'>
            <h1 className='register-title'>Register new account</h1>

            <div className='register-area'>

                <div className='email-area'>
                <label htmlFor="email">Email</label>
                <input type="text" placeholder='Enter your email' name='email' autoComplete='none'/>
                
                </div>

                <div className='password-area'>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='Enter your password' name='password'/>
                </div>

                <div className='confirm-password-area'>
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" placeholder='Confirm password' name='confirm-password'/>
                </div>
            </div>

            <div className="button-container">
         <input type="submit" className='submit-btn' value={'CREATE ACCOUNT'} />
       </div>
       <div className='new-account-text'><h2>Already have an account?<Link to='/login'>Sign In</Link></h2></div>
        </div>

        

        </>
    )
};

export default RegisterPage;