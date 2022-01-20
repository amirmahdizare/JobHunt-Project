import React, { useEffect, useState } from 'react'
import { Button, Grid, makeStyles } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
//import {useSearchParams} from 'react-router-dom'
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
        padding: theme.spacing(1.25),
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
const SearchButton = ({ category, state }) => {
    const classes = useClasses()
    const [queries, setQueries] = useState('')
    useEffect(() => {
        var temp = {}
        if (category?.id) temp = {categories:category.title}
        if (state?.id ) temp = { ...temp,states:state.name}
        setQueries( new URLSearchParams(temp))
       
    }, [category?.id, state?.id])
    return (
        <Grid item xs={12} sm={1} md={1}>
            <Button
                href={queries ? '/jobs?' + queries : '/jobs'}
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