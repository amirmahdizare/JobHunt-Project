import { Box, Button, CircularProgress, Typography } from '@material-ui/core'
import { Person } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { getRollsDetail } from '../../../api/authentication/UseProvideAuth/subMethods/getRollsDetail'
import { makeStyles } from '@material-ui/core'
import { capitalizeFirstLetter } from '../../../utils'

const useStyles = makeStyles((theme) => ({
    button: {
        textTransform: 'none',
        textAlign: 'left',
        justifyContent: 'flex-start',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)

    }
}))
export const SelectAccount = ({ handleChange, userRole, useTo, setNextButtonState }) => {
    const classes = useStyles()
    const [roles, setRoles] = useState([])
    useEffect(() => {
        getRollsDetail().then((dataRoles) => {
            setRoles(dataRoles.filter((role) => role.title != 'guest' && role.title != 'user'))
        })
            .catch(() => setRoles([]))

    }, [])

    useEffect(() => {
        setNextButtonState(!!userRole)
    })
    const handleSelectRole = (roleTitle, role_id) => {
        handleChange({ 'role': roleTitle, 'role_id': role_id })
        setNextButtonState(true)
    }
    return (
        <Box className='sss'>
            <Typography component="span" variant="h6" gutterBottom>Select Account Type to {useTo}</Typography>
            <Box display="flex" alignItems="space-between" flexDirection="column">
                {roles.length != 0
                    ? roles.map(role =>
                        <Button key={role.title} onClick={() => handleSelectRole(role.title, role.id)} fullWidth startIcon={<Person />} variant={role.title == userRole ? 'contained' : 'outlined'} color="primary" size="large" className={classes.button} >
                            <Typography variant="h6" align="left">{capitalizeFirstLetter(role.title)}</Typography>
                        </Button >)
                    : <Box><CircularProgress /></Box>}
            </Box>
        </Box>
    )
}
