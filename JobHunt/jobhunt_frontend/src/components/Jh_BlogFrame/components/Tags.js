import React from 'react'
import { Box, Chip, Link, Typography, makeStyles } from '@material-ui/core'
const useStyles = makeStyles(theme => ({
    root: {
        cursor: 'pointer',
        margin: theme.spacing(0.5),
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.10)'
        }
    }
}))
export const Tags = (props) => {
    const classes = useStyles()
    const { tags } = props
    return (
        <Box my={2}>
            <Typography variant="h6">Tags</Typography>
            <Box my={1}>
                {tags.map((tag) => (
                    <Chip
                        classes={{ root: classes.root }}
                        component={Link}
                        href={`/blog/${tag}`}
                        label={tag}
                        size="medium"
                        underline="none"
                        variant="outlined"
                    />
                ))}

            </Box>
        </Box>
    )
}
