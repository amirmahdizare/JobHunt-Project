import { Box, Container, makeStyles, Typography } from '@material-ui/core'

import { TipsBg } from '../../asset/index'
import TipsSlider from './components/TipsSlider'
const useClasses = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${TipsBg})`
    },
    container: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },

}))
const QuickCareerTips = () => {
    const classes = useClasses()
    return (
        <Box className={classes.root} width="100%">
            <Container className={classes.container} maxWidth="lg" >
                <Box mt={5} textAlign="center">
                    <Typography variant="h4" gutterBottom>Quick Career Tips</Typography>
                    <Typography color="textSecondary" gutterBottom>Found by employers communicate directly with hiring managers and recruiters.</Typography>
                </Box>
                <TipsSlider />
            </Container>
        </Box>
    )
}
export { QuickCareerTips }