import { Box, CircularProgress, Typography } from '@material-ui/core'
import React from 'react'

export const SectionLoading = ({title}) => {
    return (
        <Box my={2} width={1} display={'flex'} flexDirection={'column'}   justifyContent="center" alignItems={'center'}>
            <CircularProgress/>
            &nbsp;
            {title && <Typography>{title}</Typography>}
        </Box>
    )
}
