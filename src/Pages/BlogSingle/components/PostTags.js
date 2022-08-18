import { Box, Chip, Link, Typography } from '@material-ui/core'
import React from 'react'

export const PostTags = (props) => {
    const {tags} = props
    return (
        <>
            {tags ?
                <Box>
                    <Typography display="inline">Tags&nbsp;&nbsp;&nbsp;</Typography>
                    {tags.map((tag) => (
                        <Chip component={Link} style={{ margin: '4px' }} underline="none" href={`/blog/${tag}`} clickable label={tag} variant="outlined" />
                    ))}
                </Box> : null}
        </>
    )
}
