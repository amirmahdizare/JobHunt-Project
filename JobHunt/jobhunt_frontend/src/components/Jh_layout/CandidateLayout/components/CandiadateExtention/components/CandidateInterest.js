import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useRef } from 'react';
import {
    Badge, Box, Button,
    ClickAwayListener, Grow, makeStyles,
    Popper
} from '@material-ui/core';
import { CandidateInterestsContainer } from './CandidateInterestsContainer';
const useClasses = makeStyles(theme => ({
    icon: {
        borderWidth: '2px',
        borderStyle: 'solid',
        borderRadius: '50%',
        padding: theme.spacing(3),
        width: '1.5em',
        height: '1.5em', minWidth: 'unset'
    },
    badge: {
        transform: 'unset',
        fontSize: theme.typography.subtitle2.fontSize
    },
    card: {
        transition: 'all 0.4s ease'
    },
    paper: {
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
    },
}))
export const CandidateInterest = () => {
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
        <Box px={2} >
            <ClickAwayListener onClickAway={handleClickAway}>
                <Badge color="secondary" classes={{ anchorOriginTopRightRectangle: classes.badge }} badgeContent={3}>
                    <Button ref={ButtonRef} onClick={handleClick} color="inherit" className={classes.icon}><FavoriteIcon fontSize="small" /> </Button>
                </Badge>
            </ClickAwayListener>
            <Popper classes={classes.card} id={id} open={open} placement="bottom-end" anchorEl={anchorEl} transition>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom-end' ? 'center top' : 'center bottom' }}
                    >
                        <CandidateInterestsContainer />
                    </Grow>
                )}
            </Popper>
        </Box>
    )
}
