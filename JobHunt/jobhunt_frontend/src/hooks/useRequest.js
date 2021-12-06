import { useEffect, useState } from "react"

const useRequest = (request) => {

    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        request()
            .then((data) => setData(data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
    }, [])
    return [data, error, loading]

}
export { useRequest }
