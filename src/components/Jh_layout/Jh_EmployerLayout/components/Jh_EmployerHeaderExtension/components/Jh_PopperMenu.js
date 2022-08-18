import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useRef } from 'react';
import {
    Badge, Box, Button,
    Card,
    ClickAwayListener, Grow, makeStyles,
    Popper
} from '@material-ui/core';
import { Jh_EmployerMenu } from '../../../../../Jh_EmployerMenu';
const useClasses = makeStyles(theme => ({
    card: {
        transition: 'all 0.4s ease'
    },
    paper: {
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
    },
}))
export const Jh_PopperMenu = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const ButtonRef = useRef()
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const handleClickAway = () => {
        console.log("dVD")
        setAnchorEl(null)
    }
    const open = Boolean(anchorEl);
    const id = open ? 'transitions-popper' : undefined;

    const classes = useClasses()
    return (
        <Box px={2} >
            <ClickAwayListener onClickAway={handleClickAway}>
                <Button
                    color="inherit"
                    endIcon={<ExpandMoreIcon />}
                    ref={ButtonRef}
                    onClick={handleClick}
                    className={classes.icon}>{props.employerName} </Button>
            </ClickAwayListener>
            <Popper classes={classes.card} id={id} open={open} placement="bottom-end" anchorEl={anchorEl} transition>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom-end' ? 'center top' : 'center bottom' }}
                    >
                        {/* <div>slama</div> */}
                        <Card style={{ width: '250px', overflow: 'auto', marginTop: '1em' }}>
                            <Jh_EmployerMenu />
                        </Card>
                    </Grow>
                )}
            </Popper>
        </Box>
    )
}
