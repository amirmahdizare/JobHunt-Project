import { Box, Grid, Link, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useGetData } from '../../../hooks/useGetData';
import { getBlogs } from '../../../api/public';
import { SectionLoading } from '../../../components/SectionLoading';
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
export const PostNavigation = ({ id }) => {
    const classes = useStyles()
    const [data, error, loading] = useGetData(getBlogs, { pagination_size: 100000, page: 1 })

    const indexcurrentPost = data?.posts
        ? data?.posts
            .map((element, index) => element.id == id ? index : null)
            .filter((item) => item != undefined)?.[0]
        : null

    const nextPost = data ? data?.posts.filter((item, index) => index == indexcurrentPost + 1)[0] : null
    const prevPost = data ? data?.posts.filter((item, index) => index == indexcurrentPost - 1)[0] : null


    return (
        <Box display="flex" justifyContent="space-between">
            <Grid container spacing={2}>
                {loading && <SectionLoading/>}
                <Grid item xs={12} sm={6}>
                    {!loading && prevPost && <Box display="flex" component={Link} underline="none" href={"/blog/" + prevPost.id} alignItems="center">
                        <ArrowBackIcon className={classes.icon} color="secondary" />
                        <Box>
                            <Typography color="textPrimary" display="block">Previous Post</Typography>
                            <Typography display="block" color="textSecondary">{prevPost.title}</Typography>
                        </Box>
                    </Box>}
                </Grid>
                <Grid item xs={12} sm={6}>
                    {!loading && nextPost && <Box display="flex" justifyContent="flex-end" underline="none" component={Link} href={"/blog/" + nextPost.id} alignItems="center">
                        <Box>
                            <Typography color="textPrimary" align="right">Next Post</Typography>
                            <Typography color="textSecondary">{nextPost.title}</Typography>
                        </Box>
                        <ArrowForwardIcon className={classes.icon} color="secondary" />
                    </Box>}
                </Grid>
            </Grid>
        </Box>
    )
}
