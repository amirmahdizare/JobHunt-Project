import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import SelectSortBy from './SelectSortBy'

export const PaginationSize = ({handleChange,pagination_size}) => {
    return (
        <Grid item sm={5} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Typography variant="body2" >Sort By&nbsp;&nbsp;</Typography>
            <SelectSortBy handleChange ={handleChange} pagination_size={pagination_size}  />
        </Grid>
    )
}
