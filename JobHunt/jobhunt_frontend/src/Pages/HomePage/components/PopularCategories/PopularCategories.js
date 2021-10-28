import { Box, Button, Container, Typography } from '@material-ui/core'
import React from 'react'
import CategoriesContainer from './components/CategoriesContainer'
import { makeStyles } from '@material-ui/core'
import JumpButton from './JumpButton/JumpButton'
const useClasses = makeStyles(theme => ({
    root: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        color:'black',
        position:'relative'
    }
    ,
    button: {
        borderRadius: theme.spacing(1),
        border: '2px solid',
        borderColor: theme.palette.secondary.main,
        color: theme.palette.text.primary,
        marginBottom: theme.spacing(5),
        padding: theme.spacing(1.5),
        textTransform: 'none',
        transition: 'all .4s ease',

        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            border: '2px solid',
            borderColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText
        }
    }
}))
const PopularCategories = () => {
    const classes = useClasses()
    return (
        <Container maxWidth="lg" className={classes.root}>
            <JumpButton/>
            <Box id="categories" position="absolute" top="-30px"></Box>
            <Box mb={3} mt={10}><Typography variant="h4">Popular Categories</Typography></Box>
            <Box ><Typography >37 jobs live - 0 added today.</Typography></Box>
            <CategoriesContainer />
            <Button href="/jobs"  className={classes.button} color="secondary" variant="outlined"><Typography variant="h6" style={{fontSize:'16px'}} >Browse All Categories</Typography></Button>
        </Container>
    )
}
export default PopularCategories