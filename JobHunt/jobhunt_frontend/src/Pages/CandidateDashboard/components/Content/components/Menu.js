import React from 'react'
import { Box, Button, makeStyles, Typography } from '@material-ui/core'
import { LineAwesome, SvgFile, SvgBriefcaseSolid, SvgMoneyBillSolid, SvgPaperPlane, SvgUser, SvgFlaskSolid, SvgUnlinkSolid } from 'react-line-awesome-svg'
const useClasses = makeStyles((theme) => ({
    root: {
        marginTop:theme.spacing(2),
        marginBottom:theme.spacing(2),

        '& .MuiButton-root': {
            borderRadius: 'unset',
            backgroundColor: 'unset',
            color: theme.palette.grey[600],
            justifyContent: 'flex-start',
            textTransform: 'none',
            width: '100%',
            '& .MuiButton-startIcon': {
                fill: theme.palette.grey[600],
            },
            '&:hover': {
                color: theme.palette.primary.main,
                '& .MuiButton-startIcon': {
                    fill: theme.palette.primary.main,

                }
            }
        }
    }
}))
export const Menu = () => {
    const classes = useClasses()
    return (
        <Box className={classes.root}  >
            <Button size="large" startIcon={<LineAwesome icon={SvgFile} />}><Typography>My Profile</Typography></Button>
            <Button size="large" startIcon={<LineAwesome icon={SvgBriefcaseSolid} />}><Typography>My Resume</Typography></Button>
            <Button size="large" startIcon={<LineAwesome icon={SvgMoneyBillSolid} />}><Typography>Shortlisted Job</Typography></Button>
            <Button size="large" startIcon={<LineAwesome icon={SvgPaperPlane} />}><Typography>Applied Job</Typography></Button>
            <Button size="large" startIcon={<LineAwesome icon={SvgUser} />}><Typography>Job Alert</Typography></Button>
            <Button size="large" startIcon={<LineAwesome icon={SvgFile} />}><Typography>Cv & Cover Letter</Typography></Button>
            <Button size="large" startIcon={<LineAwesome icon={SvgFlaskSolid} />}><Typography>Change Password</Typography></Button>
            <Button size="large" startIcon={<LineAwesome icon={SvgUnlinkSolid} />}><Typography>Logout</Typography></Button>

        </Box>
    )
}
