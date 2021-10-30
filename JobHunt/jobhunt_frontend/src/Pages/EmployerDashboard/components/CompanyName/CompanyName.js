import React, { useState } from 'react'
import { Box, TextField } from '@material-ui/core'
import { SectionHeader } from '../../../../components/SectionHeader'

export const CompanyName = (props) => {
    const [state,setState]=useState([])
    return (
        <Box>
            <SectionHeader title="Company Name" />
            <TextField
                id="outlined-number"
                label="Company Name"
                type="text"
                // InputLabelProps={{
                //     shrink: true,
                // }}
                variant="outlined"
                margin="dense"
                fullWidth
            />
            

        </Box>
    )
}
