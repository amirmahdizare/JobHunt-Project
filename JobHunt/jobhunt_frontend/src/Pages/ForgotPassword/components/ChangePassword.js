import { Box, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { SvgKeySolid } from 'react-line-awesome-svg'
import { InputField } from '../../LoginPage/components/InputField'
export const ChangePassword = ({ values, handleChange, setNextButtonState,errorMessages }) => {
    useEffect(() => setNextButtonState(values.newPassword && values.confirmPassword), [values])
    return (
        <Box>
            <Typography variant="h6">Enter Password</Typography>
            <InputField
                title="New Password"
                value={values.newPassword}
                valueTitle='newPassword'
               error={errorMessages ?. ["password"] }
                handleChange={handleChange}
                helperText="Enter Password"
                inputType="password"
                required
                svgIcon={SvgKeySolid}
            />
            <InputField
                title="Confirm Password"
                value={values.confirmPassword}
                valueTitle='confirmPassword'
                error={errorMessages ?. ["password_confirmation"] }
                handleChange={handleChange}
                helperText="Enter Password Again"
                inputType="password"
                required
                svgIcon={SvgKeySolid}
            />
        </Box>
    )
}
