import { Box, Grid } from '@material-ui/core'
import React from 'react'
import { DashboardSectionHeader } from '../DashboardSectionHeader'
import { PortfolioItem } from './components/PortfolioItem'
export const Portfolio = () => {
    return (
        <Box>
            <DashboardSectionHeader 
            title="Portfolio"
            itemToAdd="Portfolio"
            addItemCallback={undefined}/>
            <Box m={2}>
            <Grid container spacing={2} >
                <PortfolioItem 
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                title="First"/>
                <PortfolioItem 
                image="https://creativelayers.net/themes/jobhunt-html/images/resource/p1.jpg"
                title="First"/>
                <PortfolioItem 
                image="https://creativelayers.net/themes/jobhunt-html/images/resource/p1.jpg"
                title="First"/>
                <PortfolioItem 
                image="https://creativelayers.net/themes/jobhunt-html/images/resource/p1.jpg"
                title="First"/>
                
            </Grid>
            </Box>
            
        </Box>
    )
}
