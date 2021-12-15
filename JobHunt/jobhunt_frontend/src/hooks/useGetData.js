import { useEffect, useState } from "react"
const useGetData = (request,params) => {

    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        request(params)
            .then((data) => setData(data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
    }, [params?.page,params?.pagination_size])
    return [data, error, loading]

}
export { useGetData }
