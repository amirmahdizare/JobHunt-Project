import { useEffect, useState } from "react"
import { getSingleJob } from "../api/public"

const useGetSingleJob = (id) => {
    const [singleJob, setSingleJob] = useState([])
    useEffect(() => {
        getSingleJob(id).then((data) => setSingleJob(data))
    }, [])
    return singleJob
}
export { useGetSingleJob }