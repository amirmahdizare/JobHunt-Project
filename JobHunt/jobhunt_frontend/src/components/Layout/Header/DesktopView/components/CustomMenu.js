import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Box } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'inline-flex',
        margin: '0 5px',
        position:'relative',
        zIndex:'5',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
    menuItem: {
        padding: '12px 50px 12px 20px',
        transition: 'all 0.4s ease 0s',
        fontWeight:'600',
        '&:hover': {
            marginLeft: '15px',
            backgroundColor: 'transparent',
            color: '#fb236a',

        }
    },
    menuTitle:{
        color:'inherit',
        
    }
    ,
    menuPaper:{
        width: '240px',
        top: '100%  !important',
        transform: 'unset  !important'
    }
    ,
    menuItemLink:{
        color:'inherit',
        '&:hover':{
            color:'inherit'
        }
    }
}));

export default function CustomMenu(props) {
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
    const makeMenuItems =() => {
        if(props.menuItems.length!=0)
       {return  props.menuItems.map((menuItem)=><MenuItem className={classes.menuItem} onClick={handleClose}><Link className={classes.menuItemLink} underline="none" href={menuItem.href}>{menuItem.name}</Link></MenuItem>)}
    }
    const prevOpen = React.useRef(open);
    return (
        <Box
            className={classes.root}
            onMouseLeave={handleToggle}
            onMouseEnter={handleToggle}>

            <Button
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                endIcon={<ExpandMoreIcon />}
                className={classes.menuTitle}
            >
              <Typography variant="h6" style={{textTransform:'none'}}>{props.menuTitle} </Typography>  
            </Button>
            <Popper className={classes.menuPaper}  open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper >
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList  id="menu-list-grow" onKeyDown={handleListKeyDown} >
                                    {makeMenuItems() }
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>

        </Box>
    );
}