import { makeStyles, MenuItem } from '@material-ui/core'
import React from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Link from '@material-ui/core/Link';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'inline-flex',
        position: 'relative',
        zIndex: '5',
    },
    arrowLeft: {
        borderTop: '7.5px solid transparent',
        borderBottom: '7.5px solid transparent',
        borderRight: '7.5px solid white',
        left: '-7.5px',
        height: '0px',
        position: 'absolute',
        top: '10px',
        width: '0px',

    },
    paper: {
        marginRight: theme.spacing(2),
    },
    menuItem: {
        padding: '12px 50px 12px 20px',
        transition: 'all 0.4s ease 0s',
        fontWeight: '600',
        width: '100%',
        '&:hover': {
            marginLeft: '15px',
            backgroundColor: 'transparent',
            color: '#fb236a',

        }
    },
    menuTitle: {
        color: 'inherit',

    }
    ,
    menuPaper: {
        marginLeft: '10px',
        width: '240px',
    }
    ,
    menuItemLink: {
        color: 'inherit',
        '&:hover': {
            color: 'inherit'
        }
    }
}));
const InnerMenu = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }
    const makeMenuItems = () => {
        if (props.menuItems.length != 0) { return props.menuItems.map((menuItem) => <MenuItem className={classes.menuItem} onClick={handleClose}><Link className={classes.menuItemLink} underline="none" href={menuItem.href}><Typography variant="body2">{menuItem.name}</Typography></Link></MenuItem>) }
    }

    const prevOpen = React.useRef(open);
    return (
        <Box
            className={classes.root}
            onMouseLeave={handleToggle}
            onMouseEnter={handleToggle}
            width="100%">
            <MenuItem
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                className={classes.menuItem}
            >

                <Link
                    className={classes.menuItemLink}
                    underline="none"
                    href={props.href}>
                    <Typography variant="body2">{props.menuTitle}</Typography></Link>
            </MenuItem>
            <Popper className={classes.menuPaper} open={open} anchorEl={anchorRef.current} placement="right-start" role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'right-start' ? 'center top' : 'center bottom' }}
                    >
                        <Paper >
                            <Box className={classes.arrowLeft}></Box>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="menu-list-grow" onKeyDown={handleListKeyDown} >
                                    {makeMenuItems()}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>

        </Box>
    )
}
export default InnerMenu