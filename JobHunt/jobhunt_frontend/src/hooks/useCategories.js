import { getAllCategories } from "../api/public"
import {useGetData} from './useGetData'
const useCategories = () =>{
    const [data, error, loading,refreshData]=useGetData(getAllCategories)
    return [data, error, loading,refreshData]
}
export {useCategories}



