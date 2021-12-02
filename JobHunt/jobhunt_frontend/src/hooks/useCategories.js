import { memo, useEffect, useMemo, useState } from "react"
import { getAllCategories } from "../api/public"

const useCategories = () =>{
    const [categories, setCategories] = useState([])
    useEffect(() => {
        getAllCategories().then((data) => setCategories(data))
    },[])
    return categories
}
export {useCategories}



