import React from 'react'
import { Box, Button, makeStyles, Typography } from '@material-ui/core'
import {
    LineAwesome, SvgFile, SvgBriefcaseSolid,
    SvgMoneyBillSolid, SvgPaperPlane, SvgUser,
    SvgFlaskSolid, SvgUnlinkSolid, SvgLockSolid
} from 'react-line-awesome-svg'
const useClasses = makeStyles((theme) => ({
    root: {
        backgroundColor: 'unset',
        borderRadius: 'unset',
        boxSizing: 'border-box',
        color: theme.palette.grey[600],
        justifyContent: 'flex-start',
        textTransform: 'none',
        '& $startIcon': {
            fill: theme.palette.grey[600],
        },
        width: '100%',
        '&:hover': {
            color: theme.palette.primary.main,
            '& $startIcon': {
                fill: theme.palette.primary.main,
            },
        }
    },
    label: {
        padding: '3px',
    },
    startIcon: {}
}))
export const Jh_EmployerMenu = () => {
    const classes = useClasses()
    const buttonClasses = { root: classes.root, label: classes.label, startIcon: classes.startIcon }
    return (

        <Box my={1} >
            <Button classes={buttonClasses} size="large" color="primary" startIcon={<LineAwesome icon={SvgFile} />}><Typography>Company Name</Typography></Button>
            <Button classes={buttonClasses} size="large" startIcon={<LineAwesome icon={SvgBriefcaseSolid} />}><Typography>Manage Jobs</Typography></Button>
            <Button classes={buttonClasses} size="large" startIcon={<LineAwesome icon={SvgMoneyBillSolid} />}><Typography>Transactions</Typography></Button>
            <Button classes={buttonClasses} size="large" startIcon={<LineAwesome icon={SvgPaperPlane} />}><Typography>Resumes</Typography></Button>
            <Button classes={buttonClasses} size="large" startIcon={<LineAwesome icon={SvgUser} />}><Typography>Packages</Typography></Button>
            <Button classes={buttonClasses} size="large" startIcon={<LineAwesome icon={SvgFile} />}><Typography>Post a New Job</Typography></Button>
            <Button classes={buttonClasses} size="large" startIcon={<LineAwesome icon={SvgFlaskSolid} />}><Typography>Job Alerts</Typography></Button>
            <Button classes={buttonClasses} size="large" startIcon={<LineAwesome icon={SvgLockSolid} />}><Typography>Change Password</Typography></Button>
            <Button classes={buttonClasses} size="large" startIcon={<LineAwesome icon={SvgUnlinkSolid} />}><Typography>Logout</Typography></Button>
        </Box>

    )
}
