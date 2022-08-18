import { Grid, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
const useClasses = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
        flexDirection:'column',
        [theme.breakpoints.down('sm')]:{'& .MuiGrid-item':{padding:'5px'}},
           
    },
    title:{
        [theme.breakpoints.down('md')]:{fontSize:'30px'},
        [theme.breakpoints.down('sm')]:{fontSize:'22px'},
    },
    description:{
        [theme.breakpoints.down('md')]:{fontSize:'22px'},
        [theme.breakpoints.down('sm')]:{fontSize:'15px'},
    }
}))
const TextContainer = (props) => {
    const classes= useClasses()
    return (
        <Grid container spacing={3} className={classes.root}  >
            <Grid item xs={12}>
                <Typography variant="h3" className={classes.title}>The Easiest Way to Get Your New Job</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6" className={classes.description}>Find Jobs, Employment & Career Opportunities</Typography>
            </Grid>
        </Grid>
    )
}
export default TextContainer 