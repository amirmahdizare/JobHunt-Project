import { useEffect, useState } from "react"
import { getSpecificCorporation } from "../api/public"

const useGetSpecificCorporation = (id) => {
    const [corporation, setSpecificCorporation] = useState([])
    useEffect(() => {
        getSpecificCorporation(id).then((data) => setSpecificCorporation(data))
    }, [])
    return corporation
}
export { useGetSpecificCorporation }