import React from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AddIcon from '@material-ui/icons/Add';
import { Link } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import RemoveIcon from '@material-ui/icons/Remove';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiAccordionSummary-root': {
      padding: 'unset'
    }
  },
  heading: {
    color: props => { return props.expanded == props.title ? 'white' : '#96a0bd' },
    fontSize: '22px',
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  icon: {
    color: 'white',
    fontSize: '1.5em',
  },
  menuItem: {
    color: props => { return props.expanded == props.title ? 'white' : 'gray' },
    fontWeight: '600',
    padding: '10px 10px 10px 30px',
    transition: 'all 0.4s ease 0s',
    
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#fb236a',
      marginLeft: '15px',  
    }
  },
  menuList: {
    width: '100%',
  },
  menuItemLink: {
    color: 'inherit',
    width:'100%',
    '&:hover': {
      textDecoration: 'none',
    }
  }
}));
const CustomMenu = (props) => {
  const classes = useStyles(props);
  return (
    <Accordion className={classes.root} expanded={props.expanded == props.title} onChange={props.handleChange(props.title)}>
      <AccordionSummary
        expandIcon={
          props.expanded == props.title
            ? <RemoveIcon className={classes.icon} />
            : <AddIcon className={classes.icon} />}
        aria-controls={`${props.title}-content`}
        id={props.title}
      >
        <Typography className={classes.heading}>{props.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <MenuList className={classes.menuList}>
          {props.menuItems.map((item) => <MenuItem  className={classes.menuItem}><Link onClick={props.onMenuItemClick} className={classes.menuItemLink} href={item.href}>{item.name}</Link></MenuItem>)}
        </MenuList>
      </AccordionDetails>
    </Accordion>
  )
}
export default CustomMenu
