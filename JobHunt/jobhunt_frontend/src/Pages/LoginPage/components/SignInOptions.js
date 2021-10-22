import { Box, Divider, Typography } from '@material-ui/core'
import React from 'react'
import { Jh_Share } from '../../../components/Jh_Share'

export const SignInOptions = () => {
    return (
        <>
            <Box display="flex" alignItems="center" width={1} my={1}>
                <Divider component="div" style={{ flex: 1 }} variant="fullWidth" light />
                <Box mx={2}><Typography color="textSecondary" >Or</Typography></Box>
                <Divider component="div" style={{ flex: 1 }} variant="fullWidth" light />
            </Box>
            <Box display="flex" justifyContent="center">
                <Jh_Share hideShare googleLink="http://www.google.com" twitterLink="http://www.twitter.com" facebookLink="http://www.facebook.com"  />
            </Box>
        </>
    )
}
