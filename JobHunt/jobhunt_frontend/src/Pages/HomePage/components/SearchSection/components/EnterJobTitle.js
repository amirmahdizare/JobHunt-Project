import React from 'react'
import BrowseJob from './BrowseJob';
import { Grid, InputBase, makeStyles, Paper, TextField } from '@material-ui/core'
import KeyboardOutlinedIcon from '@material-ui/icons/KeyboardOutlined';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useCategories } from '../../../../../hooks/useCategories';
const useClasses = makeStyles((theme) => ({
    root: {
        position: 'relative'
    },
    container: {
        display: 'flex',
        //padding: theme.spacing(2),
        borderRadius: theme.spacing(1),
        alignItems: 'center'
    },
    input: {
        flex: 1,
        fontSize: '15px',
        // marginLeft: theme.spacing(1),
        // padding: theme.spacing(2)
        padding: '0px'

    }
}))
const EnterJobTitle = ({ setCategory, category }) => {
    const classes = useClasses()
    const [categories, error, loading] = useCategories()
    return (
        <Grid item xs={12} sm={6} md={6} className={classes.root} >
            <Paper component="div" className={classes.container}>
                {loading && <TextField fullWidth size='medium' style={{ height: '100%', borderColor: 'white', direction: 'ltr' }} value={'Loading Categories'} variant="outlined" />}

                {!loading && categories && <Autocomplete
                    id="select-state"
                    options={categories}
                    getOptionLabel={(option) => option.title}
                    value={category}
                    fullWidth
                    onChange={(event, value) => setCategory(value)}
                    renderInput={(params) => <TextField size='medium' style={{ height: '100%', borderColor: 'white', direction: 'ltr' }} {...params} placeholder='Select Category' variant="outlined" />}
                />}
                {!loading && !categories  && < TextField disabled fullWidth size='medium' style={{ height: '100%', borderColor: 'white', direction: 'ltr' }} value={'No Available Category'} variant="outlined" />}

            </Paper>
            <BrowseJob />
        </Grid>
    )
}
export default EnterJobTitle