import { useEffect, useState } from "react"
import { getActivePackage, getCompany } from "../api/employer"

const useEmployerActivePackage = () =>{

    const [packageDetail,setPackageDetail]=useState({})
    const [error,setError]=useState(null)
    const [loading,setLoading]=useState(false)
    
    useEffect(() => {
        setLoading(true)
        getCompany()
        .then(info =>{
            var { active_package :{ package_id = null}  } = info
            
            getActivePackage({id:package_id})
            .then((data) =>  setPackageDetail(data))
            .catch((err)=>setError(err))
        })
        .catch((err)=>setError(err))
        .finally(()=>setLoading(false))
    }, [])

    return [packageDetail,error,loading]
}
export {useEmployerActivePackage}