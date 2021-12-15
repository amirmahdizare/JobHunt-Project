import { useEffect, useState } from "react"
import { getAllJobs } from "../api/public"

const useGetAllJobs = (page, paginationSize) => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        getAllJobs(page, paginationSize).then((data) => setJobs(data))
    }, [])
    return jobs
}
export { useGetAllJobs }