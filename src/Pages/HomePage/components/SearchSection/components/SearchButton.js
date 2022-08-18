import React from 'react'
import { Button, Grid , makeStyles } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
const useClasses = makeStyles((theme) => ({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row-reverse',
        margin: '20px'
    },
    container: {
        display: 'flex',
        padding: theme.spacing(0.5),
        borderRadius: theme.spacing(1)
    },
    input: {
        flex: 1,
        fontSize: '15px',
        marginLeft: theme.spacing(1),
        padding: theme.spacing(1)

    },
    searchButton: {
        backgroundColor: theme.palette.primary.light,
        padding: '14px',
        width: '100%',
        borderRadius: theme.spacing(1),
        float: 'left',
        transition: 'all 0.6s ease',
        '&:hover': {
            backgroundColor: theme.palette.secondary.main
        }

    },
    searchIcon: {
        color: 'white',
        transform: 'scaleX(-1)',
    },

}));
const SearchButton = () => {
    const classes = useClasses()
    return (
        <Grid item xs={12} sm={1} md={1}>
            <Button
                className={classes.searchButton}
                color="primary"
                variant="contained"
            >
                <SearchIcon fontSize="large" className={classes.searchIcon} />
            </Button>
        </Grid>
    )
}
export default SearchButton