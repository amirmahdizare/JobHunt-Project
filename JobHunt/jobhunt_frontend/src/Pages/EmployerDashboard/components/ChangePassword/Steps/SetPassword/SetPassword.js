import React from 'react'
import { Box, Button, CircularProgress, TextField, Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

import { capitalizeFirstLetter } from '../../../../../../utils'
import { useStyles } from './hooks/useStyles.js'
import { useValues } from './hooks/useValues.js'
import {useSendRequest} from './hooks/useSendRequest'

export const SetPassword = () => {
    const [passwordChanged, loading, error, sendRequest, setError] = useSendRequest()
    const classes = useStyles()
    const [values, handleChange] = useValues(setError)
    return (
        <Box flex="1">
            {passwordChanged && <Alert severity="success" variant="filled"> Password Successfully Changed</Alert>}
            {! passwordChanged && <><Typography >New Password</Typography>
            <TextField
                fullWidth
                margin="dense"
                variant="outlined"
                value={values.password}
                type="password"
                onChange={(e) => handleChange('password', e.target.value)}
            />
            {error?.password && error.password.map((err) => <Alert style={{ margin: '4px 0' }} severity="error" variant="filled">{capitalizeFirstLetter(err)}</Alert>)}
            <Typography >Confirm New Password</Typography>
            <TextField
                fullWidth
                margin="dense"
                variant="outlined"
                value={values.password_confirmation}
                type="password"
                onChange={(e) => handleChange('password_confirmation', e.target.value)}
            />
            {error?.password_confirmation && error.password_confirmation.map((err) => <Alert style={{ margin: '4px 0' }} severity="error" variant="filled">{capitalizeFirstLetter(err)}</Alert>)}

            {loading && <CircularProgress />}
            <Button
                className={classes.button}
                color="primary"
                variant="contained"
                onClick={() => sendRequest(values)}

            > Set Password</Button></>}
        </Box>
    )
}
