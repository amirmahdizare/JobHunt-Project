import { IconButton, InputBase } from '@material-ui/core'
import React from 'react'
import { Jh_Card } from './Jh_Card'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { connect } from 'react-redux';
import { setSearch } from '../Store/Actions/jobAction'

const Jh_SelectLocation = ({ setSearch }) => {
    return (
        <Jh_Card>
            <InputBase
                style={{ flex: 1 }}
                placeholder="Select Location"
                inputProps={{ 'aria-label': 'Select Location' }}
                onChange={(e) => setSearch('searchLocation', e.target.value)}
            />
            <IconButton disableFocusRipple type="submit" aria-label="search">
                <LocationOnOutlinedIcon color="secondary" />
            </IconButton>
        </Jh_Card>
    )
}

const mapStateToProps = state => {
    return {
        JobReducer: state.JobReducer
    };
};
export default connect(mapStateToProps, { setSearch })(Jh_SelectLocation);
