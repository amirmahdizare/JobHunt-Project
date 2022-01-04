import { Box, Grid } from '@material-ui/core'
import React from 'react'
import { Jh_AlphabetFilter } from '../../../components/Jh_AlphabetFilter/Jh_AlphabetFilter'
import { EmployersContainer } from './Employers/EmployersContainer'
export const List = () => {
    return (
        <Box my={1} mx={1}>
            <Grid container spacing={1} alignItems="center">
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
