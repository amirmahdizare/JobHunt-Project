import { useEffect, useState } from "react"
import { getStatistics } from "../api/public"

const useStatistics = () => {
    const [data, setData] = useState({
        jobsCount : 0,
        companiesCount :0,
        usersCount : 0})
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        getStatistics()
            .then((data) => setData(data))
            .finally(() => setLoading(false))

    }, [])

    return {...data,loading}
}
export { useStatistics }