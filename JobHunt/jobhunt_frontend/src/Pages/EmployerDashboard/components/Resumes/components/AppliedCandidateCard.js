import React, { useEffect, useState } from 'react'

import { Box, CardMedia, Grid, MenuItem, TextField, Typography } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab';
import { ThumbUp } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

import { getCandidateInfo } from '../../../../../api/public';
import { SectionLoading } from '../../../../../components/SectionLoading';
import { UpdateSentResumeStatus } from '../../../../../api/employer';
import { useGetData } from '../../../../../hooks/useGetData';
import { usePostData } from '../../../../../hooks/usePostData';

const useStyles = makeStyles(theme => ({
    root: {
        borderBottom: '1px #e2e2e2 solid',
        '&:hover': {
            boxShadow: '0px 0px 30px rgba(0,0,0,0.1)',
            marginTop: '0px',
            position: 'relative',
            zIndex: '12',
            transition: 'all 0.4s ease',
            borderColor: 'white'
        },
        '& .MuiSelect-icon': { top: 'calc(50% - 18px)' }
    },

    icon: { verticalAlign: 'middle' },

    accepted: {
        '& div ,svg': {
            backgroundColor: 'green',
            color: 'white !important',
            border: 'unset',
            height: 'fit-content',
            padding: '6px'
        }
    },

    rejected: {
        '& div ,svg': {
            backgroundColor: 'red',
            color: 'white !important',
            height: 'fit-content',
            border: 'unset',
            padding: '6px'
        }
    }
}))

export const AppliedCandidateCard = ({ job_offer_id, id, candidate_id, status, profile }) => {

    const classes = useStyles()
    const [candidateApplyStatus, setCandidateApplyStatus] = useState()
    const [result, error, loading, setRequest] = usePostData()
    const [candidateInfo, candidateInfoError, candidateInfoLoading] = useGetData(getCandidateInfo, { id: candidate_id })

    const handleStatusChange = (value) => setRequest(UpdateSentResumeStatus, { job_offer_id, id, status: value })

    useEffect(() => result ? setCandidateApplyStatus(result) : null, [result])

    const statuses = [
        { value: 'accepted', label: <><ThumbUp fontSize='inherit' color="inherit" className={classes.icon} />&nbsp;&nbsp;<Typography display='inline'>Accepted</Typography></> },
        { value: 'rejected', label: <><ThumbDownIcon fontSize='inherit' color='inherit' className={classes.icon} />&nbsp;&nbsp;<Typography display='inline'>Rejected</Typography></> },
        { value: 'unseen', label: <><VisibilityOffIcon fontSize='inherit' color='inherit' className={classes.icon} />&nbsp;&nbsp;<Typography display='inline'>Unseen</Typography></> }]

    const classNameGenerator = (value) => {
        switch (value) {
            case 'rejected': return classes.rejected
            case 'accepted': return classes.accepted
            default: return

        }
    }

    return (
        <Box w={1} p={2} className={classes.root}>
            <Grid container spacing={2} style={{ display: 'flex', alignItems: 'center' }}>

                <Grid item xs={2} >
                    <CardMedia component={'img'} src={profile} />
                </Grid>

                <Grid item xs={10} md={4} >
                    <Typography variant='h6' gutterBottom >Candidate Name</Typography>
                    {!candidateInfoLoading && candidateInfo?.category?.title && <Typography gutterBottom color='primary' >{candidateInfo?.category?.title} </Typography>}
                    {candidateInfoLoading && <Skeleton variant='text' />}
                    <LocationOnOutlinedIcon color='action' style={{ verticalAlign: 'middle', float: 'left' }} />
                    <Typography color='textSecondary'>Candidate Location</Typography>

                </Grid>

                <Grid item container xs={12} md={6} style={{ height: 'fit-content' }}>
                    <Grid item xs alignItems='scretch' style={{ display: 'flex', flexDirection: 'column', verticalAlign: 'middle', justifyContent: 'center' }}>
                        <Typography  >
                            Candidate Apply Status:
                        </Typography>
                        {error && <Typography variant='body2' color="error">
                            Something Went Wrong When Changing Status
                        </Typography>}
                        {/* <Button startIcon={<Visibility />} color='primary' fullWidth variant='contained'>View Profile</Button>*/}
                    </Grid>
                    <Grid item xs>
                        {loading && <SectionLoading />}
                        {!loading && statuses && <TextField
                            select
                            variant="outlined"
                            value={candidateApplyStatus || status || 'unset'}
                            onChange={(e) => handleStatusChange(e.target.value)}
                            fullWidth
                            focused={false}
                            className={classNameGenerator(candidateApplyStatus || status || 'unset')}
                            margin='none'
                        >
                            <MenuItem value="unset" disabled >Set Apply Status</MenuItem>

                            {statuses.map((option) => (
                                <MenuItem disabled={option.value == 'unseen'} className='placeholder' style={{ color: 'inherit' }} key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>}
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    )
}
