import { Typography } from '@material-ui/core'
import React from 'react'
import { getLanguage } from '../utils'

export const IsNotAvailableContent = ({children}) => {
    return (
        <Typography>
            {children} in {getLanguage()?.toUpperCase()} is not available
        </Typography>
    )
}
