import React from 'react'
import {
    Box, Button, Typography,
    makeStyles
} from '@material-ui/core'
const useClasses = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row-reverse',
        left: '0px',
        position: 'absolute',
        top: '100%',
    }
    ,
    button: {
        borderColor: theme.palette.primary.contrastText,
        borderRadius: theme.spacing(1),
        color: theme.palette.primary.contrastText,
        margin: theme.spacing(1),
        textTransform: 'none',
        '&:hover': {
            backgroundColor: theme.palette.primary.contrastText,
            color: theme.palette.success.contrastText
        }
    }
}))
const BrowseJob = () => {
    const classes = useClasses()
    return (
        <Box mx={2} className={classes.root} >
            <Typography>Browse job offers by</Typography>
            <Button className={classes.button} color="default" variant="outlined">Category</Button>
        </Box>
    )
}
export default BrowseJob