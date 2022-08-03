import React, {useContext} from "react";
import LoginForm from "../Components/LoginForm";
import { AppProviderContext } from "../context/AppProvider";

const LoginPage = () => {
  const {state, actions } = useContext(AppProviderContext);

  return <LoginForm state={state} actions={actions} />;
};

export default LoginPage;
