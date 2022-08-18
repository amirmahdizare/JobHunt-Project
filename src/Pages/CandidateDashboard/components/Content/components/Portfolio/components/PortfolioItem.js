import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton, Tooltip, makeStyles, Box } from '@material-ui/core'
import { Search, Translate } from '@material-ui/icons'
import React from 'react'
import { LineAwesome, SvgPencilAltSolid, SvgTrashAlt } from 'react-line-awesome-svg'
import { Jh_Tooltip } from '../../../../../../../components/Jh_Tooltip'
const useClasses = makeStyles(theme => ({
    tooltip: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: theme.spacing(1),
        fontSize: theme.typography.caption.fontSize,
        paddingLeft: '20px',
        paddingRight: '20px',
    },
    cardHover: {
        alignItems: 'center',
        background: 'linear-gradient(45deg,rgba(139,145,221,1) 0%,rgba(16,25,93,1) 71%,rgba(16,25,93,1) 100%)',
        display: 'flex',
        opacity: 0,
        height: '100%',
        left: '0',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'absolute',
        top: '0',
        transition: 'all 0.4s ease',
        width: '100%',
        '& .MuiSvgIcon-root': {
            color: 'white',
            fontSize: theme.typography.h6,
            transform: 'scaleX(-1)'
        }

    },
    media: {
        maxHeight: '120px',
        minHeight: '90px',
        position: 'relative'

    },
    cardRoot: {
        borderRadius: theme.spacing(1),
        boxSizing: 'border-box',
        width: '100%',
        '&:hover $cardHover': {
            opacity: 0.8,
        }
    }
}))
export const PortfolioItem = (props) => {
    const classes = useClasses()
    return (
        <Grid item xs={6} sm={4} md={3}     >
            <Box display="flex" flexDirection="column" alignItems="center">
                <Card classes={{ root: classes.cardRoot }} >
                    <CardActionArea >


                        <CardMedia
                            className={classes.media}
                            image={props.image}
                            title={props.title}
                            component="img"
                            alt={props.title}
                        />


                        <Box className={classes.cardHover}>
                            <Search fontSize="large" />
                        </Box>

                    </CardActionArea>
                </Card>
                <Box p={1} >
                    <Jh_Tooltip laIcon={SvgPencilAltSolid} title="Edit" callback={undefined} />
                    <Jh_Tooltip laIcon={SvgTrashAlt} title="Delete" callback={undefined} />
                </Box>
            </Box>
        </Grid>
    )
}

