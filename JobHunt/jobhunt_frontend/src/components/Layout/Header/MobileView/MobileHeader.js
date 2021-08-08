import { React, useState, useRef } from 'react'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';
import Grow from '@material-ui/core/Grow';
import HeaderButtons from './components/HeaderButtons';
import HeaderMenus from './components/HeaderMenus';
import { Logo } from '../../components/Logo';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import SearchBox from './components/SearchBox'
import Typography from '@material-ui/core/Typography';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const mobileHeaderTheme = createTheme({
    typography: {
        button: {
            textTransform: 'none',
        },
        fontFamily: 'Open Sans',
        
    }
})
const useStyles = makeStyles((theme) => ({
    box: {
        backgroundColor: '#0b1b46',
    },
    button: {
        [theme.breakpoints.down('xs')]:{
            '& .MuiTypography-root':{fontSize:'12px'}
        },
        color: 'white',
        margin: theme.spacing(0.5),
        transition: 'all .4s ease',
        textTransform:'none'
    },
    container: {
        height: '620px',
        overflowY: 'auto'
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
        width: "100vw",
        '& .MuiPaper-root': {
            backgroundColor: '#0b1b46',
            borderRadius: '0',
            padding: '20px',
        },
        '& .MuiDivider-light': {
            backgroundColor: 'gray',
        }
    }
}))

const MobileHeader = () => {
    const classes = useStyles();
    const [expand, setExpand] = useState(false)
    const anchorRef = useRef(null);

    const toggleExpand = () =>{
        setExpand(!expand)
    }
    return (
        <ThemeProvider theme={mobileHeaderTheme}>
            <Box display={{ 'xs': 'block', 'lg': 'none' }} className={classes.box} p={4} flexDirection="row-reverse" alignItems="center" height={1} position="relative" >
                <Box display='flex' flexDirection='row-reverse' justifyContent="space-between" alignItems='center'>
                    <Box >
                        {expand
                            ? <Button className={classes.button} startIcon={<CloseIcon className={classes.icon} />} onClick={toggleExpand}><Typography variant="h6"> Close</Typography></Button>
                            : <Button ref={anchorRef} className={classes.button} startIcon={<MenuIcon className={classes.icon} />} onClick={toggleExpand} ><Typography variant="h6"> Menu</Typography> </Button>}
                    </Box>
                    <Box >
                        <Logo />
                    </Box>
                </Box>
                <Popper className={classes.popperRoot} open={expand} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'top' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <Box className={classes.container} px={1}>
                                    <Divider light />
                                    <HeaderButtons onButtonClick ={toggleExpand}/>
                                    <Divider light />
                                    <SearchBox />
                                    <Divider light />
                                    <HeaderMenus onMenuItemClick={toggleExpand} />
                                </Box>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </Box>
        </ThemeProvider >

    )
}
export { MobileHeader }