import React from 'react';
import Box from '@material-ui/core/Box';
import CustomMenu from './CustomMenu';
import { useAuth } from '../../../../../api/authentication';
export default function HeaderMenus(props) {
  const [expanded, setExpanded] = React.useState(false);
  const auth = useAuth()
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box mt={1}>
      <CustomMenu
        expanded={expanded}
        handleChange={handleChange}
        title="About Us"
        menuItems={[
          { name: 'Contact Us', href: "/contactus" },
          { name: 'FAQ', href: "/faq" },
          { name: 'How it Works', href: "/howitworks" },
          { name: 'Princing Plan', href: "/pricing" },
          { name: 'Terms & Condition', href: "/terms" },
        ]}
        onMenuItemClick={props.onMenuItemClick}
      />
            <CustomMenu
        expanded={expanded}
        handleChange={handleChange}
        title="Jobs"
        menuItems={[{ name: 'Recent Jobs List', href: "/jobs" }]}
        onMenuItemClick={props.onMenuItemClick}
      />
      <CustomMenu
        expanded={expanded}
        handleChange={handleChange}
        title="Blog"
        menuItems={[{ name: 'Blogs List', href: "/bloglist" }]}
        onMenuItemClick={props.onMenuItemClick}
      />
      <CustomMenu
        expanded={expanded}
        handleChange={handleChange}
        title="Candidate"
        menuItems={[{ name: 'Dashboard', href: auth.user == 'candidate' ? '/dashboard' : "/login" }]}
        onMenuItemClick={props.onMenuItemClick}
      />
      <CustomMenu
        expanded={expanded}
        handleChange={handleChange}
        title="Employer"
        menuItems={[{ name: 'Manage Job', href: auth.user == 'employer' ? '/managejobs' : 'login' }]}
        onMenuItemClick={props.onMenuItemClick}
      />

    </Box>
  );
}