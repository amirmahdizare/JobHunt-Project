const _signout = (setUser,rememberMe) =>{
    setUser(null)
    // if(!rememberMe)
    localStorage.removeItem('token')
    return Promise.resolve()

}
export {_signout}