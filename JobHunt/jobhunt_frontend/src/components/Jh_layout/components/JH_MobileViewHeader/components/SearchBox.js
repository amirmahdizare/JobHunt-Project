import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles , withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {      alignItems: 'center',
      backgroundColor: '#040e2b',
      borderRadius: '10px',
      display: 'flex',
      padding: '5px 10px !important',
  },
  input: {
    color: 'gray',
    flex: 1,
    fontSize: '18px',
    marginLeft: theme.spacing(1),
    
  },
  searchIcon: {
    color: 'gray',
    fontSize: '1.3em',
    transform: 'scaleX(-1)'
  },

}));
export default function SearchBox() {
  const classes = useStyles();

  return (
    <Box  py={2}>
      <Paper className={classes.root} component="form">
        <InputBase
          className={classes.input}
          placeholder="Job title,keywords or company name"
          inputProps={{ 'aria-label': 'Search Job keywords or name' }}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon className={classes.searchIcon} />
        </IconButton>
      </Paper>
    </Box>
  );
}