import React,{useContext} from 'react';
import RegisterForm from '../Components/RegisterForm';
import { AppProviderContext } from '../context/AppProvider';

const RegisterPage = () => {
    const { actions,state } = useContext(AppProviderContext);
    return ( 
        <RegisterForm state={state} actions={actions}/>
    )
};

export default RegisterPage;