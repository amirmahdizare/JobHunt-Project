import { Box, Button ,Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import VisibilityIcon from '@material-ui/icons/Visibility';
import React from 'react'

export const PostJobStatus = ({ postJobStatus,mode }) => {
    return (
        <Box>
            {postJobStatus.status == 'success' &&
                <Alert severity='success' variant='filled' style={{alignItems: 'center'}} >
                    <Box display={'flex'} alignItems={'center'}>
                        {mode=='add' &&<Typography component={'span'}>Job Sent Successfully</Typography>}
                        {mode=='edit' &&<Typography component={'span'}>Job Edited Successfully</Typography>}
                         &nbsp;&nbsp;&nbsp;
                        <Button
                            variant="contained"
                            color="primary"
                            href={"/dashboard/managejobs" }
                            size='inherit'
                            startIcon={<VisibilityIcon/>}
                        >
                            View Job Offer Status
                        </Button>
                    </Box>
                </Alert>
            }
            {postJobStatus.status == 'error' && <Alert severity='error' variant='filled' >Something went wrong , check details!</Alert>}
        </Box>
    )
}
