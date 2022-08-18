import { Box, Divider, Typography } from '@material-ui/core'
import React from 'react'
import { Comment } from './Comment'

export const CommentsBox = () => {
    return (
        <Box >
            <br />
            {/* 4 -> numberOfComments */}
            <Typography variant="h6">4 Comments</Typography>
            <Box my={2} display="flex" flexDirection="column"  >
                <Comment
                    name="Ali TUFAN"
                    avatarSrc="https://creativelayers.net/themes/jobhunt-html/images/resource/err1.jpg"
                    date="Jan 16, 2016 07:48 am"
                    text="Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement tantaneously eel valiantly petted this along across highhandedly much."
                />
                <Comment
                    name="Rachel LOIS"
                    avatarSrc="https://creativelayers.net/themes/jobhunt-html/images/resource/err2.jpg"
                    date="Jan 16, 2016 07:48 am"
                    text="Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement tantaneously eel valiantly petted this along across highhandedly much."
                    replyComment
                />

                <Comment
                    name="Kate ROSELINE"
                    avatarSrc="https://creativelayers.net/themes/jobhunt-html/images/resource/err3.jpg"
                    date="Jan 16, 2016 07:48 am"
                    text="Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement tantaneously eel valiantly petted this along across highhandedly much."
                />

                <Comment
                    name="Luis DANIEL"
                    avatarSrc="https://creativelayers.net/themes/jobhunt-html/images/resource/err4.jpg"
                    date="Jan 16, 2016 07:48 am"
                    text="Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement tantaneously eel valiantly petted this along across highhandedly much."
                />
            </Box>
        </Box>
    )
}
