import { Box, Link } from '@material-ui/core'
import React from 'react'

export const PaymentMethodLogo = ({img,selected,...props}) => {
  return (
      <Box component={'a'} width={'fit-content'} style={{ ...props?.style,border: selected ?'red 2px solid' :null,  cursor: 'pointer',borderRadius:'4px',padding:'4px' }}>
        <img src={img} />
      </Box>
  )
}