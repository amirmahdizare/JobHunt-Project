import { React, useState } from 'react'
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import { DesktopViewHeaderMenus } from './components/HeaderMenus';
import { DesktopViewHeaderButtons } from './components/HeaderButtons';
import Toolbar from '@material-ui/core/Toolbar';
import { Logo } from '../../components/Logo'
import { Logo2 } from '../../components/Logo2'
const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    toolbar: {
        padding: '1em',
        width: '85%',
        display: 'flex',
        justifyContent: 'space-between',
        // '& .MuiTypography-h6':{[theme.breakpoints.down('xl')]:
        //     {fontSize:'1.2rem',
        // }},
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

// const fontTheme = {
//     typography: {
//         fontFamily: 'Open Sans',

//     }

// }
const stickyHeaderTheme = createTheme({
    palette: {
        primary: {
            main: 'rgb(255,255,255)',
            contrastText: 'rgb(0,0,0)'
        },
    },
    typography:{
        fontFamily:'Quicksand'
    }
});
const normalHeaderTheme = createTheme({
    palette: {
        primary: {
            main: 'rgba(0,0,0,0)',
            contrastText: '#fff',
        },
    },
    typography:{
        fontFamily:'Quicksand'
    }
});
const DesktopHeader = (props) => {
    const classes = useStyles();
    const [headerStatus, setheaderStatus] = useState("normal")
    window.addEventListener('scroll', function () {
        if (window.pageYOffset == 0) {
            setheaderStatus("normal")
        } else {
            setheaderStatus("sticky")
        }
    })
    console.log(stickyHeaderTheme)
    return (
        <Box display={{ 'xs': 'none', 'lg': 'block' }} position={headerStatus == "normal" ? "absolute" : "sticky"} zIndex={100}>
            <ThemeProvider theme={headerStatus == "normal" ? normalHeaderTheme : stickyHeaderTheme} >
                <AppBar className={classes.appBar} style={headerStatus == "normal" ? { boxShadow: 'none' } : {}} >
                    <Toolbar className={classes.toolbar}>
                        <Box>
                            {headerStatus == "normal" ? <Logo /> : <Logo2 />}
                        </Box>
                        <Box display="flex">
                            <DesktopViewHeaderMenus headerStatus={headerStatus} />
                            <DesktopViewHeaderButtons headerStatus={headerStatus} />
                        </Box >

                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </Box>
    )
}
export { DesktopHeader }