import { Box, CircularProgress } from '@material-ui/core'
import React from 'react'

export const SectionLoading = () => {
    return (
        <Box my={2} width={1} display={'flex'} alignItem="center" justifyContent="center">
            <CircularProgress/>
        </Box>
    )
}
