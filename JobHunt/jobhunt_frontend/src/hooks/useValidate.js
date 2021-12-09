import React from 'react'
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const useValidate = () => {
    const isEmail = (email) => email.test(email)
    return { isEmail, emailRegex }
}

export default useValidate
