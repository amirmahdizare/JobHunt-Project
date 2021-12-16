import { Box, Button, Divider, Typography } from '@material-ui/core'
import { CalendarToday } from '@material-ui/icons'
import React from 'react'
import { UserAvatar } from '../../../components/UserAvatar'
import ReplyIcon from '@material-ui/icons/Reply';
import { Link } from 'react-scroll'
import { useLogin } from '../../../hooks/useLogin';

export const Comment = (props) => {
    const { avatarSrc, name, date, text, replyComment, id, handelReplyComment } = props
    const isLogin = useLogin()
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
                        <Link to="leaveAReply" spy={true} smooth={true}>
                            <Button disabled={!isLogin} onClick={() => handelReplyComment({ id, name, avatarSrc })} color="secondary" startIcon={<ReplyIcon />}> Reply</Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
            <Divider light variant={'fullWidth'} />
        </Box >
    )
}
