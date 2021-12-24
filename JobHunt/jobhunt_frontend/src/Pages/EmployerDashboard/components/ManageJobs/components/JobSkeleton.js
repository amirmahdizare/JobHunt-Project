import React from 'react'
import { Box } from '@material-ui/core'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Skeleton } from '@material-ui/lab';

export const JobSkeleton = () => {
    return (
        <TableRow>
            <TableCell align="left">
                <Skeleton variant="text" />
                <Skeleton variant="text" />
            </TableCell>

            <TableCell align="left">
                <Skeleton variant="text" />
            </TableCell>
            <TableCell align="left">
                <Skeleton variant="text" />
                <Skeleton variant="text" />
            </TableCell>
            <TableCell align="left">
                <Skeleton variant="text" />
            </TableCell>
            <TableCell align="left" >
                <Box display="flex" flexWrap="nowrap">
                    <Skeleton variant="circle" width={21} height={20} /> &nbsp;&nbsp; &nbsp;&nbsp;
                    <Skeleton variant="circle" width={21} height={20} />&nbsp;&nbsp; &nbsp;&nbsp;
                    <Skeleton variant="circle" width={21} height={20} />
                </Box>

            </TableCell>
        </TableRow>
    )
}
