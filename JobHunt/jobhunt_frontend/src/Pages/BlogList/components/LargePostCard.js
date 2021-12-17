import React from 'react'
import { Box, Button, Card, CardContent, CardMedia, Link, makeStyles, Typography } from '@material-ui/core'
import { ArrowRightAlt, CalendarTodayOutlined, ForumOutlined } from '@material-ui/icons'
import { IsNotAvailableContent } from '../../../components/IsNotAvailableContent'
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        borderRadius: '0',
        marginTop: theme.spacing(0.5),
        marginBottom: theme.spacing(0.5),
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        },

        '& .MuiButton-root': {
            textTransform: 'none'
        }
    },
    media: {
        display: 'block',
        borderRadius: theme.spacing(1),
        margin: theme.spacing(2),
        transition: 'all 0.4s ease',
        [theme.breakpoints.up('md')]: {
            width: '322px',
            height: '280px'
        },
        '&:hover': {
            filter: 'brightness(80%)'
        }
    },
    title: {
        transition: 'all 0.4s ease',
        '&:hover': {
            color: theme.palette.secondary.main,
        },
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
}))
export const LargePostCard = (props) => {
    const { date, caption, image, numberOfComments, title, id } = props
    const classes = useStyles()
    return (
        <Card elevation={0} className={classes.root}  >
            <Link href={`/Blog/${id}`}>
                <CardMedia
                    className={classes.media}
                    component="img"
                    image={image}


                /></Link>
            <CardContent className={classes.content} >
                <Box>
                    <Button href={`/Blog/${id}`} startIcon={<CalendarTodayOutlined color="action" />}><Typography color="textSecondary" variant="body2" >{date}</Typography></Button>
                    <Button href={`/Blog/${id}`} startIcon={<ForumOutlined color="primary" />}><Typography color="primary" variant="body2">{numberOfComments}&nbsp;Comment{numberOfComments != 1 ? 's' : null}</Typography></Button>
                </Box>
                <Box>
                    <Typography display="block" component={Link} href={`blog/${id}`} underline="none" className={classes.title } variant="h6" style={{ whiteSpace: 'pre-wrap' }} color="inherit" gutterBottom>{title || <IsNotAvailableContent>Blog title</IsNotAvailableContent>}</Typography>
                    <Typography variant="body2" color="textSecondary">{ caption?.substr(0,250)?.concat('...')  || <IsNotAvailableContent>Blog Caption</IsNotAvailableContent> }</Typography>
                </Box>
                <Box>
                    <Button size="large" color="secondary" endIcon={<ArrowRightAlt fontSize="large" />} href={`/Blog/${id}`}>Read more</Button>
                </Box>
            </CardContent>


        </Card>
    )
}
