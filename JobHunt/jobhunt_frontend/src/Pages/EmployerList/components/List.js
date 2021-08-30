import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { Jh_AlphabetFilter } from '../../../components/Jh_AlphabetFilter/Jh_AlphabetFilter'
import { EmployersContainer } from './Employers/EmployersContainer'
import SelectSortBy from './SelectSortBy'
export const List = () => {
    return (
        <Box my={1} mx={1}>
            <Grid container spacing={1} alignItems="center">
                <Grid item xs={12} sm={7}>
                    <Typography>Total of 145 Employer</Typography>
                </Grid>
                <Grid item sm={5} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Typography variant="body2" >Sort By&nbsp;&nbsp;</Typography>
                    <SelectSortBy />
                </Grid>
                <Grid item xs={12}>
                    <Jh_AlphabetFilter />
                </Grid>
                <Grid item xs={12}>
                    <EmployersContainer/>
                    
                </Grid>
            </Grid>
        </Box>
    )
}
