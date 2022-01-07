import { Box } from '@material-ui/core'
import React, { useEffect } from 'react'
import loader from '../../../asset/logo/loader.gif'
export const Loading = () => {
    useEffect(() => {
        if (document.getElementsByTagName('header')[0])
            document.getElementsByTagName('header')[0].style.display = "none"
        return () => {
            if (document.getElementsByTagName('header')[0])
                document.getElementsByTagName('header')[0].style.display = "unset"
        }
    }, [])
    return (
        <>
            <Box flexDirection="column" display="flex" justifyContent="center" alignItems="center" width={1} height="100vh">
                <img src={loader} alt="...Loading" style={{ width: '400px', height: '400px ', zIndex: 5 }} />
            </Box>
        </>
    )
}
