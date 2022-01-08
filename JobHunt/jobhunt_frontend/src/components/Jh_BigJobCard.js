import { React, useEffect, useState } from 'react'
import { Box, Button, Card, CardActionArea, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useGetSpecificCompany } from '../hooks/useGetSpecificCompany'
import { useGetSpecificCorporation } from '../hooks/useGetSpecificCorporation'
import { generateImageURL } from "../api/OSS/minioAPI";
import { useHistory } from "react-router";
import { formatDate } from './index'

const useClasses = makeStyles(theme => ({
    root: {
        borderColor: theme.palette.grey[100],
        borderRadius: 'unset',
        borderTop: '1px solid ',
        boxSizing: 'border-box',
        boxShadow: 'unset',
        textAlign: 'left',
        transition: 'all .2s ease',
        position: 'relative',
        verticalAlign: 'middle',
        width: '100%',
        zIndex: 0,
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center'
        },
        '& .MuiCardActionArea-focusHighlight': {
            background: 'white'
        },
        '&:hover': {
            borderColor: 'transaprent',
            boxShadow: '0px 0px 30px rgba(0,0,0 , 0.1)',
            zIndex: '100',
        }
    },
    companyLogo: {
        height: '70px',
        width: '96px',
        backgroundSize: 'contain'
    },
    companyLogoContainer: {

        display: 'flex',
        justifyContent: 'center'
    },
    companyName: {
        color: theme.palette.info.dark,
    },
    content: {
        paddingTop: theme.spacing(4.5),
        paddingBottom: theme.spacing(4.5),
    },
    itemContainer: {
        alignItems: 'center',
        color: 'gray',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        alignItems: "flex-start",
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
        },
        marginRight: 10
    },
    jobTitle: {
        fontWeight: '600'
    },
    locationContainer: {
        alignItems: 'center',
        display: 'flex',
        marginLeft: 20,
        marginTop: 20,
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
        },
    },
    icon: {
        marginRight: '20px',
        marginTop: 5
    },
    workTime: {
        borderRadius: theme.spacing(2),
        borderWidth: '1px',
    },
    dateTxt: {
        textAlign: 'center',
        marginTop: 5
    }

}))

const Jh_BigJobCard = (props) => {
    const { job, workTime, hideDetail, registeredDate } = props
    const history = useHistory()
    const [like, setLike] = useState(false)
    const [logoImage, setLogoImage] = useState(false)
    const classes = useClasses()
    const { name, logo, address } = useGetSpecificCompany(job.company_id);
    // const { title, color } = useGetSpecificCorporation(job.cooperation_kind_id);

    const getImage = async () => {
        if (logo) {
            const onGetImage = await generateImageURL('jobhunt', Object.values(logo)[0]);
            return onGetImage
        }
    }

    useEffect(() => {
        getImage().then(data => setLogoImage(data))
    }, [logo])

    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.content} onClick={() => history.push({ pathname: `/job/${job.id}/${job.company_id}` })}>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid container direction="column" xs={24} sm={hideDetail ? 12 : 8} >
                        <Grid container xs={24}>
                            <Grid item xs={12} sm={hideDetail ? 5 : 3} className={classes.companyLogoContainer}>
                                {logo && <CardMedia
                                    className={classes.companyLogo}
                                    image={logoImage}
                                />
                                }
                            </Grid>
                            <Grid item xs={12} sm={hideDetail ? 12 : 8} >
                                <Typography className={classes.jobTitle} variant="body1" component="b">{job?.title}</Typography>
                                <Typography className={classes.companyName} color="primary" variant="body1">{name}</Typography>
                                <Grid item className={classes.locationContainer} style={{ marginLeft: 0 }}>
                                    <LocationOnOutlinedIcon />
                                    <Typography variant="body2" >{address}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {!hideDetail ?
                        <Grid item xs={12} sm={3} className={classes.itemContainer}>
                            <FavoriteBorderIcon className={classes.icon} style={{ color: !like ? 'gray' : 'red' }} onClick={() => setLike(!like)} />
                            <Box>
                                <Button className={classes.workTime} style={{ color: job?.cooperation_kind?.color, borderColor: job?.cooperation_kind?.color }} variant="outlined">{job?.cooperation_kind?.title} </Button>
                                {job.created_at &&
                                    <Typography display="block" variant="body2" color="textSecondary" className={classes.dateTxt}>
                                        {formatDate(job.created_at)}
                                    </Typography>}
                            </Box>
                        </Grid>
                        : undefined}
                </Grid>
            </CardActionArea>
        </Card>
    )
}
export default Jh_BigJobCard