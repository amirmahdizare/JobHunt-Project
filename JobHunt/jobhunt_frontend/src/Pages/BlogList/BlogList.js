import { Box, CircularProgress, Divider, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { getBlogs } from '../../api/public'
import { Jh_BlogFrame } from '../../components/Jh_BlogFrame/Jh_BlogFrame'
import { Jh_Pagination } from '../../components/Jh_Pagination'
import { LargePostCard } from './components/LargePostCard'
import { useRequest } from '../../hooks/useRequest'


const BlogList = () => {
    const [data, loading, error] = useRequest(getBlogs)
    return (
        <Jh_BlogFrame>
            {data &&
                data.map((post, index) => (
                    <>
                        <LargePostCard
                            date={post.date}
                            description={post.description}
                            image={post.image}
                            numberOfComments={post.numberOfComments}
                            title={post.title}
                        />
                        <Divider light />
                    </>
                ))}
            <Box width={1} display="flex" alignItems="center" justifyContent="center">
                {data?.length == 0 && <Typography>No Found posts</Typography>}
                {!data && loading && <CircularProgress />}
            </Box>
            <Jh_Pagination pages={10} />
        </Jh_BlogFrame>
    )
}
export default BlogList