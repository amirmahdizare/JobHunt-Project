import { Box, Button, Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React, { useEffect, useState } from 'react'
import { SvgUser } from 'react-line-awesome-svg'
import { useAuth } from '../../../api/authentication'
import { Jh_CountDown } from '../../../components/Jh_CountDown'
import { usePostData } from '../../../hooks/usePostData'
import { capitalizeFirstLetter } from '../../../utils'
import { InputField } from './InputField'
import { ShowAlertForLoginState } from './ShowAlertForLoginState'

export const LoginWithVerification = () => {
    const auth = useAuth()
    const [step, setStep] = useState(0)
    const [values, setValues] = useState({
        identifier: '',
        verifyCode: ''
    })
    const [result, error, loading, setRequest , cleanErrors] = usePostData()
    useEffect(() => {
        if (result)
            setStep(step + 1)
    }, [result])

    const handleClick = () => {
        if (step == 0) {
            setRequest(auth.requestVerifyCode,values)
        }
        if (step == 1) {
            setRequest(auth.loginwithVerifyCode,values)
        }
    }

    const handleChange = (obj) => {
        setValues({ ...values, ...obj })
        cleanErrors()
    }
    return (
        <Box my={2}  >
            
            {step == 0 &&
                <InputField
                    title="Phone Number"
                    // value={values.identifier}
                    valueTitle='identifier'
                    handleChange={handleChange}
                    // formState={loginState}
                    inputType="text"
                    fullWidth
                    required svgIcon={SvgUser}
                    onKeyDown={(e) =>  e.key === 'Enter' ? handleClick(e) : null }
                />
            }
            {
                step == 1 &&
                <Box m={2} display='flex' alignItems="center" flexDirection="column">
                    <Typography variant="h6" align="center" display="inline" gutterBottom>Enter Verify Code that We Sent to Your {'Phone Number ' + ' (' + values?.identifier.substr(0, 3) + '****' + values?.identifier.substr(7) + ')'}</Typography>
                    <Jh_CountDown minute={5} />
                    <InputField
                        title="Verify Code"
                        value={values.verifyCode}
                        valueTitle='verifyCode'
                        handleChange={ handleChange}
                        // formState={loginState}
                        inputType="text"
                        required svgIcon={SvgUser}
                        onKeyDown={(e) =>  e.key === 'Enter' ? handleClick(e) : null }
                    />
                </Box>
            }
            
            <Button size="large" onClick={handleClick} color="primary" variant="contained" fullWidth  >
                <Typography style={{ textTransform: 'none' }} variant="h6">
                    {step == 0 && 'Send Verify Code'}
                    {step == 1 && 'Login'}
                </Typography>
            </Button>
            {loading && <ShowAlertForLoginState loginState='processing'/>}
            {error && <Alert severity='error' style={{marginTop:'8px'}} variant='filled'>{capitalizeFirstLetter(error) }</Alert>}

        </Box>
    )
}
