import { useEffect, useState } from "react"
import { getJobWorktimes } from "../api/public"

const useJobWorktimes = () =>{
    const [workTimes,setWorkTimes]=useState([])
    useEffect(() => {
        getJobWorktimes().then((data)=>setWorkTimes(data))
    }, [])
    return workTimes
}
export {useJobWorktimes}