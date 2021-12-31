import { useState } from "react"

const useValues = (setError) => {
    const [values, setValues] = useState({
        password:'',
        password_confirmation:''
    })

    const handleChange = (field, value) => {
        setValues({ ...values, [field]: value })
        setError({})
    }

    return [values, handleChange]

}
export {useValues}