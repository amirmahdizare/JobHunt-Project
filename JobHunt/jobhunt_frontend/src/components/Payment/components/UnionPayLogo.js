import { Link } from '@material-ui/core'
import React from 'react'
import { unionpay } from '../../../asset'

export const UnionPayLogo = (props) => {
    return (
        <Link  {...props} style={{...props?.style , cursor:'pointer'}}>
          <img src = {unionpay} />  
        </Link>
    )
}
