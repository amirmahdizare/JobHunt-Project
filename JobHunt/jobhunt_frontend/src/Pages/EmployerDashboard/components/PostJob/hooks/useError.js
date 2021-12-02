import { useState } from "react"

const useError = () =>{
    const [error,setError]= useState({})
    return [error,setError]
}
export {useError}