import { Box, makeStyles } from '@material-ui/core'
import React from 'react'
import { useState, useEffect } from 'react';
import { Pagination } from '@material-ui/lab';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(3)
    }
  },
  pageButton: {
    '& li': {
      margin: theme.spacing(0.1),
      '& button': {
        fontSize: theme.typography.body2.fontSize,
        [theme.breakpoints.up('sm')]: {
          fontSize: theme.typography.body1.fontSize
        },
      }
    },
    '& button.Mui-selected':
    {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      }
    }
  }
}));

export const Jh_Pagination = (props) => {
  const { pages, handleChange, page } = props
  const classes = useStyles();

  useEffect(() => {
    const text = document.createElement('p');
    text.textContent = "Next"
    text.style.marginRight = "8px"
    document.querySelector('.MuiPagination-ul li:last-child button svg').before(text)
    const previous = document.createElement('p');
    previous.textContent = "Previous"
    previous.style.marginLeft = "8px"
    document.querySelector('.MuiPagination-ul li:first-child button svg').after(previous)
  }, [])
  return (
    <Box className={classes.root}>
      <Pagination
        boundaryCount={1}
        count={pages}
        classes={{ ul: classes.pageButton }}
        onChange={handleChange}
        size="large"
        page={page}
        variant="outlined" />
    </Box>
  );
}
