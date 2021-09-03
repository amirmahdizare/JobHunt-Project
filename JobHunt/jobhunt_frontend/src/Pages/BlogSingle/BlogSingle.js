import React from 'react'
import { Jh_BlogFrame } from '../../components/Jh_BlogFrame/Jh_BlogFrame'
import { Box, CardMedia, Divider, makeStyles } from '@material-ui/core'
import { SharePost } from './components/SharePost'
import { PostNavigation } from './components/PostNavigation'
import { CommentsBox } from './components/CommentsBox'
import { LeaveAReply } from './components/LeaveAReply'
import { PostTags } from './components/PostTags'
import { PostDetail } from './components/PostDetail'
import { PostDescription } from './components/PostDescription'
const data = {
    image: 'https://creativelayers.net/themes/jobhunt-html/images/resource/bs1.jpg',
    authorName: 'Ali Tofan',
    authorAvatar: 'https://creativelayers.net/themes/jobhunt-html/images/resource/admin.jpg',
    date: 'November 23, 2017',
    numberOfComments: 4,
    tags: ['Travel', 'Skill', 'Jobs'],
    title: '11 Tips to Help You Get New Clients Through Cold Calling',
    description: 'Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a glowered inset one echidna cassowary some parrot and much as goodness some froze the sullen much connected bat wonderfully on instantaneously eel valiantly petted this along across highhandedly much.Repeatedly dreamed alas opossum but dramatically despite expeditiously that jeepers loosely yikes that as or eel underneath kept and slept compactly far purred sure abidingly up above fitting to strident wiped set waywardly far the and pangolin horse approving paid chuckled cassowary oh above a much opposite far much hypnotically more therefore wasp less that hey apart well like while superbly orca and far hence one.Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy.',
    aboutBusiness1: 'Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a glowered inset one echidna cassowary some parrot and much as goodness some froze the sullen much connected bat wonderfully on instantaneously eel valiantly petted this along across highhandedly much.',
    aboutBusiness2: 'Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a glowered inset one echidna cassowary some parrot and much as goodness some froze the sullen much connected bat wonderfully on instantaneously eel valiantly petted this along across highhandedly much',
    keySentence: 'You might remember the Dell computer commercials in which a youth reports this exciting news to his friends that youth reports this exciting news to his friends that'
}
const useStyles = makeStyles(theme => ({
    postImage: {
        borderRadius: theme.spacing(1),
        maxHeight: '375px',
        marginTop: theme.spacing(2)
    }
}))
export const BlogSingle = () => {
    const classes = useStyles()
    return (
        <Jh_BlogFrame>
            <CardMedia
                className={classes.postImage}
                component="img"
                image={data.image} />
            <PostDetail data={data} />
            <Divider light />
            <br />
            <PostDescription data={data} />
            <Divider light />
            <br />
            <Box display="flex" alignItems="center" justifyContent="space-between" flexWrap="wrap">
                <PostTags tags={data.tags} />
                <SharePost />
            </Box>
            <br />
            <Divider light />
            <br />
            <PostNavigation />
            <br />
            <Divider light />
            <CommentsBox />
            <LeaveAReply />
        </Jh_BlogFrame>
    )
}
