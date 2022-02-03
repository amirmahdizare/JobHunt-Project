import { Box, Button, Container, Typography } from '@material-ui/core'
import React from 'react'
import CategoriesContainer from './components/CategoriesContainer'
import { makeStyles } from '@material-ui/core'
import JumpButton from './JumpButton/JumpButton'
import { useGetData } from '../../../../hooks/useGetData'
import { getAllJobOffers, getTodayJobs } from '../../../../api/public'
const useClasses = makeStyles(theme => ({
    root: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        color: 'black',
        position: 'relative'
    }

}))
const PopularCategories = () => {
    const classes = useClasses()
    const [number_of_jobs] = useGetData(getAllJobOffers)
    const [todayJobs] = useGetData(getTodayJobs)
    return (
        <Container maxWidth="lg" className={classes.root}>
            <JumpButton />
            <Box id="categories" position="absolute" top="-30px"></Box>
            <Box mb={3} mt={10}><Typography variant="h4">Popular Categories</Typography></Box>
            <Box >
                {number_of_jobs && <Typography >{number_of_jobs} jobs live </Typography>}
                {!!todayJobs?.number_of_entities && <Typography>{todayJobs?.number_of_entities}-  added today.</Typography>}
            </Box>
            <CategoriesContainer />
        </Container>
    )
}
export default PopularCategories