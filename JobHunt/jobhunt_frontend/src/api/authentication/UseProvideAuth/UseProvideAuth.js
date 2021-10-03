import { useEffect, useState } from "react";
import { _changePassword } from "./methods/changePassword";
import { _forgotPassword } from "./methods/forgotPassword";
import { _getRoll } from "./methods/getRoll";
import { _resetPassword } from "./methods/resetPassword";
import { _signin } from "./methods/signin";
import { _signout } from "./methods/signout";
import { _signup } from "./methods/signup";
import { _verifyCode } from "./methods/verifyCode";

// Provider hook that creates auth object and handles state
function useProvideAuth() {
    const [user, setUser] = useState('null');
    const [rememberMe, setRememberMe] = useState(false)
    // Wrap any Firebase methods we want to use making sure ...
    // ... to save the user to state.
    const getRoll = _getRoll
    const signin = (dataObj) => _signin(setUser, dataObj)
    const signup = _signup
    const signout = () => _signout(setUser, rememberMe)
    const resetPassword = _resetPassword
    const changePassword = _changePassword
    const forgotPassword = _forgotPassword
    const verifyCode = (verifyCode) => _verifyCode(setUser, verifyCode)
    // useEffect(() => {
    //     // const cleanup = () => {
            
    //     //   }
        
    //       window.addEventListener('beforeunload', ()=>signout());
        
    //       return () => {
    //         window.removeEventListener('beforeunload', ()=>signout());
    //       }
    // },[])
    // Return the user object and auth methods
    return {
        user,
        rememberMe,
        setRememberMe,
        signout,
        signin,
        signup,
        resetPassword,
        getRoll,
        changePassword,
        forgotPassword,
        verifyCode,
    };
}
export { useProvideAuth }