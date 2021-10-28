import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { getBlogs } from '../../api/public'
import { TipsBg } from '../../asset/index'
import Tip from './components/Tip'
const useClasses = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${TipsBg})`
    },
    container: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    tipContainer: {
        margin: theme.spacing(1)
    }
}))
const QuickCareerTips = () => {
    const classes = useClasses()
    const [tips, setTips] = useState([])
    useEffect(() => {
        getBlogs().then((data) => setTips(data))
    }, [])
    return (
        <Box className={classes.root} width="100%">
            <Container className={classes.container} maxWidth="lg" >
                <Box mt={5} textAlign="center">
                    <Typography variant="h4" gutterBottom>Quick Career Tips</Typography>
                    <Typography color="textSecondary" gutterBottom>Found by employers communicate directly with hiring managers and recruiters.</Typography>
                </Box>
                <Grid className={classes.tipContainer} container spacing={2}>
                    {tips.map(tip => (
                        <Tip
                            key={tip.id}
                            id={tip.id}
                            // date="March 29, 2017"
                            description={tip.caption}
                            image={tip.image}
                            // numberOfComments={0}
                            title={tip.title}
                        />
                    ))}
                    {/* <Tip
                        date="March 29, 2017"
                        description="A job is a regular activity performed in exchange becoming an employee, volunteering" 
                        image="https://creativelayers.net/themes/jobhunt-html/images/resource/b1.jpg"
                        numberOfComments={0}
                        title="Attract More Attention Sales And Profits"
                    />*/}
                </Grid>
            </Container>
        </Box>
    )
}
export { QuickCareerTips }