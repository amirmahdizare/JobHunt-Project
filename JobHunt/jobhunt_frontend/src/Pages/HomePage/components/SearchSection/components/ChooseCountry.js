import React from 'react'
import { Grid, makeStyles, Paper, TextField } from '@material-ui/core'
import { useChinaStates } from '../../../../../hooks/useChinaStates'
import Autocomplete from '@material-ui/lab/Autocomplete';
const useClasses = makeStyles((theme) => ({
    root: {
        borderRadius: theme.spacing(1),
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'relative',
        backgroundColor: 'white',
        '& .MuiList-root': {
            padding: '0',
            width: '100%'
        }
        ,
        '& .MuiListItem-button': {
            padding: theme.spacing(2)
        }
    },
    menuList: {
        backgroundColor: 'white',
        borderRadius: theme.spacing(1),
        left: '0',
        position: 'absolute',
        top: '110%',
        zIndex: '100'
    },
    menuItem: {
        color: 'rgba(0, 0, 0, 0.54)',
        fontWeight: '600',
        padding: '12px 50px 12px 20px ',
        transition: 'all 0.3s ease',
        width: '100%',
        '&:hover': {
            backgroundColor: 'transparent',
            color: '#fb236a',
            paddingLeft: '30px',

        }
    }
}));

const ChooseCountry = ({ setState, state }) => {
    const classes = useClasses()
    const [states, error, loading] = useChinaStates()

    return (
        <Grid item xs={12} sm={4} md={3}>
            <Paper component="div" className={classes.root}>
                {loading && <TextField fullWidth size='medium' style={{ height: '100%', borderColor: 'white', direction: 'ltr' }} value={'Loading States'} variant="outlined" />}
                {!loading && states && <Autocomplete
                    id="select-state"
                    options={states}
                    getOptionLabel={(option) => option.name}
                    fullWidth
                    value={state}
                    onChange={(event, option) => setState(option)}
                    renderInput={(params) => <TextField size='medium' style={{ height: '100%', borderColor: 'white', direction: 'ltr' }} {...params} placeholder='Select State' variant="outlined" />}
                />}
            </Paper>

        </Grid >
    )
}
export default ChooseCountry