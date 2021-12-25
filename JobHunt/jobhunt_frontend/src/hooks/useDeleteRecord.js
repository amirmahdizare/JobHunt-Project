import { useEffect, useState } from "react"

const useDeleteRecord = (request) => {
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const [params, setParams] = useState(null)
    const sendRequest = (params) => setParams(params)
    useEffect(() => {
        if (params?.id) {
            setLoading(true)
            request(params)
                .then((data) => setData(data))
                .catch((error) => setError(error))
                .finally(() => setLoading(false))
        }
    }, [params?.id])
    return [data, error, loading, sendRequest]
}
export { useDeleteRecord }