import { Box, CircularProgress, Grow } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React from 'react'

const ShowAlertForLoginStateComponent = ({loginState}) => {
    var showAlertContent
    switch (loginState) {
        case 'error':
            showAlertContent = <Alert  style={{ width: '100%', transition: 'all 0.4s ease 0.1s' }} elevation={4} variant="filled" severity="error">Username or Password is incorrect</Alert>
            break
        case 'success':
            showAlertContent = <Alert  style={{ width: '100%', transition: 'all 0.4s ease 0.1s' }} elevation={4} variant="filled" severity="success"> Login successful</Alert>
            break
        case 'incomplete':
            showAlertContent = <Alert  style={{ width: '100%', transition: 'all 0.4s ease 0.1s' }} elevation={4} variant="filled" severity="warning">Please fill all fields</Alert>
            break
        case 'processing':
            showAlertContent = <CircularProgress  />
            break
        default:
            showAlertContent = undefined
    }
    return (<Grow
        key='12'
        in={true}
        style={{ transformOrigin: '0 0 0' }}
        timeout={{ appear: 200, enter: 300, exit: 600 }}
    >
        <Box width={1} display="flex" justifyContent="center" mt={1}>{showAlertContent}</Box>
    </Grow>)

}
export const ShowAlertForLoginState = React.memo(ShowAlertForLoginStateComponent)