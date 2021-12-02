import React, { useEffect, useState } from 'react'
import { Button, CircularProgress, Grid, MenuItem, TextField } from '@material-ui/core'
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { makeStyles } from '@material-ui/core';
import { getAllCategories } from '../../../../../../api/public';
import { SelectLocation } from './components/SelectLocation';
import { EmployerLogo } from './components/EmployerLogo';
import { storeCompany, updateCompany } from '../../../../../../api/employer';
import { IsRequiredAlert } from '../../../../../../components/IsRequiredAlert';
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
export const AddOrEditCompany = ({ handleCompanyStateChange, mode, data }) => {
    const classes = useClasses()
    const [categories, setCategories] = useState([])
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        getAllCategories().then((e) => setCategories(e))
    }, [])
    const [info, setInfo] = useState({
        name: '',
        description: '',
        category_id: '',
        website: '',
        logo: '',
        team_size: '',
        since: '',
        ...data
    })

    const handleChange = (field, value) => {
        setInfo({ ...info, [field]: value });
        setError({})
    };

    const handleClickSubmit = () => {
        setLoading(true)
        storeCompany(info)
            .then((data) => {
                setLoading(false);
                handleCompanyStateChange({data : data , action:'show'})
            })
            .catch(e => {
                setLoading(false)
                setError(e)
            })
    }
    const handleClickSave = () => {
        setLoading(true)
        updateCompany(info)
            .then(() => {
                setLoading(false);
                console.log('Update',data)
                handleCompanyStateChange({data:data , action:'show'})
            })
            .catch(e => {
                setLoading(false)
                setError(e)
            })
    }
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item className={classes.summary} xs={12} md={6}>

                <TextField
                    id="outlined-number"
                    label="Company Name"
                    placeholder="Enter Your Company Name"
                    type="text"
                    // InputLabelProps={{
                    //     shrink: true,
                    // }}
                    value={info.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    variant="outlined"
                    fullWidth
                    error={error?.name}
                />
                {error.name ? <IsRequiredAlert field="Name"/> : null}
                <TextField
                    id="outlined-select-Category"
                    select
                    label="Select Category"
                    value={info.category_id}
                    onChange={(e) => handleChange('category_id', e.target.value)}
                    // helperText="Please select your Category"
                    variant="outlined"
                    fullWidth
                    error={error?.category_id}
                >
                    {categories.map((option) => (
                        <MenuItem key={option.title} value={option.id}>
                            {option.title}
                        </MenuItem>
                    ))}
                </TextField>
                {error.category_id ? <IsRequiredAlert field="Category"/> : null}
                <TextField
                    label="Website"
                    placeholder="Example : www.MyCompany.com"
                    type="text"
                    // InputLabelProps={{
                    //     shrink: true,
                    // }}
                    value={info.website}
                    onChange={(e) => handleChange('website', e.target.value)}
                    variant="outlined"
                    fullWidth
                    error={error?.website}
                />
                {error.website ? <IsRequiredAlert field="website"/> : null}
                <TextField
                    id="outlined-number"
                    label="Team Size"
                    placeholder="Ex: 10"
                    type="text"
                    // InputLabelProps={{
                    //     shrink: true,
                    // }}
                    value={info.team_size}
                    onChange={(e) => handleChange('team_size', e.target.value)}
                    variant="outlined"
                    fullWidth
                    disabled
                />
                {error.team_size ? <IsRequiredAlert field="Team Size"/> : null}
                <TextField
                    id="outlined-number"
                    label="Since"
                    placeholder="Ex: 10"
                    type="number"
                    // InputLabelProps={{
                    //     shrink: true,
                    // }}
                    value={info.team_size}
                    onChange={(e) => handleChange('since', e.target.value)}
                    variant="outlined"
                    fullWidth
                    disabled
                />
                {error.since ? <IsRequiredAlert field="Since"/> : null}
            </Grid>
            <Grid item xs={12} md={6}>
                <EmployerLogo logo={info.logo} mode={mode} handleChange={handleChange} />
                {error.logo ? <IsRequiredAlert field="Logo"/> : null}
            </Grid>
            <Grid item xs={12} >
                <SelectLocation />
                <ReactQuill className={classes.quill} theme="snow" placeholder="Enter Company Description" value={info.description} onChange={c => handleChange('description', c)} />
                {error.description ? <IsRequiredAlert field="Description"/> : null}
                {mode == 'edit' && <Button
                    variant="contained"
                    color="primary"
                    style={{ width: '50%', textTransform: 'none', left: '50%', transform: 'translateX(-50%)' }}
                    onClick={() => handleClickSave()}
                >
                    {loading ? <CircularProgress color="inherit" /> : 'Save Changes'}
                </Button>}
                {mode == 'add' && <Button
                    variant="contained"
                    color="primary"
                    style={{ width: '50%', textTransform: 'none', left: '50%', transform: 'translateX(-50%)' }}
                    onClick={() => handleClickSubmit()}>
                    {loading ? <CircularProgress color="inherit" style={{objectFit:'cover'}} /> : 'Submit'}
                </Button>}
            </Grid>
        </Grid>
    )
}
