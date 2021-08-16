import React from 'react'
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
const useStyles = makeStyles((theme) => ({
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
        '&:hover': {
            backgroundColor: '#fb236a',
            color: 'white',
            boxShadow: 'none',
            transform: 'none',
            border: '2px solid #fb236a',
        },
    }
}));
const DesktopViewHeaderButtons = (props) => {
    const classes = useStyles();
    return (
        <Box>
            <Button
                size="large"
                className={classes.postJobButton}
                variant={props.headerStatus == "normal" ? "contained" : "outlined"}
                color="secondary"
                startIcon={<AddOutlinedIcon />}
            >
                <Typography variant="body1"> Post Jobs</Typography>

            </Button>
            <Button
                size="large"
                className={classes.button}
                startIcon={<VpnKeyOutlinedIcon />}
            >
                <Typography variant="body1">Sign Up</Typography>
            </Button>
            <Button
                size="large"
                className={classes.button}
                startIcon={<ExitToAppIcon />}
            >
                <Typography variant="body1">Login</Typography>
            </Button>
        </Box>
    )
}
export { DesktopViewHeaderButtons }