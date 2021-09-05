import React, { useEffect } from 'react'
import { Box, Breadcrumbs, Link, makeStyles, Typography } from '@material-ui/core'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
const useStyles = makeStyles(theme => ({
    root: {
        alignItems:'center',
        backgroundColor:'#f4f5fa',
        display:'flex',
        justifyContent:'space-between',
        padding:theme.spacing(15),
        [theme.breakpoints.down('sm')]:{
            alignItems:'center',
            justifyContent:'space-around',
            flexDirection:'column',
            textAlign:'center',
            padding:theme.spacing(5)
        }
    }
}))
export const AboutUsHeader = () => {
    useEffect(()=>{
            window.pageYOffset=1
            window.scrollTo(0,1)
    }) 
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Box>
                <Typography variant="h3">About Us</Typography>
                <Typography color="textSecondary">Keep up to date with the latest news</Typography>
            </Box>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                <Link underline="none"  color="inherit" href="/" >
                    Home
                </Link>
                {/* <Link underline="none" color="inherit" href="/" > */}
                    <Typography> Pages</Typography>
                {/* </Link> */}
                <Typography color="textPrimary">About Us</Typography>
            </Breadcrumbs>
        </Box>
    )
}
