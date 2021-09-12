import { IconButton, InputBase } from '@material-ui/core'
import React from 'react'
import { Jh_Card } from './Jh_Card'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
export const Jh_SelectLocation = () => {
    return (
        <Jh_Card>
            <InputBase
                style={{  flex: 1 }}
                placeholder="Select Location"
                inputProps={{ 'aria-label': 'Select Location' }}
            />
            <IconButton disableFocusRipple   type="submit"  aria-label="search">
                <LocationOnOutlinedIcon color="secondary" />
            </IconButton>
        </Jh_Card>
    )
}
