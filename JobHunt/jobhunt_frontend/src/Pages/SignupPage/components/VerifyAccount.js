import { Box, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { SvgCheckSolid } from 'react-line-awesome-svg'
import { Jh_CountDown } from '../../../components/Jh_CountDown'
import { capitalizeFirstLetter } from '../../../utils'
import { InputField } from '../../LoginPage/components/InputField'
export const VerifyAccount = ({ values, handleChange, errorMessages, setNextButtonState, type }) => {
    useEffect(() => {
        setNextButtonState(values.verifyCode)
    }
        , [values])
    return (
        <Box m={2} display='flex' alignItems="center" flexDirection="column">
            {type == 'signup'
                ? <Typography variant="h5" align="center" display="inline" gutterBottom>Enter Verify Code that We Sent to Your {values.ident_kind == 'mobile' ? 'Phone Number ' + values.country_code + ' (' + values?.mobile.substr(0, 3) + '****' + values?.mobile.substr(7) + ')' : 'Email (' + values?.email.substr(0, 4) + '******...)'}</Typography>
                : null}
            {type == 'forgotpassword'
                ? <Typography variant="h5" align="center" display="inline" gutterBottom>Enter Verify Code that We Sent to your {capitalizeFirstLetter(values.ident_kind) }</Typography>
                : null}
         <Jh_CountDown minute={5}/>
            <InputField
                title="Verify Code"
                value={values.verifyCode}
                valueTitle='verifyCode'
                error={errorMessages ? ["Verify Code is invalid"] : null}
                handleChange={handleChange}
                helperText="Enter Verify Code"
                inputType="number"
                required svgIcon={SvgCheckSolid}
            />

        </Box>
    )
}
