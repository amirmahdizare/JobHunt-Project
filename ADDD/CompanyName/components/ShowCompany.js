import { Box, Button, Card, CardActions, CardMedia, CircularProgress, Divider, Grid, Link, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { deleteCompany, getCompany } from '../../../../../api/employer'
import { generateImageURL } from '../../../../../api/OSS/minioAPI'
import { getCategoryDetailById } from '../../../../../api/public'
import { noImage } from '../../../../../asset'
import { ItemNotSet } from '../../../../../components/ItemNotSet'
const useClasses = makeStyles(theme => ({
    root: {
        margin: theme.spacing(2),
        width: '100%',
        '& .ql-toolbar': {
            borderTopLeftRadius: '4px',
            borderTopRightRadius: '4px'
        },
        '& .ql-container': {
            borderBottomRightRadius: '4px',
            borderBottomLeftRadius: '4px'
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: 0,
            '& .MuiTextField-root': {
                margin: '8px 0'
            }
        }
    },
    quill: {
        borderRadius: '4px',
        marginTop: '8px',
        marginBottom: '8px',
        width: '100%'
    },
    summary: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    }
}))
export const ShowCompany = ({ info, handleCompanyStateChange }) => {
    const classes = useClasses()
    const [categoryName, setCategoryName] = useState(null)
    const [logoUrl, setLogoUrl] = useState(null)
   // const [info,setCompanyInfo]=useState()
    const handleClickEdit = () => {
        handleCompanyStateChange({ action: 'edit' })
    }
    const handleClickDelete = () => {
        deleteCompany(info.id)
            .then(() => handleCompanyStateChange({ action: 'add' }))
            .catch((e) => { })
    }
    useEffect(() => {
       console.log(info)
    }, [])
    useEffect(() => {
        getCategoryDetailById(info.category_id)
            .then((categoryName) => setCategoryName(categoryName))
            .catch(() => setCategoryName('null'))
            //console.log(info)
        generateImageURL('jobhunt', Object.values(info.logo)[0])
            .then((url) => setLogoUrl(url))
            .catch(() => setLogoUrl(noImage))
    }, [info])
    return (
        <Box>
            {info &&<Grid container className={classes.root} spacing={2}>
                <Grid item className={classes.summary} xs={12} md={6}>
                    <Typography color="textSecondary" variant="body2" display="inline" >Company Name</Typography>
                    {info.name
                        ? <Typography display="inline" variant="h6" gutterBottom>{info.name}</Typography>
                        : <ItemNotSet item="Name" clickToAdd />}
                    <Typography color="textSecondary" variant="body2" display="inline">Category</Typography>
                    {categoryName
                        ? <Typography variant="h6" gutterBottom>{categoryName}</Typography>
                        : <CircularProgress />}
                    <Typography color="textSecondary" variant="body2" display="inline">WebSite</Typography>
                    {info.website
                        ? <Link variant="h6" underline="none" href={'http://' + info.website}>{info.website}</Link>
                        : <ItemNotSet item="Website" clickToAdd />}

                    <Typography  color="textSecondary" variant="body2">Team Size</Typography>
                    <ItemNotSet item="Team Size" clickToAdd />
                    <Typography  color="textSecondary" variant="body2">Since</Typography>
                    <ItemNotSet item="Since" clickToAdd />
                </Grid>
                <Grid item xs={12} md={6} style={{ position: 'relative' }}>
                    {/* <Card> */}
                    {logoUrl
                        ? <CardMedia style={{ maxWidth: '100%', height: '300px', borderRadius: '4px' }} src={logoUrl} component="img" />
                        : <CircularProgress style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translateX(-50%)' }} />}
                    {/* </Card> */}
                </Grid>
                <Grid item xs={12}>
                    {/* <Typography>Location</Typography> */}
                    <Typography color="textSecondary" variant="body2">Description</Typography>
                    {info.description
                        ? <Typography variant="body2" dangerouslySetInnerHTML={{ __html: info.description }}></Typography>
                        : <ItemNotSet item="Description" clickToAdd />}

                    <Button
                        variant="contained"
                        color="primary"
                        style={{ width: '25%', textTransform: 'none' }}
                        onClick={() => handleClickEdit()}
                    >
                        Edit
                    </Button>
                    &nbsp;&nbsp;
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{ width: '25%', textTransform: 'none' }}
                        onClick={() => handleClickDelete()}>
                        Delete
                    </Button>
                </Grid>
            </Grid>}
        </Box>
    )
}
