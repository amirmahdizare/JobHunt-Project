import React from 'react'
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
const useStyles = makeStyles(() => ({
    button: {
        color: 'inherit',
        textTransform: 'none',
        margin: '0 5px'
    },
    postJobButton: {
        borderRadius: '40px',
        border: '2px solid #fb236a',
        textTransform: 'none',
        boxSizing: 'border-box',
        transition: 'all 0.4s ease 0s',
        padding:' 8px 22px',
        '&:hover': {
            backgroundColor: '#fb236a',
            color: 'white',
            boxShadow: 'none',
            transform: 'none',
            border: '2px solid #fb236a',
        },
    }
}));
const HeaderButtons = () => {
    const classes = useStyles();
    return (
        <Box >
            <Button
                size="large"
                className={classes.button}
                startIcon={<VpnKeyOutlinedIcon />}
                href="/signup"
            >
                <Typography variant="body1">Sign Up</Typography>
            </Button>
            <Button
                size="large"
                className={classes.button}
                startIcon={<ExitToAppIcon />}
                href="/login"
            >
                <Typography variant="body1">Login</Typography>
            </Button>
        </Box>
    )
}
export { HeaderButtons }