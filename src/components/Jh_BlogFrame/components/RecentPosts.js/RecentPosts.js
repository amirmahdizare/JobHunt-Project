import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'
import React from 'react'
import { InfoItem } from '../../../../Pages/EmployerSingle/components/CompanyInformation/components/InfoItem'
import { PostCard } from './components/PostCard'
export const RecentPosts = (props) => {
    const posts = [
        {
            title: 'Canada adds 12,500 jobs in modest July rebound',
            date: 'October 25, 2017',
            image: 'https://creativelayers.net/themes/jobhunt-html/images/resource/mb1.jpg'
        },
        {
            title: 'How to “Woo” a Recruiter and Land Your Dream Job',
            date: 'October 25, 2017',
            image: 'https://creativelayers.net/themes/jobhunt-html/images/resource/mb2.jpg'
        },
        {
            title: 'Hey Job Seeker, It’s Time To Get Up And Get Hired',
            date: 'October 25, 2017',
            image: 'https://creativelayers.net/themes/jobhunt-html/images/resource/mb3.jpg'
        }
    ]
    return (
        <Box >
            <Typography variant="h6">Recent Posts</Typography>
            <Box my={2}>
            {posts.map((post)=>(
                <PostCard title={post.title} date={post.date} image={post.image}/>
            ))}
          </Box>
        </Box>
    )
}
