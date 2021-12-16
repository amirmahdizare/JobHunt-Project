import React from 'react'

import { useAuth } from '../api/authentication'
const useLogin = () => {
    const auth = useAuth()
    if (auth.user == 'employer') return true
    return false

}

export { useLogin }
