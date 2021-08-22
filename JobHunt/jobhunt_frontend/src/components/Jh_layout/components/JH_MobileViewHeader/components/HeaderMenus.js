import React from 'react';
import Box from '@material-ui/core/Box';
import CustomMenu from './CustomMenu';

export default function HeaderMenus(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box mt={1}>
      <CustomMenu
        expanded={expanded}
        handleChange={handleChange}
        title="Home"
        menuItems={[{ name: 'item1', href: "#" }, { name: 'item2', href: "#" }]}
        onMenuItemClick={props.onMenuItemClick} 
        />
      <CustomMenu
        expanded={expanded}
        handleChange={handleChange}
        title="Employers"
        menuItems={[{ name: 'item1', href: "#" }, { name: 'item2', href: "#" }]} 
        onMenuItemClick={props.onMenuItemClick} 
        />
      <CustomMenu
        expanded={expanded}
        handleChange={handleChange}
        title="Candidates"
        menuItems={[{ name: 'item1', href: "#" }, { name: 'item2', href: "#" }]} 
        onMenuItemClick={props.onMenuItemClick} 
        />
      <CustomMenu
        expanded={expanded}
        handleChange={handleChange}
        title="Blog"
        menuItems={[{ name: 'item1', href: "#" }, { name: 'item2', href: "#" }]} 
        onMenuItemClick={props.onMenuItemClick} 
        />
      <CustomMenu
        expanded={expanded}
        handleChange={handleChange}
        title="Pages"
        menuItems={[{ name: 'item1', href: "#" }, { name: 'item2', href: "#" }]} 
        onMenuItemClick={props.onMenuItemClick} 
        />

    </Box>
  );
}