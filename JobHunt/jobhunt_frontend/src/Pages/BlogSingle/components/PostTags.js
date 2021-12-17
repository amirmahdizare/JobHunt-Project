import { Box, Chip, Link, Typography } from '@material-ui/core'
import React from 'react'

export const PostTags = (props) => {
    const {tags} = props 
    // href={`/blog/${tag}`}
    return (
        <>
            {tags ?
                <Box>
                    <Typography display="inline">Tags&nbsp;&nbsp;&nbsp;</Typography>
                    {tags.map((tag) => (
                        <Chip component={Link}  style={{ margin: '4px' }} underline="none"  clickable label={tag} variant="outlined" />
                    ))}
                </Box> : null}
        </>
    )
}
