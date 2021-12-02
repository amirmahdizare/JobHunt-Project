import React, { Fragment, useState } from 'react'
import { Dialog, Typography, makeStyles, Button, createTheme, Box, InputAdornment, OutlinedInput, InputLabel, FormControl, FormControlLabel, Checkbox, Link, Divider, IconButton, CircularProgress, Fade, Grow } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Jh_Share } from '../../../Jh_Share'
import { LineAwesome, SvgKeySolid, SvgUser } from 'react-line-awesome-svg';
import CancelIcon from '@material-ui/icons/Cancel';
import { useAuth } from '../../../../api/authentication';
import { Alert } from '@material-ui/lab';
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
export const LoginPopUp = (props) => {
    const auth = useAuth()
    const [open, toggleOpen] = useState(true)
    const [user, setUser] = useState('Candidate')
    const [rememberMe, setRememberMe] = useState(false)
    const [values, setValues] = React.useState({
        identifier: '',
        password: ''
    });
    const [loginState, setLoginState] = useState(null)

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        setLoginState(null)
    };
    const onClose = () => {
        toggleOpen(false);
        props.onClose()
    }
    const handleClick = () => {
        if (!values?.identifier || !values?.password) {
            return setLoginState('incomplete')
        }

        else {
            setLoginState('processing')
            auth.signin({ ...values,...user  })
                .then(() => { setLoginState('success'); setTimeout(() => onClose(), 2000) })
                .catch((e) => {
                    console.log(e.message)
                    if (e.text == 'unAuthorized')
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
        console.log("inja")
        return (<Grow
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            timeout={{ appear: 200, enter: 300, exit: 600 }}
        >
            <Box width={1} display="flex" justifyContent="center" mt={1}>{showAlertContent}</Box>
        </Grow>)

    }

    const iconStyle = (field) => {
        if (loginState == 'incomplete' && !values[field] || loginState == 'error')
            return { fill: '#f44336' }
        return { fill: '#303f9f' }
    }
    const classes = useStyles()
    return (
        <Dialog classes={{ paperScrollPaper: classes.paperScrollPaper }} open={open} onClose={() => onClose()} >
            <ThemeProvider theme={() => createTheme()}>
                <IconButton className={classes.closeButton} onClick={() => onClose()}>
                    <CancelIcon color="secondary" fontSize="large" />
                </IconButton>
                <Typography variant="h4" gutterBottom>User Login</Typography>
                <Typography color="textSecondary" gutterBottom>Login as {user}</Typography>
                <Box width={1} my={1} display="flex" justifyContent="space-around" >
                    <Button color="primary" onClick={() => setUser('Candidate')} variant={user == 'Candidate' ? 'contained' : 'outlined'}>Candidate</Button>
                    <Button color="primary" onClick={() => setUser('Employer')} variant={user == 'Employer' ? 'contained' : 'outlined'}>Employer</Button>
                </Box>
                <FormControl error={loginState == 'incomplete' && !values?.identifier || loginState == 'error'} fullWidth color="primary" margin="normal" variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-username">Username</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-username"
                        type='text'
                        value={values.identifier}
                        onChange={handleChange('identifier')}
                        endAdornment={
                            <InputAdornment position="end">
                                <LineAwesome className={classes.icon} style={iconStyle('identifier')} fontSize="inherit" icon={SvgUser} />
                            </InputAdornment>
                        }
                        labelWidth={70}
                    />
                </FormControl >
                {loginState == 'incomplete' && !values?.identifier ? <Alert style={{ width: '90%', transition: 'all 0.4s ease 0.1s' }} elevation={4} variant="filled" severity="error">Username is Required</Alert> : null}
                <FormControl error={loginState == 'incomplete' && !values?.password || loginState == 'error'} fullWidth margin="normal" variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput

                        id="outlined-adornment-password"
                        type='password'
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <LineAwesome className={classes.icon} style={iconStyle('password')} icon={SvgKeySolid} />
                            </InputAdornment>
                        }
                        labelWidth={70}
                    />
                </FormControl>
                {loginState == 'incomplete' && !values?.password ? <Alert style={{ width: '90%', transition: 'all 0.4s ease 0.1s' }} elevation={4} variant="filled" severity="error">Password is Required</Alert> : null}

                <Box my={1} display="flex" justifyContent="space-between" alignItems="center" width={1}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                                color="primary"
                            />
                        }
                        label="Remember me"
                    />
                    <Link color="secondary" href="/forgotPassword">Forgot Password?</Link>
                </Box>
                <Box my={1} width={1}>
                    <Button size="large" onClick={handleClick} color="primary" variant="contained" fullWidth  ><Typography style={{ textTransform: 'none' }} variant="h6">Login</Typography></Button>
                </Box>
                {/* </form> */}
                {/* <Fade
                    in={true}
                    // style={{
                    //     transitionDelay: lo ? '800ms' : '0ms',
                    // }}

                    style={{transitionDelay:'300ms'}}
                    unmountOnExit
                > */}
                {/* <Grow
                    in={true}
                    style={{ transformOrigin: '0 0 0' }}
                    timeout='auto'
                    // {...(true ? { timeout: 1000 } : {})}
                > */}
                {/* </Grow> */}
                <ShowAlertForLoginState />
                {/* </Fade> */}
                {/*<Alert severity="info">This is an information message!</Alert> */}
                <Box display="flex" alignItems="center" width={1} my={1}>
                    <Divider component="div" style={{ flex: 1 }} variant="fullWidth" light />
                    <Box mx={2}><Typography color="textSecondary" >Or</Typography></Box>
                    <Divider component="div" style={{ flex: 1 }} variant="fullWidth" light />
                </Box>
                <Jh_Share hideShare />
            </ThemeProvider>
        </Dialog >
    );
}
