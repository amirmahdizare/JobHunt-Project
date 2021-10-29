import { Box, Button, Divider, Typography } from '@material-ui/core'
import { CalendarToday } from '@material-ui/icons'
import React from 'react'
import { UserAvatar } from '../../../components/UserAvatar'
import ReplyIcon from '@material-ui/icons/Reply';
export const Comment = (props) => {
    const { avatarSrc, name, date, text, replyComment } = props
    return (
        <Box>
            <Box my={2} display="flex" paddingLeft={replyComment ? '17.5%' : 0}>
                <UserAvatar size="medium" src={avatarSrc} />
                <Box mx={4} display="flex" flexDirection="column" >
                    <Box display="flex" justifyContent="space-between" flexWrap="wrap">
                        <Typography display="block" gutterBottom>{name}</Typography>
                        <Typography variant="caption" color="primary" gutterBottom><CalendarToday fontSize="inherit" style={{ verticalAlign: 'middle' }} />&nbsp;{date}</Typography>
                    </Box>
                    <Typography variant="body2" color="textSecondary">{text}</Typography>
                    <Box>
                        <Button color="secondary" startIcon={<ReplyIcon />}> Reply</Button>
                    </Box>
                </Box>
            </Box>
            <Divider light variant={'fullWidth'} />
        </Box>
    )
}
