import React, { useEffect, useState } from 'react'
import { Box, Button, CircularProgress, TextField, Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

import { useAuth } from '../../../api/authentication' 
import { Jh_CountDown } from '../../Jh_CountDown' 
import { usePostData } from '../../../hooks/usePostData'
import { capitalizeFirstLetter } from '../../../utils' 

export const VerifyCode = ({ goToNextStep }) => {
    const [verifyCode, setVerifyCode] = useState(null)

    const auth = useAuth()

    const [result, error, loading, setRequest] = usePostData()

    useEffect(() => result ? goToNextStep() : null, [result])

    const handleClick = () => setRequest(auth.verifyCode, verifyCode)

    return (
        <Box m={2} flexDirection={'column'} alignItems={'center'} display={'flex'}>

            {error && <Box width={1}><Alert severity='error' variant='filled' >{capitalizeFirstLetter(error)}</Alert></Box>}
            
            {!error && <Jh_CountDown minute={2} />}

            <Typography gutterBottom>Enter Verify Code We Sent To Your Phone Number</Typography>
            
            <TextField
                fullWidth
                margin="dense"
                variant="outlined"
                value={verifyCode}
                type={'number'}
                placeholder='Ex : 1234'
                onChange={(e) => setVerifyCode(e.target.value)}
            />
            <Box width={1}>
                <Button
                    disabled={loading}
                    style={{ float: 'right', marginTop: '8px' }}
                    color='primary'
                    onClick={() => handleClick()}
                    variant='contained' >
                    {loading ? <CircularProgress /> : 'Next'}
                </Button>
            </Box>
        </Box>
    )
}
