import { Box, Button, CircularProgress, Grid, TextField, Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React from 'react'
import { LineAwesome, SvgKeySolid } from 'react-line-awesome-svg'
import { SectionHeader } from '../../../../components/SectionHeader'
import { capitalizeFirstLetter } from '../../../../utils'
import { useSendRequest } from './hooks/useSendRequest'
import { useStyles } from './hooks/useStyles'
import { useValues } from './hooks/useValues'

export const ChangePassword = () => {
    const classes = useStyles()
    const [passwordChanged, loading, error, sendRequest,setError] = useSendRequest()
    const [values, handleChange] = useValues(setError)
    return (
        <Box>
            <SectionHeader title="Change Password" />
            <Box display="flex" m={2}>
                <Box flex="1">
                    {passwordChanged && <Alert severity="success" variant="filled"> Password Successfully Changed</Alert>}
                    <Typography >New Password</Typography>
                    <TextField
                        fullWidth
                        margin="dense"
                        variant="outlined"
                        value={values.password}
                        type="password"
                        onChange={(e) => handleChange('password', e.target.value)}
                    />
                    {error?.password && error.password.map((err) => <Alert style={{margin:'4px 0'}} severity="error" variant="filled">{capitalizeFirstLetter(err)}</Alert>)}
                    <Typography >Confirm New Password</Typography>
                    <TextField
                        fullWidth
                        margin="dense"
                        variant="outlined"
                        value={values.password_confirmation}
                        type="password"
                        onChange={(e) => handleChange('password_confirmation', e.target.value)}
                    />
                    {error?.password_confirmation && error.password_confirmation.map((err) => <Alert style={{margin:'4px 0'}} severity="error" variant="filled">{capitalizeFirstLetter(err)}</Alert>)}

                    {loading && <CircularProgress />}
                    <Button
                        className={classes.button}
                        color="primary"
                        variant="contained"
                        onClick={() => sendRequest(values)}

                    >

                        Update</Button>
                </Box>
                <Box flex="1" display={{ xs: 'none', md: 'flex' }}>
                    <LineAwesome width="100%" fill="#e2e2e2" fontSize="15em" icon={SvgKeySolid} />
                </Box>
            </Box>
        </Box>
    )
}
