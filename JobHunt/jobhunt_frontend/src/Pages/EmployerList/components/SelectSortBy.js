import React from 'react'
import {
    ClickAwayListener, List,
     ListItem,ListItemText, makeStyles, MenuItem,
    MenuList, Paper, Typography
} from '@material-ui/core'
import { ExpandMoreOutlined } from '@material-ui/icons';
const useClasses = makeStyles((theme) => ({
    root: {
        borderRadius: theme.spacing(0.5),
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'relative',
        backgroundColor:'#f4f5fa',
        boxShadow:'unset',
        color:'black',
        '& .MuiList-root': {
            padding: '0',
            width: '100%'
        }
    },
    menuList: {
        backgroundColor: 'white',
        borderRadius: theme.spacing(1),
        left: '0',
        position: 'absolute',
        top: '110%',
        zIndex: '100'
    },
    menuItem: {
        color: 'rgba(0, 0, 0, 0.54)',
        fontWeight: '600',
        // padding: '12px 50px 12px 20px ',
        transition: 'all 0.3s ease',
        width: '100%',
        '&:hover': {
            backgroundColor: 'transparent',
            color: '#fb236a',
            paddingLeft: '30px',

        }
    },
    listItem:{
        padding:theme.spacing(0.75)
    }
}));
const options = [
    '30 Per Page',
    '40 Per Page',
    '50 Per Page',
    '60 Per Page',
];
const SelectSortBy = () => {
    const classes = useClasses()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
            <Paper component="div" className={classes.root}>
                <List component="nav" aria-label="Sort" style={{ position: 'relative' }}>
                    <ListItem
                        button
                        aria-haspopup="true"
                        aria-controls="lock-menu"
                        aria-label="Select Country"
                        onClick={handleClickListItem}
                        classes={{root:classes.listItem}}
                    >
                        <ListItemText  secondary={options[selectedIndex]} />
                        <ExpandMoreOutlined color="action" />
                    </ListItem>
                </List>
                <MenuList
                    className={classes.menuList}
                    id="lock-menu"
                    anchorEl={anchorEl}
                    keepMounted

                    open={Boolean(anchorEl)}
                    onClose={handleClose}

                    style={{ display: anchorEl ? 'block' : 'none', direction: 'ltr' }}>
                    {options.map((option, index) => (
                        <MenuItem
                            className={classes.menuItem}
                            key={option}
                            // disabled={index === 0}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                        >
                            <Typography variant="body2">{option}</Typography>
                        </MenuItem>
                    ))}
                </MenuList>
            </Paper>

            </ClickAwayListener>
    )
}
export default SelectSortBy