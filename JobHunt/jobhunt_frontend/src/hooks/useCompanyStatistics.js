import { getCompanyJobs } from "../api/employer"
import { useGetData } from './useGetData'
const useCompanyStatistics = () => {
    const jobPostedDetail = useGetData(getCompanyJobs, { page: 1 })
    const activeJobsDetail = useGetData(getCompanyJobs, { page: 1, status: 'active' })
    return {
        jobPosted: jobPostedDetail?.[0]?.number_of_entities,
        activeJobs: activeJobsDetail?.[0]?.number_of_entities,
        loading: activeJobsDetail?.[2] && activeJobsDetail?.[2],
        refreshFnc :() => {jobPostedDetail?.[3]() ; activeJobsDetail?.[3]() }
    }

}
export { useCompanyStatistics }