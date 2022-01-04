import { useState } from "react"
import { useAuth } from "../../../../../../../api/authentication"

const useSendRequest = () => {

  const auth = useAuth()
  const [passwordChanged, setPasswordChanged] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const sendRequest = (values) => {
    setLoading(true)
    auth.changePassword(values)
      .then(() => {setPasswordChanged(true)})
      .catch((error) => { setError(error); setPasswordChanged(false) })
      .finally(() => setLoading(false))

  }
  return [passwordChanged, loading,error, sendRequest,setError]
}
export {useSendRequest}
