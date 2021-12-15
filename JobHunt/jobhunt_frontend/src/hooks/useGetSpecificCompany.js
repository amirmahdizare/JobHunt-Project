import { useEffect, useState } from "react"
import { getSpecificCompany } from "../api/public"

const useGetSpecificCompany = (id) => {
    const [company, setCompany] = useState([])
    useEffect(() => {
        getSpecificCompany(id).then((data) => setCompany(data))
    }, [])
    return company
}
export { useGetSpecificCompany }