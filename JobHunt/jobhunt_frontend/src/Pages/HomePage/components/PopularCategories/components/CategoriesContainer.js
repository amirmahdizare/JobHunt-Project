import React, { useEffect, useState } from 'react'
import { Grid, makeStyles ,Divider, Typography } from '@material-ui/core'
import Category from './Category'
import { SvgBullhornSolid, SvgGraduationCapSolid, SvgChartLineSolid, SvgUsersSolid, SvgPhoneSolid, SvgUtensilsSolid, SvgBuilding, SvgUserMdSolid } from 'react-line-awesome-svg'
import { LineAwesome } from 'react-line-awesome-svg'
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
    const [categoriesData,setcategoriesData]=useState([])
    useEffect(() => {
        getPopularCategories()
        .then(data=> {setcategoriesData(data)   ;  console.log(data)})
        
    }, [])
    return (
        <Grid container className={classes.root} spacing={1}  >
            {categoriesData ? categoriesData.map(category => 
            (
                <Category title={category.title} id={category.id} />
            )) : <Typography>No Popular Category Found</Typography>}
            <Category
            border="0px 2px 2px 0px"
                title="Design, Art & Multimedia"
                status="(22 Open Positions)" 
                icon={<LineAwesome icon={SvgBullhornSolid} className="icon" />} />
            
            
            
            {/* Sample Category */}
            <Category title="Education Training" status="(6 Open Positions)" 
            icon={<LineAwesome
                icon={SvgGraduationCapSolid}
                className="icon" />} 
            />
            {/* /////////////// */}
            {/* <Category title="Accounting / Finance" status="(3 Open Positions)" icon={<LineAwesome
                icon={SvgChartLineSolid}
                className="icon" />} />
            <Category title="Human Resource" status="(3 Open Positions)" icon={<LineAwesome
                icon={SvgUsersSolid}
                className="icon" />} />
            <Category title="Telecommunications" status="(22 Open Positions)" icon={<LineAwesome
                icon={SvgPhoneSolid}
                className="icon" />} />
            <Category title="Restaurant / Food Service" status="(6 Open Positions)" icon={<LineAwesome
                icon={SvgUtensilsSolid}
                className="icon" />} />
            <Category title="Construction / Facilities" status="(3 Open Positions)" icon={<LineAwesome
                icon={SvgBuilding}
                className="icon" />} />
            <Category title="Health" status="(3 Open Positions)" icon={<LineAwesome
                icon={SvgUserMdSolid}
                className="icon" />} /> */}

        </Grid>
    )
}
export default CategoriesContainer