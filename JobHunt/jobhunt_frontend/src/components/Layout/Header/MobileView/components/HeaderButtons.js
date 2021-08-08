import React from 'react'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        [theme.breakpoints.down('xs')]: {
            '& .MuiTypography-root': { fontSize: '12px' }
        },
        color: 'white',
        margin: theme.spacing(0.5),
        transition: 'all .4s ease',
        textTransform: 'none'
    },

    postJobButton: {
        [theme.breakpoints.down('xs')]: {
            '& .MuiTypography-root': { fontSize: '12px' }
        },
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
        <Box py={2} display='flex' flexDirection='row' justifyContent='space-between'>
            <Button
                className={classes.postJobButton}
                variant="contained"
                color="secondary"
                startIcon={<AddOutlinedIcon />}
                onClick={props.onButtonClick}
                >
                <Typography variant="h5"> Post Jobs</Typography>

            </Button>
            <Box>
                <Button
                    size="large"
                    className={classes.button}
                    startIcon={<VpnKeyOutlinedIcon />}
                    onClick={props.onButtonClick}
                    >
                    <Typography variant="h5">Sign Up</Typography>
                </Button>
                <Button
                    size="large"
                    className={classes.button}
                    startIcon={<ExitToAppIcon />}
                    onClick={props.onButtonClick}
                    >
                    <Typography variant="h5">Login</Typography>
                </Button>
            </Box>
        </Box>
    )
}
export default HeaderButtons