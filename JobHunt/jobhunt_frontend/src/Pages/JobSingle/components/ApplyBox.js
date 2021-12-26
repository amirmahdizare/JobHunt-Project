import { Box, Grid, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { Jh_Button } from '../../../components/Jh_Button'
import { LineAwesome, SvgHeart, SvgLinkedinIn, SvgPaperPlane, SvgInfoSolid } from 'react-line-awesome-svg';
import { _applyJob } from '../../../api/Condidate/applyJob'

export const ApplyBox = ({ job }) => {
    const [shortList, toggleShortList] = useState(false)
    return (
        <Box my={2}>
            <Grid container justifyContent='space-between' spacing={1}>
                <Grid item xs={12}><Jh_Button startIcon={<LineAwesome fontSize="inherit" icon={SvgPaperPlane} />} onClick={() => _applyJob(job?.id)} color="primary">Apply for Job</Jh_Button></Grid>
                <Grid item xs={6}> <Jh_Button startIcon={<LineAwesome icon={SvgInfoSolid} />} color="warning"><Typography>Company Detail</Typography></Jh_Button></Grid>
                <Grid item xs={6}>
                    <Jh_Button startIcon={<LineAwesome icon={SvgHeart} />} color="secondary" onClick={() => toggleShortList(!shortList)} variant={shortList ? 'contained' : ' outlined'}>
                        <Typography>{shortList ? 'Short Listed' : 'Add to Short List'}</Typography>
                    </Jh_Button>
                </Grid>
            </Grid>
        </Box>
    )
}