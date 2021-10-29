import { React, useState, useRef } from 'react'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';
import Grow from '@material-ui/core/Grow';
import HeaderButtons from './components/HeaderButtons';
import HeaderMenus from './components/HeaderMenus';
import { Jh_Logo1 } from '../../../Jh_Logo1';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import SearchBox from './components/SearchBox'
import Typography from '@material-ui/core/Typography';
import { createTheme, makeStyles, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { useAuth } from '../../../../api/authentication';

var mobileHeaderTheme = createTheme({
    typography: {
        button: {
            textTransform: 'none',
        },
        fontFamily: 'Quicksand',

    }
})
mobileHeaderTheme = responsiveFontSizes(mobileHeaderTheme);
const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
        backgroundColor: '#0b1b46',
        flexDirection: 'row-reverse',
        padding: theme.spacing(4),
        position: 'relative',
        zIndex: '100',

    },
    button: {
        color: 'white',
        margin: theme.spacing(0.5),
        transition: 'all .4s ease',
        textTransform: 'none'
    },
    divider: {
        backgroundColor: 'gray',
        color: 'gray',
        height: '0.25px',
    },
    hidden: {
        visibility: 'hidden'
    },
    icon: {
        fontSize: '30px !important'
    },
    popperRoot: {
        boxSizing: 'border-box',
        transform: 'unset !important',
        top: 'unset !important',
        width: "100%",
        position: 'unset'

    },
    wrapper: {
        background: '#0b1b46',
        height: '500px',
        overflowY: 'auto',

    },

}))

const MobileViewHeader = () => {
    const classes = useStyles();
    const [expand, setExpand] = useState(false)
    const anchorRef = useRef(null);
    const auth = useAuth()
    const toggleExpand = () => {
        setExpand(!expand)
    }
    return (
        <ThemeProvider theme={mobileHeaderTheme}>
            <Box display={{ 'xs': 'block', 'lg': 'none' }} className={classes.root} height={1}  >
                <Box display='flex' flexDirection='row-reverse' justifyContent="space-between" alignItems='center'>
                    <Box >
                        {expand
                            ? <Button className={classes.button} startIcon={<CloseIcon className={classes.icon} />} onClick={toggleExpand}><Typography variant="h6"> Close</Typography></Button>
                            : <Button ref={anchorRef} className={classes.button} startIcon={<MenuIcon className={classes.icon} />} onClick={toggleExpand} ><Typography variant="h6"> Menu</Typography> </Button>}
                    </Box>
                    <Box >
                        <Jh_Logo1 />
                    </Box>
                </Box>
                <Popper className={classes.popperRoot} open={expand} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'top' ? 'center top' : 'center bottom' }}
                        >
                            <Paper className={classes.wrapper} >
                                <Container >
                                    {!auth.user && <> <Divider className={classes.divider} />
                                        <HeaderButtons onButtonClick={toggleExpand} /></>}
                                    <Divider className={classes.divider} />
                                    <SearchBox />
                                    <Divider className={classes.divider} />
                                    <HeaderMenus onMenuItemClick={toggleExpand} />
                                </Container>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </Box>
        </ThemeProvider >

    )
}
export { MobileViewHeader }