import { Box, Button, ClickAwayListener, Dialog, DialogTitle } from '@material-ui/core'
import React, { useEffect } from 'react'
import { deleteJob } from '../../../../../api/employer'
import { useDeleteRecord } from '../../../../../hooks/useDeleteRecord'
import { SectionLoading } from '../../../../../components/SectionLoading'
import { Alert } from '@material-ui/lab'
export const DeleteJobDialoge = ({ open, setOpen, id,refreshCallback }) => {
    const [success, error, loading, sendRequest] = useDeleteRecord(deleteJob)
   useEffect(() => {
       if(success){
             setTimeout(()=>refreshCallback(),1250) 
       }
   }, [success])
    return (
        <Dialog onClose={() => setOpen(false)} aria-labelledby="simple-dialog-title" open={open}>
            {!success && !error && !loading &&
                <>
                
                    <DialogTitle id="simple-dialog-title">Are You Sure To Delete Job Offer?</DialogTitle>
                    <Box mx={2} mb={2} display={'flex'} justifyContent={'flex-end'}>
                        <Button variant='contained' onClick={() => sendRequest({ id })} color="secondary" > Yes</Button>
                        &nbsp;
                        <Button variant='contained' color="primary" onClick={() => setOpen(false)}>No</Button>
                    </Box>
                </>}
            {loading && <>
                <DialogTitle id="simple-dialog-title">Deleting Job Offer...</DialogTitle>
                <SectionLoading />
            </>}
            {!!success &&
                <Box m={2}>
                    <Alert severity='success' variant='filled'> Job Offer Successfully Deleted</Alert>
                </Box>}
            {!!error &&
                <Box m={2}>
                    <Alert severity='error' variant='filled'>Something Went Wrong When Deleting Job Offer</Alert>
                </Box>}
        </Dialog>
    )
}
