import { useEffect, useState } from "react"
import { getSingleCountryInfo } from "../api/public"
import { useGetData } from './useGetData'
const useChinaCities = () => {
    const [info, error, loading] = useGetData(getSingleCountryInfo, { country: 'china' })
    const [cities, setCities] = useState([])
    useEffect(() => {
        if (info) {
            var cities = []
            Object.values(info?.cities).forEach(state => {
                cities = [...cities,...Object.values(state).map((city,index)=>({ name:Object.values(city)[0] , code:Object.keys(state)[index]}))]
            } )
            setCities(cities)
        }
    }, [info])
    return [cities, error, loading]
}
export { useChinaCities }