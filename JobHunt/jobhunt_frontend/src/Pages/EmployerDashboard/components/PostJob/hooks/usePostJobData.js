import {  useState } from "react"
const usePostJobData = () => {
    const [info, setInfo] = useState({
        title: "",
        description: "",
        // company_id : detail?.company_id,
        category_id: "",
        cooperation_kind_id: "",
        salary: {
            amount: 0,
            currency: 0
        }
        // exprience
        //tags : []
    })
const handleChange = (newState) => {
    setInfo({...info,...newState})
}
return [info, handleChange]

}
export { usePostJobData }