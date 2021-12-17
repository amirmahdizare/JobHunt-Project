import React from 'react'
import { useState } from 'react';
import { Typography, Button, Box, FormControlLabel, Grid, Checkbox } from '@material-ui/core';
import { SvgKeySolid, SvgUser } from 'react-line-awesome-svg';
import { useAuth } from '../../../api/authentication/index';
import { removeTokens, storeUsertoken } from '../../../utils';
import { InputField } from '../components/InputField'
import { ShowAlertForLoginState } from '../components/ShowAlertForLoginState';
import { SignInOptions } from '../components/SignInOptions';
import { Link, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserIdentifier } from '../../../api/public';

const LoginWithPassword = () => {
    const auth = useAuth()
    const [loginDetail, setLoginDetail] = useState({
        type: 'normal',
        country_code: '',
        identifier: null
    })
    const [loginState, setLoginState] = useState(null)
    const [values, setValues] = useState({
        identifier: '',
        password: '',
        country_code:''
    })
    const [rememberMe, toggleRememberMe] = useState(false)
    let history = useHistory()
    const handleChange = (obj) => {
        setValues({ ...values, ...obj })
        setLoginState(null)
    }
    const handleClick = () => {

        if (!values?.identifier || !values?.password) {
            return setLoginState('incomplete')
        }
        else {
            setLoginState('processing')
            auth.signin({ ...values, history })
                .then(() => {
                    if (rememberMe)
                        storeUsertoken()
                    setLoginState('success')
                })
                .catch((e) => {
                    if (e.message == 'unAuthorized')
                        return setLoginState('unAuthorized')
                    setLoginState('error')
                })
        }
    }

    useEffect(() => {
        getUserIdentifier()
            .then((identifier) => setLoginDetail({
                type: 'rememberme',
                identifier
            }))
    }, [])
    return (
        <Box my={2}>
            <Box >
                {loginDetail.type == 'normal' ? <>
                    <Grid container spacing={2} >
                        <Grid item xs={4} >
                            <InputField
                                title="Country Code"
                                value={values.country_code}
                                valueTitle='country_code'
                                handleChange={handleChange}
                                required
                            /></Grid>
                        <Grid item xs={8}>
                            <InputField
                                title="Phone Number"
                                value={values.identifier}
                                valueTitle='identifier'
                                handleChange={handleChange}
                                formState={loginState}
                                pattern={/[0-9]/gm}
                                required svgIcon={SvgUser}
                            /></Grid>

                        <Grid item xs={12}>
                            <InputField
                                title="Password"
                                value={values.password}
                                valueTitle='password'
                                handleChange={handleChange}
                                formState={loginState}
                                inputType="password"
                                required svgIcon={SvgKeySolid}
                                onKeyDown={(e) => e.key === 'Enter' ? handleClick(e) : null}
                            />
                        </Grid>
                    </Grid>
                    <Box my={1} display="flex" justifyContent="space-between" alignItems="center" width={1}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={rememberMe}
                                    onChange={() => toggleRememberMe(!rememberMe)}
                                    name="rememberMe"
                                    color="primary"
                                />
                            }
                            label="Remember me"
                        />
                        <Link color="secondary" to="/forgotPassword">Forgot Password?</Link>
                    </Box>
                    <Box my={1} width={1}>
                        <Button size="large" onClick={handleClick} color="primary" variant="contained" fullWidth  ><Typography style={{ textTransform: 'none' }} variant="h6">Login</Typography></Button>

                        {loginDetail.identifier ?
                            <>&nbsp; <Button onClick={() => setLoginDetail({ ...loginDetail, type: 'rememberme' })} color="secondary" variant="outlined" fullWidth style={{ textTransform: 'none' }}><Typography> Back to Login With {loginDetail.identifier}</Typography></Button></> : null}

                    </Box>
                </>
                    :
                    <>
                        <Button onClick={() => { setLoginState('processing'); auth.rememberSignin().catch(() => setLoginState('error')) }} variant="contained" color="primary" fullWidth size="large" style={{ textTransform: 'none' }} ><Typography variant="h6">Login With {loginDetail.identifier}</Typography></Button>
                        &nbsp;
                        <Button onClick={() => setLoginDetail({ ...loginDetail, type: 'normal' })} color="secondary" variant="outlined" fullWidth style={{ textTransform: 'none' }}><Typography> Login With Diffrent Account</Typography></Button>
                        &nbsp;
                        <Button onClick={() => { removeTokens(); setLoginDetail({ type: 'normal', identifier: null }) }} color="secondary" variant="text" fullWidth style={{ textTransform: 'none' }}><Typography>Remove Sign in Info</Typography></Button>
                    </>
                }
                <ShowAlertForLoginState loginState={loginState} />
                <SignInOptions />
            </Box>

        </Box>
    )
}
export { LoginWithPassword }