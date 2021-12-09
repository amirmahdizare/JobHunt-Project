import { Box, Container, Grid, Typography, makeStyles, CircularProgress } from '@material-ui/core'
import Company from './components/Company.js'
import React, { useEffect, useState } from 'react'
import { getPartners } from '../../api/public/index.js'
const useClasses = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: theme.spacing(1),
    }
}))
const Partners = () => {
    const classes = useClasses()
    const [data,setData]=useState([])
    useEffect(() => {
        getPartners().then((data)=>setData(data))
    }, [])
    return (
        <Box>
            <Container maxWidth="lg" className={classes.root}>
                <Box m={4} textAlign="center">
                    <Typography variant="h4" gutterBottom>Companies We've Helped</Typography>
                    <Typography  color="textSecondary">What other people thought about the service provided by JobHunt</Typography>
                </Box>
                <Grid container className={classes.container} spacing={2}>
                    {data
                     ? data.map((partner)=>
                     (<Company logo={partner.logo} link={partner?.link} title={partner.name} />))
                    :<CircularProgress/>}
                </Grid>

            </Container>

        </Box>
    )
}
export { Partners }