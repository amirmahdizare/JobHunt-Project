import { React, useState } from 'react'
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import { Logo } from '../../components/Logo'
import { Logo2 } from '../../components/Logo2'
import { DesktopViewHeaderMenus } from './components/HeaderMenus';
import { DesktopViewHeaderButtons } from './components/HeaderButtons';
const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    toolbar: {
        padding: '1em',
        width: '80%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    appBar: {
        alignItems: 'center',
        transition: 'all .3s ease 0'
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

const fontTheme = {
    typography:{
            fontFamily:'Open Sans',
            h6:{
                fontSize:'18px',
                fontWeight:'600'
            }
            
    }
}
const stickyHeaderTheme = createTheme({
    palette: {
        primary: {
            main: 'rgb(255,255,255)',
            contrastText: 'rgb(0,0,0)'
        },
    },...fontTheme
});
const normalHeaderTheme = createTheme({
    palette: {
        primary: {
            main: 'rgba(0,0,0,0)',
            contrastText: '#fff',
        },
    },...fontTheme
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
        <Box display = {props.display}>
            <ThemeProvider theme={headerStatus == "normal" ? normalHeaderTheme : stickyHeaderTheme} >
                <AppBar className={classes.appBar} style={headerStatus == "normal" ? { boxShadow: 'none' } : {}} position={headerStatus == "normal" ? "absolute" : "sticky"}>
                    <Toolbar className={classes.toolbar}>
                        <Box>
                            {headerStatus == "normal" ? <Logo /> : <Logo2 />}
                        </Box>
                        <Box display="flex">
                        <DesktopViewHeaderMenus headerStatus={headerStatus}/>
                        <DesktopViewHeaderButtons headerStatus={headerStatus}/>
                        </Box >
                        <Box display={{ 'md': 'none' }}>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                        </Box>

                    </Toolbar>
                </AppBar>
            </ThemeProvider>

            salam
            rgrgr

            <br />
            r
            g
            rgr

            gr

            r<br />
            r
            g
            rgr

            gr
            <br />
            r
            g
            rgr

            gr
            <br />
            r
            g
            rgr

            gr
            <br />
            r
            g
            rgr

            gr
            <br />
            r
            g
            rgr

            gr
            <br />
            r
            g
            rgr

            gr
            <br />
            r
            g
            rgr

            gr
            <br />
            r
            g
            rgr

            gr
            <br />
            r
            g
            rgr

            gr
            <br />
            r
            g
            rgr

            gr
            <br />
            r
            g
            rgr

            gr
            <br />
            r
            g
            rgr

            gr
            <br />
            r
            g
            rgr

            gr
            <br />
            r
            g
            rgr

            gr
            <br />
            r
            g
            rgr

            gr
            <br />
            r
            g
            rgr

            gr
            <br />
            r
            g
            rgr

            gr
            <br />
            r
            g
            rgr

            gr
            <br />
            r
            g<br />
            r
            g
            rgr

            gr
            <br />
            r
            g
            rgr

            gr
            <br />
            r
            g
            rgr

            gr
            <br />
            r
            g
            rgr

            gr
            <br />
            r
            g
            rgr

            gr
            <br />
            r
            g
            rgr

            gr
            <br />
            r
            g
            rgr

            gr
            <br />
            r
            g
            rgr

            gr

            rgr

            gr


            rg

            r

            g
            rg
            r
        </Box>
    )
}
export { DesktopHeader }