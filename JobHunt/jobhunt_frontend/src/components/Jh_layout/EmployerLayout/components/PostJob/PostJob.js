import { Box, Button ,makeStyles, Typography} from '@material-ui/core'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import React from 'react'
const useStyles = makeStyles(() => ({
    button: {
        color: 'inherit',
        textTransform: 'none',
        margin: '0 5px'
    },
    postJobButton: {
        borderRadius: '40px',
        border: '2px solid #fb236a',
        textTransform: 'none',
        boxSizing: 'border-box',
        transition: 'all 0.4s ease 0s',
        '&:hover': {
            backgroundColor: '#fb236a',
            color: 'white',
            boxShadow: 'none',
            transform: 'none',
            border: '2px solid #fb236a',
        },
    }
}));
export const PostJob = () => {
    const classes=useStyles()
    return (
        <Box>
        <Button
            href="/dashboard/postjob"
            className={classes.postJobButton}
            variant="contained"
            color="secondary"
            startIcon={<AddOutlinedIcon />}
            >
            <Typography variant="body1"> Post Job</Typography>

        </Button></Box>
    )
}
