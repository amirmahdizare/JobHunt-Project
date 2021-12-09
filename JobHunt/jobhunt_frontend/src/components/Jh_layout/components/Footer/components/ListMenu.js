import React from 'react'
import { Link, MenuItem, MenuList, makeStyles } from '@material-ui/core'
const useClasses = makeStyles(() => ({
    root: {
        '& .MuiLink-underlineHover:hover': {
            textDecoration: 'none',
        },
        '& .MuiMenuItem-root':{
            fontSize:'15px'
        }
    },
    menuItem: {
        boxSizing: 'box-content',
        color: '#8a99b3',
        position: 'relative',
        transition: 'all 0.3s ease',
        '&:before': {
            backgroundColor: '#8a99b3',
            content: '""',
            height: '1px',
            marginRight: '10px',
            transition: 'all 0.3s ease',
            width: '20px',
        },
        '&:hover': {
            color: 'white',
            '& .MuiSvgIcon-root': {
                width: '20px'
            },
            '&:before': {
                backgroundColor: 'white',
                width: '35px',
            }
        }
    },
    link: {
        color: 'inherit',
        width: '100%',
    }
}))

const ListMenu = (props) => {
    const classes = useClasses()
    return (
        <MenuList className={classes.root}>
            {props.menuItems.map((item) => (
                <MenuItem className={classes.menuItem} >
                    <Link
                        className={classes.link}
                        href={item.href}>
                        {item.name}
                    </Link>
                </MenuItem>
            ))}
        </MenuList>
    )
}
export { ListMenu }