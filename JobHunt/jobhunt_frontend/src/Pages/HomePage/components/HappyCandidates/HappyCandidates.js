import React from 'react'
import { Box, Container,makeStyles, Typography } from '@material-ui/core'
import happyCandidatesBackground from '../../../../asset/backgrounds/happyCandidatesBackground.jpg'
import CondidatesSlider from './components/CondidatesSlider'
const useClasses = makeStyles(theme => ({
    root: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        backgroundImage:`url(${happyCandidatesBackground})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        height:'550px',
        color:'black',
        position:'relative',
        width:'100%',
        '&:before':{
            backgroundColor:'#8b91dd',
            position:'absolute',
            content:"''",
            height:'100%',
            left:'0',
            opacity:'0.8',
            top:'0',
            width:'100%',
            zIndex:'0'
        }
    },
    content:{
        position:'relative',
        color:'white'
    }
 } ))
const HappyCandidates = () => {
    const classes=useClasses()
    return (
        <Box className={classes.root}>
            <Container maxWidth='lg'>
                <Box mt={6} className={classes.content}>
                    <Typography variant="h3">Kind Words From Happy Candidates</Typography>
                    <Typography variant="h6">What other people thought about the service provided by JobHunt</Typography>
                </Box>
                <CondidatesSlider/>
            </Container>
        </Box>
    )
}
export {HappyCandidates}