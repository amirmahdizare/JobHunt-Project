import { Box, Grid, Link, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
const useStyles = makeStyles(theme => ({
    icon: {
        color: theme.palette.text.primary,
        border: '1px solid',
        padding: theme.spacing(1),
        borderColor: theme.palette.text.secondary,
        borderRadius: '50%',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),

    }
}))
export const PostNavigation = () => {
    const classes = useStyles()
    return (
        <Box display="flex" justifyContent="space-between">
            <Grid container spacing={2}>
                <Grid item xs={12}  sm={6}>
                    <Box display="flex"  component={Link} underline="none" href="/blog/previous" alignItems="center">
                        <ArrowBackIcon className={classes.icon} color="secondary" />
                        <Box>
                            <Typography color="textPrimary" display="block">Previous Post</Typography>
                            <Typography display="block" color="textSecondary">Hey Job Seeker, It’s Time</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box display="flex" justifyContent="flex-end"  underline="none" component={Link} href="/blog/next" alignItems="center">
                        <Box>
                            <Typography color="textPrimary" align="right">Next Post</Typography>
                            <Typography color="textSecondary">11 Tips to Help You Get New</Typography>
                        </Box>
                        <ArrowForwardIcon className={classes.icon} color="secondary" />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
