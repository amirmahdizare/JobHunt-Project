import {Typography } from '@material-ui/core'
import React from 'react'
import { IsNotAvailableContent } from '../../../components/IsNotAvailableContent'
export const PostDescription = (props) => {
    const { data } = props
    return (
        <>
            <Typography variant="h6" gutterBottom>
                {data?.title || <IsNotAvailableContent>Blog Title</IsNotAvailableContent>}
            </Typography>
            <Typography component={'p'} variant='body2'>
                {data?.caption || <IsNotAvailableContent>Blog Caption</IsNotAvailableContent>}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>{data.aboutBusiness2}</Typography>
        </>
    )
}
