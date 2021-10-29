import { Box, Button } from '@material-ui/core'
import React, { useEffect } from 'react'

const CandidateNotFoundPage = () => {
    useEffect(() => {
        window.pageYOffset = 1
        window.scrollTo(0, 1)
        return () => window.pageYOffset = 0
    })
    return (
        <Box my={13} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <h1>Page Not Found</h1>
            <Button size="large" href="dashboard/managejobs"  color="primary" variant="contained">Back To Dashboard</Button>
        </Box>
    )
}
export default CandidateNotFoundPage