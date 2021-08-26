import { IconButton, InputBase,makeStyles
 } from '@material-ui/core'
import React from 'react'
import { Jh_Card } from '../../../components/Jh_Card'
import SearchIcon from '@material-ui/icons/Search';
const useStyles=makeStyles(theme=>({
    // iconButton:{
    //     paddingRight:'0'
    // }
}))
export const SearchKeyword = () => {
    const classes=useStyles()
    return (
        <Jh_Card>
            <InputBase
                style={{  flex: 1 }}
                placeholder="Search Keyword"
                inputProps={{ 'aria-label': 'Search Keyword' }}
            />
            <IconButton classes={{root:classes.iconButton}} type="submit"  aria-label="search">
                <SearchIcon color="secondary" />
            </IconButton>
        </Jh_Card>
    )
}
