import { useEffect, useState } from "react"
import { getAllCorporations } from "../api/public"

const useGetAllCorporations = () => {
    const [corporations, setCorporations] = useState([])
    useEffect(() => {
        getAllCorporations().then((data) => setCorporations(data))
    }, [])
    return corporations
}
export { useGetAllCorporations }