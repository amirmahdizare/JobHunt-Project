import React, { useEffect, useState } from 'react'
import {  Button, CircularProgress, Grid, TextField, Typography } from '@material-ui/core'

import { Alert } from '@material-ui/lab'
import { useAuth } from '../../../../../api/authentication'
import { usePostData } from '../../../../../hooks/usePostData'

export const EnterInfo = ({ goToNextStep }) => {
    const [info, setInfo] = useState({
        country_code: null,
        mobile: null,
        ident_kind: 'mobile'
    })

    const auth = useAuth()

    const handleChange = (newState) => setInfo({ ...info, ...newState })

    const [result, error, loading, setRequest, cleanErrors] = usePostData()

    useEffect(() => result ? goToNextStep() : null, [result])

    const handleClick = () => {
        setRequest(auth.forgotPassword, info)
    }

    return (
        <>
            {error && <Grid item xs={12}>
                <Alert severity='error' variant='filled' >{error}</Alert>
            </Grid>}
            <Grid item xs={4}>
                <Typography gutterBottom>Country code</Typography>
                <TextField
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    // type={'number'}
                    value={info.country_code}
                    placeholder='Ex: +86'
                    onChange={(e) => handleChange({ country_code: e.target.value })}
                />
            </Grid>

            <Grid item xs={8}>
                <Typography gutterBottom>Phone Number</Typography>
                <TextField
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    value={info.mobile}
                    type={'number'}
                    placeholder='Ex : 12345678'
                    onChange={(e) => handleChange({ mobile: e.target.value })}
                />
            </Grid>

            <Grid item xs={12} >
                <Button
                    disabled={loading}
                    style={{ float: 'right' }}
                    color='primary'
                    onClick={() => handleClick()}
                    variant='contained' >
                    {loading ? <CircularProgress /> : 'Next'}
                </Button>
            </Grid>
        </>
    )
}
