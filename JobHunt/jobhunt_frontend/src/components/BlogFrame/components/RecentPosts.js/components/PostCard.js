import { Box, Card, CardActionArea, CardContent, CardMedia, Link, makeStyles, MenuItem, Typography } from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles(theme => ({
    media: {
        borderRadius: theme.spacing(1),
        marginRight: theme.spacing(1),
        height: '64px',
        width: '74px',

    },
    cardRoot: {
        boxShadow: 'unset',
        background: 'transparent',
        overflow: 'unset',
    },
    menuItem: {
        display: 'flex',
        '&:hover': {
            color: theme.palette.secondary.main
        }
    }
}))
export const PostCard = (props) => {
    const { title, date, image, id } = props
    const classes = useStyles()
    return (
        <MenuItem className={classes.menuItem} component={Link} color="textPrimary" href={`/Blog/${id}`} >
            <Card classes={{ root: classes.cardRoot }}>
                <CardMedia classes={{ media: classes.media }} image={image} component="img" />
            </Card>
            <Box>
                <Typography color="inherit" style={{ whiteSpace: 'pre-wrap' }} variant="body2">{title}</Typography>
                <Typography color="textSecondary" variant="subtitle2">{date}</Typography>
            </Box>

        </MenuItem>
    )
}
