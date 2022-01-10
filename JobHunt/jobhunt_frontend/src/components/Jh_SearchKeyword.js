import {
    IconButton, InputBase
} from '@material-ui/core'
import React, { useState, useRef, useEffect } from 'react'
import { Jh_Card } from './Jh_Card'
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import { onJobChange, setSearch } from '../Store/Actions/jobAction'

const Jh_SearchKeyword = ({ JobReducer, setSearch, onJobChange }) => {

    const [searchTxt, setSearchTxt] = useState('')

    const firstUpdate = useRef(true);
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        } else {
            const timeoutId = setTimeout(() => { setSearch('searchKeyword', searchTxt) }, 800);
            return () => clearTimeout(timeoutId);
        }
    }, [searchTxt]);

    return (
        <Jh_Card>
            <InputBase
                style={{ flex: 1 }}
                placeholder="Search Keyword"
                inputProps={{ 'aria-label': 'Search Keyword' }}
                onChange={(e) => { setSearchTxt(e.target.value); onJobChange('searchKeyword', e.target.value) }}
                value={JobReducer.searchKeyword}
            />
            <IconButton type="submit" aria-label="search">
                <SearchIcon color="secondary" />
            </IconButton>
        </Jh_Card>
    )
}

const mapStateToProps = state => {
    return {
        JobReducer: state.JobReducer
    };
};
export default connect(mapStateToProps, { setSearch, onJobChange })(Jh_SearchKeyword);