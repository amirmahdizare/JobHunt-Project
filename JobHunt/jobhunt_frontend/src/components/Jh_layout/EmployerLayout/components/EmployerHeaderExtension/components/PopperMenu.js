import React from 'react'
import { useRef } from 'react';
import {
    Box, Button,
    Card,
    ClickAwayListener, Grow, makeStyles,
    Popper
} from '@material-ui/core';
import { EmployerMenu } from '../../../../../EmployerMenu';
import { UserAvatar } from '../../../../../UserAvatar';
import MenuIcon from '@material-ui/icons/Menu';
const useClasses = makeStyles(theme => ({
    card: {
        transition: 'all 0.4s ease'
    },
    paper: {
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
    },
}))
export const PopperMenu = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const ButtonRef = useRef()
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const handleClickAway = () => {
        setAnchorEl(null)
    }
    const open = Boolean(anchorEl);
    const id = open ? 'transitions-popper' : undefined;

    const classes = useClasses()
    return (
        <Box >
            <ClickAwayListener onClickAway={handleClickAway}>
                <Button
                    color="inherit"
                    endIcon={<MenuIcon />}
                    ref={ButtonRef}
                    onClick={handleClick}
                    disableRipple
                    className={classes.icon}>
                       <UserAvatar src="https://creativelayers.net/themes/jobhunt-html/images/resource/profile.jpg" size="medium" name="Tera Planer"/> &nbsp; </Button>
            </ClickAwayListener>
            <Popper classes={classes.card} id={id} open={open} placement="bottom-end" anchorEl={anchorEl} transition>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom-end' ? 'center top' : 'center bottom' }}
                    >
                        <Card style={{ width: '250px', overflow: 'auto', marginTop: '1em' }}>
                            <EmployerMenu />
                        </Card>
                    </Grow>
                )}
            </Popper>
        </Box>
    )
}
