import { Box, Grid } from '@material-ui/core'
import { useGetData } from '../../../../../../hooks/useGetData'
import React from 'react'
import { getCompany } from '../../../../../../api/employer'

export const Packages = () => {
    const [info, error, loading] = useGetData(getCompany)
    const { active_package = null } = info
    return (
        <Box boxSizing="border-box">
            <Grid container spacing={3} >
            </Grid>
        </Box>
    )
}
