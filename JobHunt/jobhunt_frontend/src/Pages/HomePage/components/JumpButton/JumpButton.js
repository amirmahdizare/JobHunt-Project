import React from 'react'
import {  Box, Button,makeStyles  } from '@material-ui/core'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
const useClasses = makeStyles(theme => ({
    root: {
        border: '2px solid white',
        borderRadius: '50%',
        transition:'all .4s ease',
        position:'absolute',
        top:'-67.5px',
        '&:hover':{
            borderColor:theme.palette.secondary.main,
            color:theme.palette.text.secondary,
            '& $inner':{
                backgroundColor:theme.palette.secondary.main,
                color:'white'
            }

        },
        padding:theme.spacing(4)
    },
    inner:{
        backgroundColor:'white',
        borderRadius: '50%',
        boxShadow: '0px 10px 30px rgba(0,0,0,0.15)',
        color:theme.palette.secondary.main,
        padding:theme.spacing(2),

    }
}))
const JumpButton = () => {
    const classes = useClasses()
    return (
        <Box className={classes.root}>
                <Button href="#categories"  className={classes.inner}><ArrowDownwardIcon fontSize="large"/></Button>
        </Box>
    )
}
export default JumpButton