const _signout = (setUser,rememberMe) =>{
    window.sessionStorage.removeItem('user')
    window.sessionStorage.removeItem('token')
    setUser(null)
    // if(!rememberMe)
    return Promise.resolve()

}
export {_signout}