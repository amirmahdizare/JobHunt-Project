import { Box, Button, CardMedia, CircularProgress, Grid, makeStyles, MenuItem, TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { noImage } from '../../../../asset'
import { SectionHeader } from '../../../../components/SectionHeader'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { generateImageURL } from '../../../../api/OSS/minioAPI';
import { getCompany, storeCompany, updateCompany } from '../../../../api/employer';
import { getAllCategories } from '../../../../api/public';
import DateFnsUtils from '@date-io/date-fns';
import {
    KeyboardDatePicker,
} from '@material-ui/pickers';
import {MuiPickersUtilsProvider,} from '@material-ui/pickers';
import { Loading } from '../../../../components/Loading';
import { Alert } from '@material-ui/lab';
import { capitalizeFirstLetter } from '../../../../utils';
const useStyles = makeStyles(theme => ({
    container: {
        position: 'relative',
        [theme.breakpoints.up('md')]: {
            margin: theme.spacing(1.5),

        },
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
    logoActionContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column'
    },
    quill: {
        borderRadius: '4px',
        marginTop: '8px',
        marginBottom: '8px',
        width: '100%'
    },
    buttonContainer:{
        width:'50%',
        [theme.breakpoints.down('sm')]:{
            width:'100%'
        }
    }
}))
export const CompanyProfile = () => {
    const classes = useStyles()
    const [error, setError] = useState({})
    const [preview, setPreview] = useState({
        content: '',
        status: ''
    })
    const [loading, setLoading] = useState(false)
    const [state, setState] = useState('')
    const [categories, setCategories] = useState([])
    const [info, setInfo] = useState({})
    const [toEditInfo, setToEditInfo] = useState({})
    const [result, setResult] = useState('')

    useEffect(() => {
        setLoading(true)
        getCompany()
            .then((data) => {

                if (!data) {
                    setState('add')
                }
                else {
                    setState('edit')
                    setInfo(data)
                }
                setLoading(false)
            })
            .catch(() => setLoading(false))

    }, [])

    useEffect(() => {
        getAllCategories().then((e) => setCategories(e))
    }, [])

    useEffect(() => {

        const { logo } = info || toEditInfo
        if (!logo) {
            setPreview({ content: undefined })
            return
        }
        if (logo['name']) {
            const objectUrl = URL.createObjectURL(logo)
            setPreview({ content: objectUrl })
            return () => URL.revokeObjectURL(objectUrl)
        }
        else {
            setPreview({ ...preview, status: 'loading' })
            generateImageURL('jobhunt', Object.values(logo)[0]).then((url) => setPreview({ content: url, status: 'ready' }))
        }

    }, [info.logo, toEditInfo.logo])

    const handleChange = (field, value) => {
        if (!loading) {
            setToEditInfo({ ...toEditInfo, [field]: value });
            setInfo({ ...info, [field]: value });
            setError({...error,[field]:null})
            setResult('')
        }
    };
    const handleUpdate = () => {
        for(let item in error){
            if(error[item]) {
                setResult('error')
                return 
            }
        }
        if (state == 'edit') {
            setLoading(true)
            updateCompany({ ...toEditInfo, ['id']: info['id'] })
                .then(() => {
                    setLoading(false);
                    setResult('success')
                    //setToEditInfo({})
                })
                .catch(e => {
                    setLoading(false)
                    setResult('error')
                    setError(e)
                })
        }
        else {
            setLoading(true)
            storeCompany(info)
                .then(() => {
                    setResult('success')
                    setLoading(false);
                })
                .catch(e => {
                    setLoading(false)
                    setResult('error')
                    setError(e)
                })
        }
    }

    const valueGenerator = (field) => toEditInfo[field] ? toEditInfo[field] : info[field] || ''

    const errorTextGenerator = (field) => error[field] ? capitalizeFirstLetter(error[field].join()) : null
    return (
        <Box mb={2}>
            <SectionHeader title="My Profile" />
            <Grid container spacing={2} className={classes.container} >
                <Grid item xs={12}>
                    {result == 'success' && <Alert severity="success" variant="filled">Profile Succesfully Updated</Alert>}
                    {result == 'error' && <Alert severity="error" variant="filled">Something went Wrong,Check Details</Alert>}
                </Grid>
                <Grid item xs={12} md={4} style={{ position: 'relative' }}>
                    <CardMedia src={preview.content
                        ? preview.content
                        : noImage
                    } component="img" width="160px" height="150px" />
                    {preview.status == 'loading' && !preview.content && <Box bgcolor="rgba(0,0,0,.3)" top="0" borderRadius="4px" position="absolute" width={1} height="100%"><Loading /></Box>}
                </Grid>

                <Grid item xs={12} md={8} className={classes.logoActionContainer}>
                    <Box  className={classes.buttonContainer} display="flex" flexDirection="row">
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            component="label">
                            Browse
                            <input
                                type="file"
                                hidden
                                onChange={(e) => {
                                    if (!!e.target.files.length) { handleChange('logo', e.target.files[0]) }
                                }}
                            />
                        </Button>
                    </Box>
                    &nbsp;
                    <Typography variant="body2" color="textSecondary">Max file size is 1MB, Minimum dimension: 270x210 And Suitable files are .jpg & .png</Typography>
                    <Typography color="error">{errorTextGenerator('logo')}</Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography gutterBottom>Company Name</Typography>
                    <TextField
                        variant="outlined"
                        fullWidth
                        value={valueGenerator('name')}
                        onChange={(e) => handleChange('name', e.target.value)}
                        error={!!error['name']}
                        helperText={errorTextGenerator('name')}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography gutterBottom>Category</Typography>
                    <TextField
                        select
                        //label="Select Category"
                        value={valueGenerator('category_id')}
                        onChange={(e) => handleChange('category_id', e.target.value)}
                        // helperText="Please select your Category"
                        variant="outlined"
                        fullWidth
                        error={!!error['category_id']}
                        helperText={errorTextGenerator('category_id')}
                    >
                        {categories.map((option) => (
                            <MenuItem key={option.title} value={option.id}>
                                {option.title}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Typography gutterBottom>Establishment Date</Typography>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            variant="inline"
                            fullWidth
                            format="MM-dd-yyyy"
                            inputVariant="outlined"
                            invalidLabel="fvfv"
                            disableFuture={true}
                            id="date-picker-inline"
                            maxDate={new Date()}
                            invalidDateMessage="Invalid"
                            onInvalid={(e) => alert(e)}
                            error={!!error['establishment_date']}
                            helperText={errorTextGenerator('establishment_date')}
                            value={valueGenerator('establishment_date') || new Date().toISOString()}
                            onChange={(e) => {
                                try { handleChange('establishment_date', new Date(e).toISOString()) }
                                catch (error) { setError({...error,['establishment_date']:['Time Format is Invalid']}) }
                            }
                            }
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography gutterBottom>Team Size</Typography>
                    <TextField
                        type="number"
                        fullWidth
                        variant="outlined"
                        InputProps={{ inputProps: { min: 0 } }}
                        error={!!error['number_of_employees']}
                        helperText={errorTextGenerator('number_of_employees')}
                        onChange={(e) => handleChange('number_of_employees', e.target.value)}
                        value={valueGenerator('number_of_employees')}
                    />

                </Grid>

                <Grid item xs={12} md={4}>
                    <Typography  gutterBottom>Phone Number</Typography>
                    <TextField
                        variant="outlined"
                        fullWidth
                        // disabled
                        error={!!error['contacts[phone]']}
                        helperText={errorTextGenerator('contacts[phone]')}
                        onChange={(e) => {
                            const phones = [e.target.value]
                            handleChange('contacts[phone]', e.target.value)
                        }}
                        value={valueGenerator('contacts[phone]')}
                    >
                    </TextField>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography  gutterBottom>Email</Typography>
                    <TextField
                        // disabled
                        variant="outlined"
                        fullWidth
                        error={!!error['contacts[email]']}
                        helperText={errorTextGenerator('contacts[email]')}
                        onChange={(e) => handleChange('contacts[email]', e.target.value)}
                        value={valueGenerator('contacts[email]')}
                    >
                    </TextField>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography gutterBottom>Website</Typography>
                    <TextField
                        variant="outlined"
                        fullWidth
                        error={!!error['website']}
                        helperText={errorTextGenerator('website')}
                        onChange={(e) => handleChange('website', e.target.value)}
                        value={valueGenerator('website')}
                    >
                    </TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography gutterBottom>Instagram Link</Typography>
                    <TextField
                        variant="outlined"
                        fullWidth
                        error={!!error['social_links[instagram]']}
                        helperText={errorTextGenerator('social_links[instagram]')}
                        onChange={(e) => handleChange('social_links[instagram]', e.target.value)}
                        value={valueGenerator('social_links[instagram]')}
                    >
                    </TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography gutterBottom>Facebook Link</Typography>
                    <TextField
                        variant="outlined"
                        fullWidth
                        error={!!error['social_links[facebook]']}
                        helperText={errorTextGenerator('social_links[facebook]')}
                        onChange={(e) => handleChange('social_links[facebook]', e.target.value)}
                        value={valueGenerator('social_links[facebook]')}
                    >
                    </TextField>
                </Grid>

                <Grid item xs={12} >
                    <Typography gutterBottom>Address</Typography>
                    <TextField
                        variant="outlined"
                        fullWidth
                        value={valueGenerator('address')}
                        error={!!error['address']}
                        helperText={errorTextGenerator('address')}
                        onChange={(e) => handleChange('address', e.target.value)}
                    >
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <Typography gutterBottom>Description</Typography>
                    <ReactQuill
                        //className={classes.quill}
                        theme="snow"
                        placeholder="Enter Company Description"
                        value={valueGenerator('description')}
                        onChange={c => handleChange('description', c)}
                    />
                    {!!errorTextGenerator('description') && <Typography color="secondary" variant="subtitle2">&nbsp;{errorTextGenerator('description')}</Typography>}
                </Grid>

                <Grid item  md={10}>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={() => handleUpdate()}
                    >
                        Update
                    </Button>

                </Grid>
                {loading && <Box position="absolute" top="0px" display="flex" flexDirection="column" borderRadius="8px" alignItems="center" justifyContent="center" bgcolor="rgba(0,0,0,0.3)" width={1} height="100%">
                    <Box bgcolor="white" borderRadius="8px" p={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <CircularProgress style={{ fontSize: '3.5rem' }} />
                        <br />
                        <Typography variant="h6">Loading</Typography>
                    </Box>
                </Box>}
            </Grid>

        </Box>
    )
}
