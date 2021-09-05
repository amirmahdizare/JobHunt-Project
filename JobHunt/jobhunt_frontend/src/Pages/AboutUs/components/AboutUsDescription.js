import { Box, CardMedia, Container, Grid, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import { SvgClock, SvgCodepen, SvgSearchSolid, SvgTvSolid, SvgUser } from 'react-line-awesome-svg'
import { Jh_Share } from '../../../components/Jh_Share'
import { ServiceCard } from './ServiceCard'
const useStyles = makeStyles(theme => ({
    container: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
    }
}))
export const AboutUsDescription = () => {
    const classes = useStyles()
    return (
        <Box>
            <Container maxWidth="lg">
                <Grid container className={classes.container} spacing={2}>
                    <Grid item xs={12} md={7}>
                        <Typography variant="h5" gutterBottom>
                            About Job Hunt
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a glowered inset one echidna cassowary some parrot and much as goodness some froze the sullen much connected bat wonderfully on instantaneously eel valiantly petted this along across highhandedly much.Repeatedly dreamed alas opossum but dramatically despite expeditiously that jeepers loosely yikes that as or eel underneath kept and slept compactly far purred sure abidingly up above fitting to strident wiped set waywardly far the and pangolin horse approving paid chuckled cassowary oh above a much opposite far much hypnotically more therefore wasp less that hey apart well like while superbly orca and far hence one.Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <CardMedia component="img" image="https://creativelayers.net/themes/jobhunt-html/images/resource/bsd1.jpg" />
                    </Grid>
                    <Grid item xs={12} >
                        <Typography variant="body2" color="textSecondary">
                            Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a glowered inset one echidna cassowary some parrot and much as goodness some froze the sullen much connected bat wonderfully on instantaneously eel valiantly petted this along across highhandedly much.Repeatedly dreamed alas opossum but dramatically despite expeditiously that jeepers loosely yikes that as or eel underneath kept and slept compactly far purred sure abidingly up above fitting to strident wiped set waywardly far the and pangolin horse approving paid chuckled cassowary oh above a much opposite far much hypnotically more therefore wasp less that hey apart well like while superbly orca and far hence one.Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy.
                        </Typography>
                    </Grid>
                    <Grid item xs={4} md={2} >

                        <Jh_Share
                            googleLink="googleLink"
                            twitterLink="twitterLink"
                            facebookLink="facebookLink" />
                    </Grid>
                </Grid>
                <Typography variant="h5" gutterBottom>
                    Our Services
                </Typography>
                <Grid container spacing={2}>
                    <ServiceCard
                        iconName={SvgClock}
                        title="Advertise A Job"
                        description="Duis a tristique lacus. Donec vehicula ante id lorem venenatis posuere. Morbi in lectus." />
                    <ServiceCard
                        iconName={SvgSearchSolid}
                        title="	CV Search"
                        description="Duis a tristique lacus. Donec vehicula ante id lorem venenatis posuere. Morbi in lectus." />
                    <ServiceCard
                        iconName={SvgUser}
                        title="Recruiter Profiles"
                        description="Duis a tristique lacus. Donec vehicula ante id lorem venenatis posuere. Morbi in lectus." />
                    <ServiceCard
                        iconName={SvgCodepen}
                        title="Temp Search"
                        description="Duis a tristique lacus. Donec vehicula ante id lorem venenatis posuere. Morbi in lectus." />
                    <ServiceCard
                        iconName={SvgTvSolid}
                        title="Display Jobs"
                        description="Duis a tristique lacus. Donec vehicula ante id lorem venenatis posuere. Morbi in lectus." />
                    <ServiceCard
                        iconName={SvgUser}
                        title="For Agencies"
                        description="Duis a tristique lacus. Donec vehicula ante id lorem venenatis posuere. Morbi in lectus." />



                </Grid>
            </Container>

        </Box>
    )
}
