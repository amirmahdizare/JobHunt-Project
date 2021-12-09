import { Box, CardMedia, Container, Grid, Typography, makeStyles, CircularProgress } from '@material-ui/core'
import React from 'react'
import { Jh_Share } from '../../../components/Jh_Share'
import { ServiceCard } from './ServiceCard'
import { getAboutUsDescription, getOverServices } from '../../../api/public'
import { useGetData } from '../../../hooks/useGetData'
const useStyles = makeStyles(theme => ({
    container: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
    }
}))
export const AboutUsDescription = () => {
    const [AboutDescription, errorAboutUsDescription, loadingAboutUsDescription] = useGetData(getAboutUsDescription)
    const [servicesData, errorServices, loadingServices] = useGetData(getOverServices)
    const classes = useStyles()
    return (
        <Box>
        <Container maxWidth="lg">
            {AboutDescription &&
                <Grid container className={classes.container} spacing={2}>
                    <Grid item xs={12} md={7}>
                        <Typography variant="h5" gutterBottom>
                            {AboutDescription.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {AboutDescription.description}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <CardMedia component="img" image={AboutDescription.image} />
                    </Grid>
                    <Grid item xs={12} >
                        <Typography variant="body2" color="textSecondary">
                            {AboutDescription.note}
                        </Typography>
                    </Grid>
                    <Grid item xs={4} md={2} >

                        <Jh_Share
                            googleLink="googleLink"
                            twitterLink="twitterLink"
                            facebookLink="facebookLink" />
                    </Grid>
                </Grid>
            }
            <Box width={1} display="flex" alignItems="center" justifyContent="center">
                {AboutDescription?.length == 0 && <Typography>Not Found Data</Typography>}
                {!AboutDescription && loadingAboutUsDescription && <CircularProgress />}
            </Box>
            <Typography variant="h5" gutterBottom>
                Our Services
            </Typography>
            <Grid container spacing={2}>
                {servicesData && servicesData.map((services, index) =>
                    <ServiceCard
                        key={services.id}
                        iconName={services.icon}
                        title={services.title}
                        description={services.description} />
                )}
                {servicesData?.length == 0 && <Typography > Not ServicesData Found</Typography>}
                {!servicesData && loadingServices && <CircularProgress />}
            </Grid>

        </Container>

    </Box> )
}
