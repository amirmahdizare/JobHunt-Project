import { Box, Paper, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
const useClasses = makeStyles(theme => ({
    content: {
        borderRadius: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '200px',
        position: 'relative',
        margin:theme.spacing(2),
        marginTop: '50px',
        padding: theme.spacing(3),
        textAlign: 'left',
        '&:before': {
            content: "'“'",
            color: 'rgb(139, 145, 221)',
            fontSize: '150px',
            fontWeight: 'bolder',
            lineHeight: '30px',
            right: '20px',
            top: '5px',
            transform: 'rotate(-180deg)',
            position: 'absolute',
        }
    },
    profile: {
        borderRadius: '50%',
        left: '20px',
        position: 'absolute',
        maxHeight: '100px',
        maxWidth:'100px',
        top: '-50px',
        width:'30%',
        width: '30%',
    },
    text:{
        marginTop:theme.spacing(0.5),
        marginBottom:theme.spacing(0.5)
    }
}))
const CandidateComment = (props) => {
    const classes = useClasses()
    return (
        <Paper key={props.key} className={classes.content}>
            <img src={props.candidateAvatar} className={classes.profile} />
            <Box mb={2}  display="flex" justifyContent="space-between" alignItems="center">
            </Box>
                <Typography className={classes.text} variant="h5" >{props.candidateName}</Typography>
                <Typography className={classes.text} style={{color:'#888888'}} variant="body1">{props.candidateJobTitle}</Typography>
            <Typography className={classes.text} variant="body2">{props.candidateComment}</Typography>
        </Paper>
    )
}
export default CandidateComment