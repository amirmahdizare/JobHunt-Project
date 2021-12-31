import { Box, CircularProgress, Typography, makeStyles, Grid } from '@material-ui/core'
import React from 'react'
const useClasses = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2),
    },
    container: {
        background: 'white',
        borderRadius: '50%',
        boxShadow: '0px 0px 30px rgba(0,0,0,0.1)',
        display: 'inline-flex',
        margin: theme.spacing(2),
        position: 'relative',
        padding: theme.spacing(2),
    },
    progressValue: {
        alignItems: "center",
        bottom: '0',
        display: "flex",
        justifyContent: "center",
        left: '0',
        right: '0',
        position: "absolute",
        top: '0',
    }
}))
export const SkillsPercentage = () => {
    const classes = useClasses()
    return (
        <Box className={classes.root}>
            <Grid container spacing={4} justifyContent="center" alignItems="center">
                <Grid item xs={4} md={6} lg={12}>
                    <Typography variant="h5" gutterBottom>Skills Percentage</Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>Put value for "Cover Image" field to increase your skill up to "15%"</Typography>
                </Grid>
                <Grid item xs={8} md={6} lg={12}>
                    <Box justifyContent="center" display="flex">
                        <Box className={classes.container}>
                            <CircularProgress color="secondary" thickness="12" size="10em" variant="determinate" value={85} />
                            <Box className={classes.progressValue}>
                                <Typography variant="h5" component="div" color="textPrimary">{`${85}%`}</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
