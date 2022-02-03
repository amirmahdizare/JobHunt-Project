import React from 'react'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        color: 'white',
        transition: 'all .4s ease',
        textTransform: 'none'
    },

    postJobButton: {
        boxSizing: 'border-box',
        border: '2px solid #fb236a',
        borderRadius: '40px',
        textTransform: 'none',
        transition: 'all 0.4s ease 0s',
        '&:hover': {
            backgroundColor: '#0b1b46',
            border: '2px solid #fb236a',
            boxShadow: 'none',
            color: 'white',
            transform: 'none',
        },
        
    }
}))
const HeaderButtons = (props) => {
    const classes = useStyles();

    return (
        <Box py={2} display='flex' flexDirection='row' justifyContent='space-between' >
            <Box>
                <Button
                    className={classes.button}
                    startIcon={<VpnKeyOutlinedIcon />}
                    onClick={props.onButtonClick}
                    href="/signup"
                    >
                    <Typography variant="body1">Sign Up</Typography>
                </Button>
                <Button
                    className={classes.button}
                    startIcon={<ExitToAppIcon />}
                    onClick={props.onButtonClick}
                    href="/login"
                    >
                    <Typography variant="body1">Login</Typography>
                </Button>
            </Box>
        </Box>
    )
}
export default HeaderButtons