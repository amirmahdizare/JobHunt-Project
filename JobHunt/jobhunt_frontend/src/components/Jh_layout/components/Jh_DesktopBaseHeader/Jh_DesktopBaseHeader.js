import  React, {useState } from 'react'
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import { DesktopViewHeaderMenus } from './components/HeaderMenus';
import Toolbar from '@material-ui/core/Toolbar';
import  {Jh_Logo1}  from '../../../Jh_Logo1'
import  {Jh_Logo2}  from '../../../Jh_Logo2'
import { Container } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    toolbar: {
        // padding: '0.5em',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.up('md')]:
        {
            '& .MuiTypography-h6': {
                fontSize: '19px',
            },
        },
        [theme.breakpoints.down(1450)]:
        {
            '& .MuiTypography-h6': {
                fontSize: '13px',
            },
        }

    },
    appBar: {
        alignItems: 'center',
        transition: 'all .3s ease 0',
        top: '0px'
    },
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

const stickyHeaderTheme = createTheme({
    palette: {
        primary: {
            main: 'rgb(255,255,255)',
            contrastText: 'rgb(0,0,0)'
        },
    },
    typography: {
        fontFamily: 'Quicksand'
    }
});
const normalHeaderTheme = createTheme({
    palette: {
        primary: {
            main: 'rgba(0,0,0,0)',
            contrastText: '#fff',
        },
    },
    typography: {
        fontFamily: 'Quicksand'
    }
});
const Jh_DesktopBaseHeaderComponent = (props) => {
    const classes = useStyles();
    const [headerStatus, setheaderStatus] = useState("normal")
    window.addEventListener('scroll', function () {
        if (window.pageYOffset == 0) {
            setheaderStatus("normal")
        } else {
            setheaderStatus("sticky")
        }
    })
    return (
        <Box display={{ 'xs': 'none', 'lg': 'block' }} position={headerStatus == "normal" ? "absolute" : "sticky"} zIndex={100}>
            <ThemeProvider theme={headerStatus == "normal" ? normalHeaderTheme : stickyHeaderTheme} >
                <AppBar className={classes.appBar} style={headerStatus == "normal" ? { boxShadow: 'none' } : {}} >
                    <Container maxWidth="lg">
                        <Toolbar className={classes.toolbar}>
                            <Box>
                                {headerStatus == "normal" ? <Jh_Logo1 /> : <Jh_Logo2/>}
                            </Box>
                            <Box display="flex">
                                <DesktopViewHeaderMenus headerStatus={headerStatus} />
                                {props.extension}
                            </Box >
                        </Toolbar>
                    </Container>
                </AppBar>
            </ThemeProvider>
        </Box>
    )
}
export const Jh_DesktopBaseHeader = React.memo(Jh_DesktopBaseHeaderComponent)