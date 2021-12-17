import React, { useEffect, useState } from 'react'
import { Box, CardMedia, Chip, CircularProgress, Divider, makeStyles, Typography } from '@material-ui/core'
import { SharePost } from './components/SharePost'
import { PostNavigation } from './components/PostNavigation'
import { CommentsBox } from './components/CommentsBox'
import { LeaveAReply } from './components/LeaveAReply'
import { PostTags } from './components/PostTags'
import { PostDetail } from './components/PostDetail'
import { PostDescription } from './components/PostDescription'
import { getBlogSingle } from '../../api/public'
import { useParams } from "react-router-dom";
import { useGetData } from '../../hooks/useGetData'
import { useLogin } from '../../hooks'
import { Jh_BlogSingleFrame } from '../../components/BlogFrame/Jh_BlogSingleFrame'
import { useLanguage } from '../../LanguageProvider/Dev/useLanguage'
const useStyles = makeStyles(theme => ({
    postImage: {
        borderRadius: theme.spacing(1),
        maxHeight: '375px',
        marginTop: theme.spacing(2)
    }
}))
const BlogSingle = () => {

    const classes = useStyles()

    //blog id
    const { id } = useParams();

    //for check login
    const isLogin = useLogin()

    //featch blog description
    const [data, error, loading] = useGetData(getBlogSingle, { id })

    //for reply comment
    const [replyComment, setReplyComment] = useState(null)
    const handelReplyComment = (value) => setReplyComment(value)

    return (

        <Jh_BlogSingleFrame>
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
                    <PostNavigation id={data.id} />
                    <br />
                    <Divider light />
                    <CommentsBox id={id} handelReplyComment={handelReplyComment} />

                    {isLogin && <LeaveAReply id={id} replyComment={replyComment} handelReplyComment={handelReplyComment} />}

                </>
            }
            <Box width={1} display="flex" alignItems="center" justifyContent="center">
                {data?.length == 0 && <Typography>No Found posts</Typography>}
                {!data && loading && <CircularProgress />}
                {error && <Typography>There is no blog with this information</Typography>}
            </Box>
        </Jh_BlogSingleFrame>
    )
}
export default BlogSingle
