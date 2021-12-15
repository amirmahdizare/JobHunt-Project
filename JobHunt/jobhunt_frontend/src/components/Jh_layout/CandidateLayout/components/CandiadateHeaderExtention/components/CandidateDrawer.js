import React from 'react';
import { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import { Box, Button, Divider, Drawer, IconButton, makeStyles } from '@material-ui/core';
import { CandidateDetail } from './CandidateDetail';
import { CandidateMenu } from '../../../../../CandidateMenu';
import { UserAvatar } from '../../../../../UserAvatar';
const useStyles = makeStyles({
  content: {
    width: 300,
  },
});

export default function CandidateDrawer() {
  const classes = useStyles();
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };

  const content = (
    <Box
      className={classes.content}
      role="Content"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      display={{ xs: 'none', md: 'block' }}
    >
      <IconButton onClick={() => toggleDrawer(false)}>
        <CancelIcon color="secondary" />
      </IconButton>
      <CandidateDetail
        name="David CARLOS"
        jobTitle="UX / UI Designer"
        company="Atract Solutions"
        email="creativelayers088@gmail.com"
        location="Istanbul / Turkey" />
      <Divider light variant="middle" />
      <CandidateMenu />
    </Box>
  );
  return (
    <Box key={'right'}>
      <Button
        endIcon={<MenuIcon />}
        color="inherit"
        onClick={toggleDrawer(true)}>
        <UserAvatar src="https://creativelayers.net/themes/jobhunt-html/images/resource/es1.jpg" size="medium" name="ali tofan" />
        &nbsp;
      </Button>
      <Drawer anchor={'right'} open={state} onClose={toggleDrawer(false)}>
        {content}
      </Drawer>
    </Box>

  );
}