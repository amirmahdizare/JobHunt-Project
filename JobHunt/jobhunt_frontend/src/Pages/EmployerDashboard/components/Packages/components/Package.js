import { TableCell, TableRow, Typography } from '@material-ui/core'
import moment from 'moment'
import React from 'react'

export const Package = ({packageID, package_type, expiry,currency, job_posting_limit,featured_jobs, price, status }) => {
    return (
        <TableRow >

            <TableCell align="left">
                <Typography variant="body2" color="textSecondary">{packageID}</Typography>
            </TableCell>

            <TableCell align="left">
              <Typography title={package_type} variant="body1" >{package_type?.length > 50 ? package_type?.substr(0,50) + "..." : package_type}</Typography>
            </TableCell>

            <TableCell align='left'>
                <Typography color="textSecondary" variant="body2">{expiry && moment(Date.now()).add(expiry, 'days').format("MMM D , YYYY")}</Typography>
            </TableCell>

            <TableCell align="left">
                <Typography color="textSecondary" variant="body2">{job_posting_limit}</Typography>

            </TableCell>
{/* 
            <TableCell align="left" >
                <Typography color="textSecondary" variant="body2">{featured_jobs}</Typography>
            </TableCell> */}

            <TableCell align="left" >
                <Typography color="textSecondary" variant="body2">{price}{currency}</Typography>
            </TableCell>
            <TableCell align="left" >
                <Typography color="textSecondary" variant="body2">{status}</Typography>
            </TableCell>
        </TableRow>
    )
}
