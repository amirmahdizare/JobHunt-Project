import { Box, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { InfoItem } from '../../../../Pages/EmployerSingle/components/CompanyInformation/components/InfoItem'
import { PostCard } from './components/PostCard'
export const RecentPosts = (props) => {
    const { posts } = props
    return (
        <Box >
            <Typography variant="h6">Recent Posts</Typography>
            <Box my={2}>
                {posts && posts.map((post) => (
                    <PostCard id={post.id} title={post.title} key={post.id} date={post.date} image={post.image} />
                ))}
            </Box>
        </Box>
    )
}
