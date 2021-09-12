import { IconButton, InputBase
 } from '@material-ui/core'
import React from 'react'
import { Jh_Card } from './Jh_Card'
import SearchIcon from '@material-ui/icons/Search';
export const Jh_SearchKeyword = () => {
    return (
        <Jh_Card>
            <InputBase
                style={{  flex: 1 }}
                placeholder="Search Keyword"
                inputProps={{ 'aria-label': 'Search Keyword' }}
            />
            <IconButton  type="submit"  aria-label="search">
                <SearchIcon color="secondary" />
            </IconButton>
        </Jh_Card>
    )
}
