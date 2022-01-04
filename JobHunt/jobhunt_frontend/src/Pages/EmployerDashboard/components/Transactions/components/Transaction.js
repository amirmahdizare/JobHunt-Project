import { TableCell, TableRow, Typography } from '@material-ui/core'
import moment from 'moment'
import React from 'react'

export const Transaction = ({ package_ID, title, payment_date, payment_type, amount, status }) => {
    return (
        <TableRow >

            <TableCell align="left">
                <Typography variant="body2" color="textSecondary">{package_ID}</Typography>
            </TableCell>

            <TableCell align="left">
              <Typography title={title} variant="body1" >{title.length > 50 ? title.substr(0,50) + "..." : title}</Typography>
            </TableCell>

            <TableCell align='left'>
                <Typography color="textSecondary" variant="body2">{payment_date && moment(payment_date).format("MMM D , YYYY")}</Typography>
            </TableCell>

            <TableCell align="left">
                <Typography color="textSecondary" variant="body2">{payment_type}</Typography>

            </TableCell>

            <TableCell align="left" >
                <Typography color="textSecondary" variant="body2">{amount}</Typography>
            </TableCell>

            <TableCell align="left" >
                <Typography color="textSecondary" variant="body2">{status}</Typography>
            </TableCell>
        </TableRow>
    )
}
