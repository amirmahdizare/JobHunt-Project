import { IconButton, InputBase,makeStyles } from '@material-ui/core'
import React from 'react'
import { Jh_Card } from '../../../components/Jh_Card'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
const useStyles=makeStyles(theme=>({
    // iconButton:{
    //     paddingRight:'6px'
    // }
}))

export const SelectLocation = () => {
    const classes=useStyles()
    return (
        <Jh_Card>
            <InputBase
                style={{  flex: 1 }}
                placeholder="Select Location"
                inputProps={{ 'aria-label': 'Select Location' }}
            />
            <IconButton disableFocusRipple classes={{root:classes.iconButton}}  type="submit"  aria-label="search">
                <LocationOnOutlinedIcon color="secondary" />
            </IconButton>
        </Jh_Card>
    )
}
