import React from 'react'
import { Jh_BlogFrame } from '../../components/Jh_BlogFrame/Jh_BlogFrame'
import { Box, CardMedia, CircularProgress, Divider, makeStyles, Typography } from '@material-ui/core'
import { SharePost } from './components/SharePost'
import { PostNavigation } from './components/PostNavigation'
import { CommentsBox } from './components/CommentsBox'
import { LeaveAReply } from './components/LeaveAReply'
import { PostTags } from './components/PostTags'
import { PostDetail } from './components/PostDetail'
import { PostDescription } from './components/PostDescription'
import { getBlogSingle } from '../../api/public'
import { useParams } from "react-router-dom";
import { useRequest } from '../../hooks/useRequest'

const useStyles = makeStyles(theme => ({
    postImage: {
        borderRadius: theme.spacing(1),
        maxHeight: '375px',
        marginTop: theme.spacing(2)
    }
}))
const BlogSingle = () => {
    const classes = useStyles()
    let { id } = useParams();
    const _getBlogSingle = () => getBlogSingle(id)
    const [data, error, loading] = useRequest(_getBlogSingle)

    return (

        <Jh_BlogFrame>
            {data &&
                <>
                    <CardMedia
                        className={classes.postImage}
                        component="img"
                        image={data.image} />
                    <PostDetail data={data} />
                    <Divider light />
                    <br />
                    <PostDescription data={data} />
                    <Divider light />
                    <br />
                    <Box display="flex" alignItems="center" justifyContent="space-between" flexWrap="wrap">
                        <PostTags tags={data.tags} />
                        <SharePost />
                    </Box>
                    <br />
                    <Divider light />
                    <br />
                    <PostNavigation />
                    <br />
                    <Divider light />
                    <CommentsBox />
                    <LeaveAReply />
                </>
            }
            <Box width={1} display="flex" alignItems="center" justifyContent="center">
                {data?.length == 0 && <Typography>No Found posts</Typography>}
                {!data && loading && <CircularProgress />}
            </Box>
        </Jh_BlogFrame>
    )
}
export default BlogSingle