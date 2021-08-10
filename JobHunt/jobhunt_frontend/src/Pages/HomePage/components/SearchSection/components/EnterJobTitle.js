import React from 'react'
import BrowseJob from './BrowseJob';
import { Grid, InputBase, makeStyles, Paper} from '@material-ui/core'
import KeyboardOutlinedIcon from '@material-ui/icons/KeyboardOutlined';
const useClasses = makeStyles((theme) => ({
    root: {
        position:'relative'
    },
    container: {
        display: 'flex',
        padding: theme.spacing(2),
        borderRadius: theme.spacing(1),
        alignItems:'center'
    },
    input: {
        flex: 1,
        fontSize: '15px',
        // marginLeft: theme.spacing(1),
        // padding: theme.spacing(2)
        padding:'0px'

    }}))
const EnterJobTitle = () => {
    const classes = useClasses()

    return (
        <Grid item xs={12} sm={6} md={6} className={classes.root} >
                <Paper component="div" className={classes.container}>
                    <KeyboardOutlinedIcon fontSize="large" color="secondary"/>
                    <InputBase
                        className={classes.input}
                        placeholder="Job title,keywords or company name"
                        inputProps={{ 'aria-label': 'Search Job keywords or name' }}
                        dir="ltr"
                        
                    />

                </Paper>
                <BrowseJob/>
            </Grid>
    )
}
export default EnterJobTitle