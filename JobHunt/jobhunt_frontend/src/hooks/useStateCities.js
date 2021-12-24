import { getStateCities } from "../api/public"
import { useGetData } from "./useGetData"

const useStateCities = (state_id) => {
    return useGetData(getStateCities, { state_id ,page:state_id })
}
export { useStateCities }