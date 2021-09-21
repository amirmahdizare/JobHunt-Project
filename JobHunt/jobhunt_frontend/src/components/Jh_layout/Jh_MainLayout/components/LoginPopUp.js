import React, { useState } from 'react'
import { Dialog, Typography, makeStyles, Button, createTheme, Box, InputAdornment, OutlinedInput, InputLabel, FormControl, FormControlLabel, Checkbox, Link, Divider, IconButton } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import {Jh_Share} from '../../../Jh_Share'
import { LineAwesome, SvgKeySolid, SvgUser } from 'react-line-awesome-svg';
import CancelIcon from '@material-ui/icons/Cancel';
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
        fill: theme.palette.secondary.main
    },
    focused: {
        borderColor: 'black !important',
        color: 'black'
    },
    closeButton:{
        position:'absolute',
        right:'0px',
        top:'0px',
    }

}))
export const LoginPopUp = (props) => {
    const [open,toggleOpen]=useState(true)
    const [user, setUser] = useState('Candidate')
    const [rememberMe, setRememberMe] = useState(false)
    const [values, setValues] = React.useState({
        username: '',
        password: ''
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const onClose= () =>{
        toggleOpen(false); 
        props.onClose()
    }

    const classes = useStyles()
    return (
        <Dialog classes={{ paperScrollPaper: classes.paperScrollPaper }} open={ open } onClose={()=>onClose()} >
            <ThemeProvider theme={() => createTheme()}>
                <IconButton  className={classes.closeButton} onClick={()=> onClose()}>
                    <CancelIcon color="secondary" fontSize="large"/>
                    </IconButton>
                <Typography variant="h4" gutterBottom>User Login</Typography>
                <Typography color="textSecondary" gutterBottom>Login as {user}</Typography>
                <Box width={1} my={1} display="flex" justifyContent="space-around" >
                    <Button color="primary" onClick={() => setUser('Candidate')} variant={user == 'Candidate' ? 'contained' : 'outlined'}>Candidate</Button>
                    <Button color="primary" onClick={() => setUser('Employer')} variant={user == 'Employer' ? 'contained' : 'outlined'}>Employer</Button>
                </Box>
                <FormControl fullWidth color='secondary' margin="normal" variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-username">Username</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type='text'
                        value={values.username}
                        onChange={handleChange('username')}
                        endAdornment={
                            <InputAdornment position="end">
                                <LineAwesome className={classes.icon} fontSize="inherit" icon={SvgUser} />
                            </InputAdornment>
                        }
                        labelWidth={70}
                    />
                </FormControl >
                <FormControl fullWidth color='secondary' margin="normal" variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput

                        id="outlined-adornment-password"
                        type='password'
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <LineAwesome className={classes.icon} icon={SvgKeySolid} />
                            </InputAdornment>
                        }
                        labelWidth={70}
                    />
                </FormControl>
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
                    <Button size="large" color="primary" variant="contained" fullWidth  ><Typography style={{ textTransform: 'none' }} variant="h6">Login</Typography></Button>
                </Box>
                <Box display="flex" alignItems="center" width={1} my={1}>
                    <Divider component="div" style={{flex:1}} variant="fullWidth" light />
                    <Box mx={2}><Typography color="textSecondary" >Or</Typography></Box>
                    <Divider component="div" style={{flex:1}} variant="fullWidth" light />
                </Box>
                <Jh_Share hideShare/>
            </ThemeProvider>
        </Dialog >
    );
}
