import { Box, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
const useStyles = makeStyles(theme => ({
    postImage: {
        borderRadius: theme.spacing(1),
        maxHeight: '375px',
        marginTop: theme.spacing(2)
    },
    KeySentenceBox: {
        backgroundColor: '#f5f7fa',
        color: theme.palette.text.secondary,
        padding: theme.spacing(5),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),

    },
    icon: {
        border: '1px solid',
        borderRadius: '50%',
        borderColor: theme.palette.text.secondary,
        color: theme.palette.text.primary,
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        padding: theme.spacing(1),

    }
}))
export const PostDescription = (props) => {
    const {data} = props
    const classes=useStyles()
    return (
        <>
            <Typography variant="h6" gutterBottom>{data.title}</Typography>
            <Typography color="textSecondary" variant="body2" gutterBottom>{data.description}</Typography>
            <Typography variant="body2">About Business Network</Typography>
            <Typography variant="body2" color="textSecondary">{data.aboutBusiness1}</Typography>
            {data.keySentence
                ? <Box className={classes.KeySentenceBox}>
                    <FormatQuoteIcon />
                    <Typography display="inline" >&nbsp;{data.keySentence}&nbsp;</Typography>
                    <FormatQuoteIcon />
                    <Typography color="textPrimary"><br />{data.authorName}</Typography>
                </Box>
                : null}
            <Typography variant="body2" color="textSecondary" gutterBottom>{data.aboutBusiness2}</Typography>
        </>
    )
}
