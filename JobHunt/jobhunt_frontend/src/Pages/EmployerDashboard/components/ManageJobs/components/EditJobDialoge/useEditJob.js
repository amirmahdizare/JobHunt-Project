import { useEffect, useState } from "react"
import { updateJob, getCompany, getCompanyJob } from "../../../../../../api/employer"
import { useGetData } from "../../../../../../hooks/useGetData"
const useEditJob = (id) => {

    const [editJobStatus, setEditJobStatus] = useState({ status: 'draft' })
    const [jobData,error,loading] = useGetData(getCompanyJob, { id })
    useEffect(() => {
        setInfo({...info,...jobData})
    }, [jobData])
    const [info, setInfo] = useState({
        title: "",
        description: "",
        // company_id : detail?.company_id,
        category_id: "",
        cooperation_kind_id: "",
        career_job: "",
        industry_job: "",
        qualification: "",
        min_work_experience: null,
        salary: {
            amount: null,
            currency: null,
            type: null
        },
        city_id: null,
        state_id: null,
        country_id: '61042fec9703294a6e37ef67',
        tags: []
        , ...jobData
    })

    const handleChange = (newState, specialField) => {
        setInfo({ ...info, ...newState })
        if (editJobStatus.status == 'error') {
            return setEditJobStatus({ ...editJobStatus, detail: { ...editJobStatus.detail, [specialField || Object.keys(newState)[0]]: null } })

        }
        setEditJobStatus({ status: 'draft' })
    }

    const editJobfnc = async () => {
        setEditJobStatus({ status: 'loading' })
        const { id } = await getCompany()
        updateJob({ ...info, company_id: id })
            .then(jobId => setEditJobStatus({ status: 'success', message: jobId }))
            .catch(error => setEditJobStatus({ status: 'error', detail: error }))
    }

    return [info, handleChange, editJobfnc, editJobStatus,loading]
}
export { useEditJob }