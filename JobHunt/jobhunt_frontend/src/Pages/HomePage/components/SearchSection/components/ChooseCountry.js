import React from 'react'
import {
    Grid, List, ListItem,
    ListItemText, makeStyles, MenuItem,
    MenuList, Paper, Typography
} from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
const useClasses = makeStyles((theme) => ({
    root: {
        borderRadius: theme.spacing(1),
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'relative',
        '& .MuiList-root': {
            padding: '0',
            width: '100%'
        }
        ,
        '& .MuiListItem-button': {
            padding: theme.spacing(2)
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
        padding: '12px 50px 12px 20px ',
        transition: 'all 0.3s ease',
        width: '100%',
        '&:hover': {
            backgroundColor: 'transparent',
            color: '#fb236a',
            paddingLeft: '30px',

        }
    }
}));
const options = [
    'New York',
    'Istanbul',
    'London',
    'Russia',
];
const ChooseCountry = () => {
    const classes = useClasses()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

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
        <Grid item xs={12} sm={4} md={3}>
            <Paper component="div" className={classes.root}>
                <List component="nav" aria-label="Device settings" style={{ position: 'relative' }}>
                    <ListItem
                        button
                        aria-haspopup="true"
                        aria-controls="lock-menu"
                        aria-label="Select Country"
                        onClick={handleClickListItem}
                    >
                        <LocationOnOutlinedIcon fontSize="large" color="secondary" />
                        <ListItemText secondary={options[selectedIndex]} />
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
                            <Typography style={{ fontSize: '0.875em' }}>{option}</Typography>
                        </MenuItem>
                    ))}
                </MenuList>
            </Paper>

        </Grid>
    )
}
export default ChooseCountry