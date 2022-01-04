import React from 'react'
import { Box, Button, makeStyles, Typography } from '@material-ui/core'
import {
    LineAwesome, SvgFile, SvgBriefcaseSolid,
    SvgMoneyBillSolid, SvgPaperPlane, SvgUser,
    SvgFlaskSolid, SvgUnlinkSolid, SvgLockSolid
} from 'react-line-awesome-svg'
import { useLocation } from 'react-router'
import { useAuth } from '../api/authentication'
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
    startIcon: {},
    active:{
        backgroundColor: theme.palette.action.focus,
        borderRadius: 'unset',
        boxSizing: 'border-box',
        color: theme.palette.text.primary,
        borderLeftColor:theme.palette.primary.main,
        borderLeftWidth:'3.5px',
        borderStyle:'solid',
        justifyContent: 'flex-start',
        textTransform: 'none',
        width:'100%',
        '&:hover': {
            backgroundColor:theme.palette.grey[300],
            color: theme.palette.primary.main,
            '& $startIcon': {
                fill: theme.palette.primary.main,
            },
        }
    }
}))
export const EmployerMenu = () => {
    const classes = useClasses()
    const location=window.location.pathname
    const buttonClasses = { root: classes.root, label: classes.label, startIcon: classes.startIcon }
    const activePageButton = {root: classes.active, label: classes.label, startIcon: classes.startIcon }
    const auth=useAuth()
    return (
        <Box  >
            <Button href="/dashboard/companyprofile" classes={location=="/dashboard/companyprofile" ? activePageButton  : buttonClasses} size="large"   color="primary" startIcon={<LineAwesome icon={SvgFile} />}><Typography>Company Profile</Typography></Button>
            <Button href="/dashboard/managejobs" classes={location=="/dashboard/managejobs" ? activePageButton  : buttonClasses} size="large"  startIcon={<LineAwesome icon={SvgBriefcaseSolid} />}><Typography>Manage Jobs</Typography></Button>
            <Button href="/dashboard/transactions" classes={location=="/dashboard/transactions" ? activePageButton  : buttonClasses} size="large"  startIcon={<LineAwesome icon={SvgMoneyBillSolid} />}><Typography>Transactions</Typography></Button>
            <Button href="/dashboard/resumes" classes={location=="/dashboard/resumes" ? activePageButton  : buttonClasses} size="large"  startIcon={<LineAwesome icon={SvgPaperPlane} />}><Typography>Resumes</Typography></Button>
            <Button href="/dashboard/packages" classes={location=="/dashboard/packages" ? activePageButton  : buttonClasses} size="large"  startIcon={<LineAwesome icon={SvgUser} />}><Typography>Packages</Typography></Button>
            <Button href="/dashboard/postjob" classes={location=="/dashboard/postjob" ? activePageButton  : buttonClasses} size="large"  startIcon={<LineAwesome icon={SvgFile} />}><Typography>Post a New Job</Typography></Button>
            {/* <Button href="/dashboard/jobalert" classes={location=="/dashboard/jobalert" ? activePageButton  : buttonClasses} size="large"  startIcon={<LineAwesome icon={SvgFlaskSolid} />}><Typography>Job Alerts</Typography></Button> */}
            <Button href="/dashboard/changepassword" classes={location=="/dashboard/changepassword" ? activePageButton  : buttonClasses} size="large"  startIcon={<LineAwesome icon={SvgLockSolid} />}><Typography>Change Password</Typography></Button>
            <Button href="/home" onClick={()=>auth.signout()} classes={ buttonClasses} size="large"  startIcon={<LineAwesome icon={SvgUnlinkSolid} />}><Typography>Logout</Typography></Button>
        </Box>

    )
}
