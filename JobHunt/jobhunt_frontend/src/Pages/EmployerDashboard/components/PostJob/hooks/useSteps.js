import { useState } from "react";
import { getCompany, postJob } from "../../../../../api/employer";

const useSteps = (info, setError) => {
    const [activeStep, setActiveStep] = useState(0);
    const [loading, setLoading] = useState(false)

    const handleNext = async () => {
        setLoading(true)
        const companiesInfo = await getCompany()
        const {id } = companiesInfo[0] //company id
        postJob({...info,company_id:id})
            .then(() =>
                setActiveStep((prevActiveStep) => prevActiveStep == 0
                    ? prevActiveStep + 2 /////must be 1//
                    : prevActiveStep + 2)
            )
            .catch((error) => setError(error))
            .finally(()=>setLoading(false))
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return [activeStep, handleNext, handleBack, loading]
}
export { useSteps }