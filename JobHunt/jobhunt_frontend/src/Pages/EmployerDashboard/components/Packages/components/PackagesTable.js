import { Box, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import React from 'react'
import { Jh_Pagination } from '../../../../../components/Jh_Pagination'
import { JobSkeleton } from '../../ManageJobs/components/JobSkeleton';
import { Package } from './Package';

const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 650,
        overflow: 'auto',
    },
    tableContainer: {
        marginLeft: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            marginLeft: 'unset'
        },
        '& .MuiTableCell-body': {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(3),
        }
    },
    thead: {

        color: theme.palette.secondary.main

    },
    tooltip: {
        fontSize: theme.typography.body1.fontSize
    }
}));

export const PackagesTable = () => {
    const classes = useStyles()
    function createData(transactionID, package_type, expiry, job_posting_limit, featured_jobs, price, status) {
        return { transactionID, package_type, expiry, job_posting_limit, featured_jobs, price, status };
    }

    const rows = [
        createData('221319456', 'Supper Jobs', '2021-10-05T14:48:00.000Z', 15, 10, 5, 'Pending'),
        createData('321219456', 'Golden', '2023-10-05T14:48:00.000Z', 10, 9, 1, 'Pending'),


    ];
    return (
        <Box>
            <TableContainer className={classes.tableContainer} component={Box}>
                <Table className={classes.table} aria-label="Jobs table">
                    <TableHead>
                        <TableRow>
                            <TableCell classes={{ root: classes.thead }} align="left"><Typography>Transaction ID</Typography></TableCell>
                            <TableCell classes={{ root: classes.thead }} align="left"><Typography>Package Type</Typography> </TableCell>
                            <TableCell classes={{ root: classes.thead }} align="left"><Typography>Expiry</Typography></TableCell>
                            <TableCell classes={{ root: classes.thead }} align="left"><Typography> Total Jobs/CVs</Typography></TableCell>
                            <TableCell classes={{ root: classes.thead }} align="left"><Typography>Used</Typography> </TableCell>
                            <TableCell classes={{ root: classes.thead }} align="left"><Typography>Remaining</Typography> </TableCell>
                            <TableCell classes={{ root: classes.thead }} align="left"><Typography>Status</Typography> </TableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows ? rows.map((row) => <Package {...row} key={row.id} />) : [0, 0, 0, 0, 0].map((e, i) => <JobSkeleton key={i} />)}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* {number_of_pages > 1 &&
                <Jh_Pagination page={page} pages={number_of_pages} handleChange={handleChange} />} */}

        </Box>
    )
}
