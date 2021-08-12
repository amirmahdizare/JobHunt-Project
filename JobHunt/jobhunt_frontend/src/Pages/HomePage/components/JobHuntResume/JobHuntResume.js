import {Box, Button, Container, Typography ,makeStyles } from '@material-ui/core'
import React from 'react'
import parallax from '../../../../asset/backgrounds/parallax.jpg'
const useClasses=makeStyles(theme=>({
    root:{
        height:'400px',
        color:'white',
        backgroundImage:`url(${parallax})`,
        backgroundSize:'cover',
        position:'relative',
        textAlign:'center',
        '&:before':{
            backgroundColor:'#141f72',
            position:'absolute',
            content:"''",
            height:'100%',
            left:'0',
            opacity:'0.8',
            top:'0',
            width:'100%',
            zIndex:'0'
        }
    }
    ,
    container:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        position:'relative',
        width:'100%',
    }
    ,
    button:{
        borderColor:'white',
        borderWidth:'2px',
        borderRadius:theme.spacing(1),
        color:'inherit',
        margin:theme.spacing(2),
        padding:theme.spacing(3),
        paddingTop:theme.spacing(1.5),
        paddingBottom:theme.spacing(1.5),
        textTransform:'none',
        '&:hover':{
            backgroundColor:'white',
            color:theme.palette.secondary.main
        }
    }
}))
const JobHuntResume = () => {
    const classes=useClasses()
    return (
        <Box width="100%" className={classes.root}>
            <Container maxWidth="lg" className={classes.container} >
                <Box m={1}><Typography variant="h3">Make a Difference with Your Online Resume!</Typography></Box>
                <Box m={1} mb={2}><Typography variant="h6">Your resume in minutes with JobHunt resume assistant is ready!</Typography></Box>
                <Button className={classes.button} variant="outlined"><Typography >Create an Account</Typography></Button>
            </Container>
        </Box>
    )
}
export default JobHuntResume