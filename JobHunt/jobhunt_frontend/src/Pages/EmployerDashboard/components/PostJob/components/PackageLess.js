import React from 'react'
import { Box, Button, CircularProgress, Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

export const PackageLess = ({ loading }) => {
    console.log(loading)
    return (
        <Box m={2}>
            <Alert style={{ display: 'flex', alignItems: 'center' }} severity='warning' variant='filled' >
                {loading
                    ? <Box display={'flex'} alignItems={'center'}>
                        <Typography display='inline'>Loading Package Status</Typography>&nbsp;&nbsp;
                        <CircularProgress  />
                        </Box>
                    : <Box>
                        <Typography display='inline'>You don't Have Active Package to add job offer</Typography> &nbsp;
                        <Button
                            variant="contained"
                            color="primary"
                            href="/dashboard/packages"
                            size='inherit'
                        >
                            Buy Package
                        </Button>
                    </Box>}
            </Alert>
        </Box>
    )
}
