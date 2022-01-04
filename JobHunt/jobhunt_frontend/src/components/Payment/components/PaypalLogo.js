import { Box, Link } from '@material-ui/core'
import React from 'react'
import { paypal } from '../../../asset'

export const PaypalLogo = (props) => {
  return (
    <Link    >
      <Box width={'fit-content'} style={{ ...props?.style, cursor: 'pointer',borderRadius:'4px',padding:'4px' }}>
        <img src={paypal} />
      </Box>
    </Link>
  )
}
