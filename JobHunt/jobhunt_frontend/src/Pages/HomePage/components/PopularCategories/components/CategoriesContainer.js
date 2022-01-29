import React, { useState } from 'react'
import { Box, Button, CircularProgress, Grid, makeStyles, Typography } from '@material-ui/core'
import Category from './Category'
import { getPopularCategories } from '../../../../../api/public'
import { useGetData } from '../../../../../hooks/useGetData'
const useClasses = makeStyles(theme => ({
    root: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        margin: theme.spacing(3)
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
const CategoriesContainer = () => {
    const classes = useClasses()
    const [categoriesData, error, loading] = useGetData(getPopularCategories)
    const [numberOfCategories,setNumberOfCategories] = useState(8)
    return (
        <>
        <Grid container className={classes.root} spacing={1}  >
            {categoriesData && categoriesData.filter((item, index) => index < numberOfCategories).map(category =>
            (
                <Category title={category.title} id={category.id} icon={category.icon} openPositions={category?.openPositions} />
            ))}
            <Box width={1} display="flex" alignItems="center" justifyContent="center">
                {categoriesData?.length==0 && <Typography>No Popular Category Found</Typography>}
                {!categoriesData && loading && <CircularProgress />}
            </Box>
        </Grid>
        {categoriesData?.length > numberOfCategories && 
        <Button onClick={()=>setNumberOfCategories(numberOfCategories+4)}  className={classes.button} color="secondary" variant="outlined"><Typography variant="h6" style={{fontSize:'16px'}} >Browse More Categories</Typography></Button>}
        
        </>
    )
}
export default CategoriesContainer