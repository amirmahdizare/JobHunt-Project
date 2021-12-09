import React from 'react'
import { Box, CircularProgress, Grid, makeStyles, Typography } from '@material-ui/core'
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
}))
const CategoriesContainer = () => {
    const classes = useClasses()
    const [categoriesData, error, loading] = useGetData(getPopularCategories)
    return (
        <Grid container className={classes.root} spacing={1}  >
            {categoriesData && categoriesData.filter((item, index) => index < 8).map(category =>
            (
                <Category title={category.title} id={category.id} icon={category.icon} />
            ))}
            <Box width={1} display="flex" alignItems="center" justifyContent="center">
                {categoriesData?.length==0 && <Typography>No Popular Category Found</Typography>}
                {!categoriesData && loading && <CircularProgress />}
            </Box>
        </Grid>
    )
}
export default CategoriesContainer