import React from 'react'
import { Container, Grid, Link, makeStyles, Typography } from '@material-ui/core'
import { Box } from '@material-ui/core'
import { DownloadBox } from './components/DownloadBox'
import ContactUs from './components/ContactUs/ContactUs'
import FAQ from './components/FAQ'
import { FindJobs } from './components/FindJobs'
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
const useClasses = makeStyles(theme => ({
    root: {
        backgroundColor: '#24324a',
        paddingTop:theme.spacing(3)
    },
    rights: {
        backgroundColor: '#1d293e',
        width: '100%',
        padding: theme.spacing(3),
        textAlign: 'center',
        color: '#6a7d9b',
        position: 'relative'
    },
    icon: {
        border: '3px solid #6a7d9b',
        borderRadius: '50%',
        color: '#6a7d9b',
        fontSize: '50px',

    },
    jumpToFirst: {
        cursor: 'pointer',
        position: 'absolute',
        right: '5%',
        top: '-50%',
        transition: 'all 0.4s ease',
        '&:hover': {
            '& $icon': {
                borderColor: 'white',
                color: 'white',
            }
        }
    }
}))
const Footer = () => {
    const classes = useClasses()
    return (
        <Box className={classes.root} display="flex" flexWrap="wrap" justifyContent="space-around">
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <ContactUs />
                    <FAQ />
                    <FindJobs />
                    <DownloadBox />
                </Grid>
            </Container>
            <Box className={classes.rights} >
                <Typography variant="body2">© 2018 Jobhunt All rights reserved. Design by Creative Layers</Typography>
                <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={classes.jumpToFirst} ><ArrowUpwardOutlinedIcon className={classes.icon} /></Link>
            </Box>
        </Box>
    )
}

export default Footer