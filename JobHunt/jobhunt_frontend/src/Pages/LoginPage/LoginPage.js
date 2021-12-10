import React from 'react'
import { useState } from 'react'
import { Box, Button, ButtonGroup, Container, Typography } from '@material-ui/core'
import { HomePagesHeader } from '../../components/HomePagesHeader'
import { LoginWithVerification } from './components/LoginWithVerification'
import { LoginWithPassword } from './components/LoginWithPassword'

 const LoginPage = () => {
    const [loginMethod, setLoginMethod] = useState('withVerify')
    return (
        <Box>
            <HomePagesHeader page="Login" />
            <Container maxWidth="xs">
                &nbsp;
            <Typography variant="h5" gutterBottom align="center">Select Login Method</Typography>
                <Box width={1} mt={2} mb={1} display="flex" justifyContent="space-around" >
                    <ButtonGroup>
                        <Button style={{textTransform:'none'}} color="primary" onClick={() => setLoginMethod('withVerify')} variant={loginMethod == 'withVerify' ? 'contained' : 'outlined'} >With Verification  </Button>
                        <Button style={{textTransform:'none'}} color="primary" onClick={() => setLoginMethod('withPassword')} variant={loginMethod == 'withPassword' ? 'contained' : 'outlined'}>With Password</Button>
                    </ButtonGroup>
                </Box>
                    {loginMethod == 'withVerify' && <LoginWithVerification />}
                    {loginMethod == 'withPassword' && <LoginWithPassword/> }
            </Container>
        </Box>
    )
}
export default LoginPage
