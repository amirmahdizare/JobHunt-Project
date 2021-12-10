import { useEffect, useState } from "react"

const usePostData = () => {

    const [result, setResult] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const [request, setRequest] = useState({
        callback: null,
        data: null

    })
    const handleRequest = (callback, data) => {
        setRequest({ callback, data })
    }
    useEffect(() => {
        const { callback, data } = request
        if (callback) {
            setLoading(true)
            callback(data)
                .then((res) => setResult(res))
                .catch((err) => setError(err))
                .finally(() => setLoading(false))
        }

    }, [request])

    return [result, error, loading, handleRequest, () => setError()]

}
export { usePostData }