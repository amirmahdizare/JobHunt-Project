import React from 'react'
import {
    ClickAwayListener, List,
    ListItem, ListItemText, makeStyles, MenuItem,
    MenuList, Paper, Typography
} from '@material-ui/core'
import { ExpandMoreOutlined } from '@material-ui/icons';
import { changePagination } from '../Store/Actions/jobAction';
import { connect } from 'react-redux';

const useClasses = makeStyles((theme) => ({
    root: {
        borderRadius: theme.spacing(0.5),
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'relative',
        backgroundColor: '#f4f5fa',
        boxShadow: 'unset',
        color: 'black',
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
    listItem: {
        padding: theme.spacing(0.75)
    }
}));
const Jh_SelectMenu = (props) => {
    const { options } = props;
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
                        classes={{ root: classes.listItem }}
                    >
                        <ListItemText secondary={options[selectedIndex].name} />
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
                            onClick={() => props.changePagination(options[index].id)}
                        >
                            <Typography variant="body2">{option.name}</Typography>
                        </MenuItem>
                    ))}
                </MenuList>
            </Paper>

        </ClickAwayListener>
    )
}

const mapStateToProps = state => {
    return {
        JobReducer: state.JobReducer
    };
};

export default connect(mapStateToProps, { changePagination })(Jh_SelectMenu);