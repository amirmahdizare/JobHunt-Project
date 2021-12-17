import { Box, Button, Grid, Link, Typography } from '@material-ui/core'
import { CalendarTodayOutlined, ForumOutlined } from '@material-ui/icons'
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

import React from 'react'
import { UserAvatar } from '../../../components/UserAvatar'

export const PostDetail = (props) => {
    const {data } = props
    console.log(data)
    return (
        <Grid container alignItems="center" style={{ margin: '8px' }} spacing={1}>
            <Grid item xs={12} md={4} alignItems="center">
                <Box display="flex" alignItems="center">
                    <Link display="inline" href={`/${data.authorName}`}><UserAvatar src={data?.authorAvatar} size="medium" /></Link>
                    <Typography display="inline" color="textSecondary">&nbsp;&nbsp;&nbsp;{data?.user_info?.first_name + ' ' + data?.user_info?.last_name}</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={3}>
                <Button href="/blog/date" startIcon={<CalendarTodayOutlined color="action" />}><Typography color="textSecondary" variant="body2" >{data.date}</Typography></Button>
            </Grid>
            <Grid item xs={12} md={2}>
                <Button href="/blog/id/#comments" startIcon={<ForumOutlined color="primary" />}><Typography color="primary" variant="body2">{data.numberOfComments}&nbsp;Comment{data.numberOfComments != 1 ? 's' : null}</Typography></Button>
            </Grid>
            <Grid item xs={12} md={2}>

                {data.tags ? <><Button startIcon={<DescriptionOutlinedIcon />}>{data.tags.join(',')}</Button></> : null}
            </Grid>
        </Grid>
    )
}
