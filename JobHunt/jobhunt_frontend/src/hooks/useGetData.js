import { useEffect, useState } from "react"
import { useLanguage } from "../LanguageProvider/Dev/useLanguage"
const useGetData = (request, params ) => {
    const {language} = useLanguage()
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const [refresh,setRefresh]=useState(false)
     const refreshData = () => setRefresh(!refresh)

    useEffect(() => {
        setLoading(true)
        request(params)
            .then((data) => setData(data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
    }, [params?.page, params?.pagination_size,language?.suf,refresh])
    return [data, error, loading,refreshData]

}
export { useGetData }
