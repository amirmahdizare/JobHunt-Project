import { useState } from "react";
import { getUser } from "../../../utils";
import { _changePassword } from "./methods/changePassword";
import { _forgotPassword } from "./methods/forgotPassword";
import { _getRoll } from "./methods/getRoll";
import {  _rememberSignin } from "./methods/rememberSignin";
import { _resetPassword } from "./methods/resetPassword";
import { _signin } from "./methods/signin";
import { _signout } from "./methods/signout";
import { _signup } from "./methods/signup";
import { _verifyCode } from "./methods/verifyCode";
import {_requestVerifyCode} from './methods/requestVerifyCode'
import { _loginwithVerifyCode } from "./methods/loginwithVerifyCode";

function useProvideAuth() {
    const [user, setUser] = useState(getUser());
    const [rememberMe, setRememberMe] = useState(false)
    const getRoll = _getRoll
    const signin = (dataObj) => _signin(setUser, dataObj)
    const signup = _signup
    const signout = () => _signout(setUser, rememberMe)
    const resetPassword = _resetPassword
    const changePassword = _changePassword
    const forgotPassword = _forgotPassword
    const rememberSignin= () => _rememberSignin(setUser)
    const verifyCode = (verifyCode) => _verifyCode(setUser, verifyCode)
    const requestVerifyCode =  _requestVerifyCode
    const loginwithVerifyCode = (dataObj) => _loginwithVerifyCode(setUser,dataObj)
    return {
        user,
        rememberMe,
        setRememberMe,
        signout,
        signin,
        signup,
        rememberSignin,
        resetPassword,
        getRoll,
        changePassword,
        forgotPassword,
        verifyCode,
        requestVerifyCode,
        loginwithVerifyCode
    };
}
export { useProvideAuth }