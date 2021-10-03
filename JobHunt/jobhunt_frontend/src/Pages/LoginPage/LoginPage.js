import React, { useRef } from 'react'
import { useState } from 'react';
import { Jh_HomePagesHeader } from '../../components/Jh_HomePagesHeader'
import { Container, Typography, makeStyles, Button, Box, InputAdornment, OutlinedInput, InputLabel, FormControl, FormControlLabel, Checkbox, Link, Divider, IconButton, CircularProgress, Grow, ButtonGroup } from '@material-ui/core';
import { Jh_Share } from '../../components/Jh_Share'
import { LineAwesome, SvgKeySolid, SvgUser } from 'react-line-awesome-svg';
import CancelIcon from '@material-ui/icons/Cancel';
import { useAuth } from '../../api/authentication/index';
import { Alert } from '@material-ui/lab';
import { getToken, storeUsertoken } from '../../utils';
const useStyles = makeStyles(theme => ({
    paperScrollPaper: {
        alignItems: 'center',
        borderRadius: theme.spacing(1),
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(5),
        width: '350px',
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
    icon: {
        fontSize: theme.typography.h6.fontSize,
        fill: '#303f9f'
    },
    focused: {
        borderColor: 'black !important',
        color: 'black'
    },
    closeButton: {
        position: 'absolute',
        right: '0px',
        top: '0px',
    }

}))
const LoginPage = () => {
    const auth = useAuth()
    const [user, setUser] = useState('employer')
    var formRef = useRef()
    var form = formRef.current
    const [loginState, setLoginState] = useState(null)
    const handleClick = () => {
        let form = formRef.current
        const data = {
            identifier: form.identifier.value,
            password: form.password.value,
            user: user
        }
        if (form.rememberMe.checked)
            storeUsertoken()
        if (!form.identifier?.value || !form.password?.value) {
            return setLoginState('incomplete')
        }
        else {
            setLoginState('processing')
            auth.signin(data)
                .then(() => { setLoginState('success'); })
                .catch((e) => {
                    if (e.message == 'unAuthorized')
                        return setLoginState('unAuthorized')
                    setLoginState('error')
                })
        }
    }
    const ShowAlertForLoginState = () => {
        var showAlertContent
        switch (loginState) {
            case 'error':
                showAlertContent = <Alert style={{ width: '90%', transition: 'all 0.4s ease 0.1s' }} elevation={4} variant="filled" severity="error">Username or Password is incorrect</Alert>
                break
            case 'success':
                showAlertContent = <Alert style={{ width: '90%', transition: 'all 0.4s ease 0.1s' }} elevation={4} variant="filled" severity="success"> Login successful</Alert>
                break
            case 'incomplete':
                showAlertContent = <Alert style={{ width: '90%', transition: 'all 0.4s ease 0.1s' }} elevation={4} variant="filled" severity="warning">Please fill all fields</Alert>
                break
            case 'processing':
                showAlertContent = <CircularProgress />
                break
            default:
                showAlertContent = undefined
        }
        return (<Grow
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            timeout={{ appear: 200, enter: 300, exit: 600 }}
        >
            <Box width={1} display="flex" justifyContent="center" mt={1}>{showAlertContent}</Box>
        </Grow>)

    }
    const iconStyle = (field) => {
        if (loginState == 'incomplete' && !form[field].value || loginState == 'error')
            return { fill: '#f44336' }
        return { fill: '#303f9f' }
    }
    const classes = useStyles()
    return (
        <Box >
            <Jh_HomePagesHeader page="Login" />
            <Container maxWidth="xs">
                <Box my={2}>
                    <IconButton className={classes.closeButton} >
                        <CancelIcon color="secondary" fontSize="large" />
                    </IconButton>
                    <Typography color="textSecondary" variant="h5" gutterBottom align="center">Login as {user}</Typography>
                    <Box width={1} my={1} display="flex" justifyContent="space-around" >
                        <ButtonGroup>
                            <Button color="primary" onClick={() => setUser('candidate')} variant={user == 'candidate' ? 'contained' : 'outlined'} disabled>Candidate</Button>
                            <Button color="primary" onClick={() => setUser('employer')} variant={user == 'employer' ? 'contained' : 'outlined'}>Employer</Button>
                        </ButtonGroup>
                    </Box>
                    <form onInput={() => setLoginState(null)} ref={formRef}>
                        <FormControl error={loginState == 'incomplete' && !form.identifier?.value || loginState == 'error'} fullWidth color="primary" margin="normal" variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-username">Username</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-username"
                                type='text'
                                name="identifier"
                                // value={values.identifier}
                                // onChange={handleChange('identifier')}

                                endAdornment={
                                    <InputAdornment position="end">
                                        <LineAwesome className={classes.icon} style={iconStyle('identifier')} fontSize="inherit" icon={SvgUser} />
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl >
                        <Grow
                            in={true}
                            style={{ transformOrigin: '0 0 0' }}
                            timeout={{ appear: 200, enter: 300, exit: 600 }}
                        >
                            <div>
                                {loginState == 'incomplete' && !form.identifier?.value ? <Alert style={{ width: '90%', transition: 'all 0.4s ease 0.1s' }} elevation={4} variant="filled" severity="error">Username is Required</Alert> : null}
                            </div>
                        </Grow>
                        <FormControl error={loginState == 'incomplete' && !form.password?.value || loginState == 'error'} fullWidth margin="normal" variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput

                                id="outlined-adornment-password"
                                type='password'
                                name="password"
                                // ref={passwordRef}
                                // value={values.password}
                                // onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <LineAwesome className={classes.icon} style={iconStyle('password')} icon={SvgKeySolid} />
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />
                        </FormControl>
                        <Grow
                            in={true}
                            style={{ transformOrigin: '0 0 0' }}
                            timeout={{ appear: 200, enter: 300, exit: 600 }}
                        ><div>{loginState == 'incomplete' && !form.password?.value ? <Alert style={{ width: '90%', transition: 'all 0.4s ease 0.1s' }} elevation={4} variant="filled" severity="error">Password is Required</Alert> : null}
                            </div></Grow>
                        <Box my={1} display="flex" justifyContent="space-between" alignItems="center" width={1}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        disabled
                                        name="rememberMe"
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Link color="secondary" href="/forgotPassword">Forgot Password?</Link>
                        </Box>
                    </form>
                    <Box my={1} width={1}>
                        <Button size="large" onClick={handleClick} color="primary" variant="contained" fullWidth  ><Typography style={{ textTransform: 'none' }} variant="h6">Login</Typography></Button>
                    </Box>
                    <ShowAlertForLoginState />
                    <Box display="flex" alignItems="center" width={1} my={1}>
                        <Divider component="div" style={{ flex: 1 }} variant="fullWidth" light />
                        <Box mx={2}><Typography color="textSecondary" >Or</Typography></Box>
                        <Divider component="div" style={{ flex: 1 }} variant="fullWidth" light />
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Jh_Share hideShare />
                    </Box>
                </Box>
            </Container>

        </Box>
    )
}
export default LoginPage