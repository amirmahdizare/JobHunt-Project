import React, { useEffect, useState } from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import Category from './Category'
import { getPopularCategories } from '../../../../../api/public'
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
    const [categoriesData, setcategoriesData] = useState([])
    useEffect(() => {
        getPopularCategories()
            .then(data => { setcategoriesData(data); console.log(data) })
    }, [])
    return (
        <Grid container className={classes.root} spacing={1}  >
            {categoriesData ? categoriesData.filter((item,index)=>index<8).map(category =>
            (
                <Category title={category.title} id={category.id} icon={category.icon} />
            )) : <Typography>No Popular Category Found</Typography>}
            {/* Sample Category */}
            {/* <Category title="Education Training" status="(6 Open Positions)" 
            icon={<LineAwesome
                icon={SvgGraduationCapSolid}
                className="icon" />} 
            /> */}
        </Grid>
    )
}
export default CategoriesContainer