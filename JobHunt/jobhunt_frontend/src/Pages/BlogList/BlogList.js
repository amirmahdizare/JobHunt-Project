import { Box, CircularProgress, Divider, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { getBlogs } from '../../api/public'
import { BlogFrame } from '../../components/BlogFrame/BlogFrame'
import { Jh_Pagination } from '../../components/Jh_Pagination'
import { LargePostCard } from './components/LargePostCard'
import { useGetData } from '../../hooks/useGetData'


const BlogList = () => {
    const [page, setPage] = useState(1);
    //featch posts
    const [data, error, loading] = useGetData(getBlogs, { page, pagination_size: 5 })
    const { posts, pages } = data || []

    //recent post
    const recentPosts = posts ? posts.slice(0, 3) : []

    //for paging
    const handleChange = (event, value) => setPage(value)

    return (
        <BlogFrame posts={recentPosts}>
            {posts &&
                <>
                    {loading && <Box display={'flex'} alignItems={'center'} justifyContent={'center'}><CircularProgress /></Box>}
                    {!loading && posts.map((post, index) => (
                        <>
                            <LargePostCard
                                user_info={post.user_info}
                                key={post.id}
                                id={post.id}
                                date={post.date}
                                caption={post.caption}
                                image={post.image}
                                numberOfComments={post.numberOfComments}
                                title={post.title}
                            />
                            <Divider light />
                        </>
                    ))
                    }
                    {pages > 1 &&
                        <Jh_Pagination pages={pages} page={page} handleChange={handleChange} />
                    }
                </>
            }

            <Box width={1} display="flex" alignItems="center" justifyContent="center">
                {posts?.length == 0 && <Typography>No Found posts</Typography>}
                {!posts && loading && <CircularProgress />}
                {error && <Typography>Error: Request failed with status code 500</Typography>}
            </Box>
        </BlogFrame>
    )

}
export default BlogList
