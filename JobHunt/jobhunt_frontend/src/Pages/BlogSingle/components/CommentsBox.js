import { Box, CircularProgress, Divider, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { getBlogSingleComment } from '../../../api/public'
import { Jh_Pagination } from '../../../components/Jh_Pagination'
import { useGetData } from '../../../hooks/useGetData'
import { Comment } from './Comment'

export const CommentsBox = (props) => {
    const { id, handelReplyComment } = props

    //featch comments
    const [page, setPage] = useState(1);
    const [data, error, loading] = useGetData(getBlogSingleComment, id, page)
    const { comments, pages } = data || []

    //for paging
    const handleChange = (event, value) => setPage(value)



    return (
        <Box >
            <br />
            {/* 4 -> numberOfComments */}
            {comments &&
                <>
                    <Typography variant="h6">{comments.length} Comments</Typography>
                    <Box my={2} display="flex" flexDirection="column"  >
                        {comments.map((comment) =>
                            <Comment

                                key={comment.id}
                                name={comment.user_info.first_name + " " + comment.user_info.last_name}
                                avatarSrc={comment.image}
                                date={comment.date}
                                text={comment.comment}
                                id={comment.id}
                                handelReplyComment={handelReplyComment}
                            />
                        )}
                    </Box>
                    {pages > 1 &&
                        <Jh_Pagination pages={pages} page={page} handleChange={handleChange} />
                    }
                </>
            }

            <Box width={1} display="flex" alignItems="center" justifyContent="center">
                {comments?.length == 0 && <Typography>No Found posts</Typography>}
                {!comments && loading && <CircularProgress />}
            </Box>

        </Box>
    )
}
