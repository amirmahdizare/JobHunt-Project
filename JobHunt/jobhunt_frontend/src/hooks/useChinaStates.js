import { getChinaStates } from "../api/public"
import { useGetData } from "./useGetData"

const useChinaStates = () =>{
    return useGetData(getChinaStates)
     
}
export {useChinaStates}