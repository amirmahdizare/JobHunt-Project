import { useState } from "react"
import { getCompany, postJob } from "../../../../../api/employer"

const usePostJobData = () => {
    
    const [postJobStatus, setPostJobStatus] = useState({ status: 'draft' })
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
            type:null
        },
        city_id: null,
        state_id: null,
        country_id: '61042fec9703294a6e37ef67',
        tags : []
    })

    const handleChange = (newState,specialField) => {
        setInfo({ ...info, ...newState })
        if(postJobStatus.status=='error')
        {
          return  setPostJobStatus({...postJobStatus,detail : {...postJobStatus.detail,[  specialField || Object.keys(newState)[0]]:null}})

        }
        setPostJobStatus({ status: 'draft' })
    }

    const postJobfnc = async () => {
        setPostJobStatus({ status: 'loading'})
        const { id } = await getCompany()
        postJob({ ...info, company_id: id })
            .then(jobId => setPostJobStatus({ status: 'success', message: jobId }))
            .catch(error => setPostJobStatus({ status: 'error', detail: error }))
    }

    return [info, handleChange, postJobfnc, postJobStatus]
}
export { usePostJobData }