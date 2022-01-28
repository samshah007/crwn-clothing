import React from "react";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/sign-up/sign-up.component";
import './sign-in-and-register.style.scss';


const SignInAndRegister = () => (
    <div className="sign-in-and-register">
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>
)
export default SignInAndRegister;