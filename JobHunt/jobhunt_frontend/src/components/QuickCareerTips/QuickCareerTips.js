import React from 'react'
import { Box, CircularProgress, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import { getBlogs } from '../../api/public'
import { TipsBg } from '../../asset/index'
import { useGetData } from '../../hooks/useGetData'
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
    const [tipsDetail,error,loading] = useGetData(getBlogs)
    console.log(tipsDetail?.posts)
    return (
        <Box className={classes.root} width="100%">
            <Container className={classes.container} maxWidth="lg" >
                <Box mt={5} textAlign="center">
                    <Typography variant="h4" gutterBottom>Quick Career Tips</Typography>
                    <Typography color="textSecondary" gutterBottom>Found by employers communicate directly with hiring managers and recruiters.</Typography>
                </Box>
                <Grid className={classes.tipContainer} container spacing={2}>
                    {tipsDetail?.posts !=0 ? tipsDetail?.posts.map(tip => (
                        <Tip
                            key={tip?.id}
                            id={tip?.id}
                            date={tip?.created_at}
                            description={tip?.caption}
                            image={tip?.image}
                            // numberOfComments={0}
                            title={tip?.title}
                        />
                    )) : <Typography>No Tips Found</Typography>}
                    {loading && <Box width={1} display={'flex'} alignItems={'center'} justifyContent={'center'}><CircularProgress/></Box>}
                </Grid>
            </Container>
        </Box>
    )
}
export { QuickCareerTips }