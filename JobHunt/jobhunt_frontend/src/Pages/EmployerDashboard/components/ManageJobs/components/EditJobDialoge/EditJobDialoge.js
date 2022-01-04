import { Box, Dialog, DialogTitle } from '@material-ui/core'
import React, { useEffect } from 'react'
import { SectionLoading } from '../../../../../../components/SectionLoading'
import { JobInformation } from '../../../PostJob/components/JobInformation/JobInformation'
import { useEditJob } from './useEditJob'
export const EditJobDialoge = ({  open, setOpen, id, refreshCallback }) => {
    const [info, handleChange, editJob, editJobStatus,loading] = useEditJob(id)
    useEffect(() => {
        if (editJobStatus.status == 'success') {
            setTimeout(() => refreshCallback(), 1250)
        }
    }, [editJobStatus.status])
    return (
        <Dialog onClose={() => setOpen(false)} aria-labelledby="simple-dialog-title" open={open}>
            {editJobStatus.status != 'success' && <DialogTitle >Edit Job Offer</DialogTitle>}
            {editJobStatus.status == 'loading' && <DialogTitle >Editing Job Offer..</DialogTitle>}

            <Box>
                {editJobStatus.status == 'loading' || loading && <SectionLoading />}
                {!loading && <JobInformation info={info} postJobStatus={editJobStatus} handleChange={handleChange} postJob={editJob} mode="edit" />}
            </Box>
        </Dialog>
    )
}
