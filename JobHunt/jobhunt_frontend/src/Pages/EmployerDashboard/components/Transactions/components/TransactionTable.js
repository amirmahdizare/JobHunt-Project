import { Box, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import React from 'react'
import { Jh_Pagination } from '../../../../../components/Jh_Pagination'
import { JobSkeleton } from '../../ManageJobs/components/JobSkeleton';
import { Transaction } from './Transaction';

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

export const TransactionTable = () => {
    const classes = useStyles()
    function createData( package_ID, title, payment_date, payment_type, amount, status ) {
        return {package_ID, title, payment_date, payment_type, amount, status};
    }
    
    const rows = [
        createData('221319456', 'Advertise job - Supper Jobs', '2021-10-05T14:48:00.000Z', 'Pre Bank Transfer', ' $99', 'Pending'),
        createData('321219456', 'Advertise job - Supper Jobs Advertise job - Supper Jobs Advertise job - Supper Jobs', '2023-10-05T14:48:00.000Z', 'Pre Bank Transfer', ' $99', 'Pending'),

    
    ];
    return (
        <Box>
            <TableContainer className={classes.tableContainer} component={Box}>
                <Table className={classes.table} aria-label="Jobs table">
                    <TableHead>
                        <TableRow>
                            <TableCell classes={{ root: classes.thead }} align="left"><Typography>Package ID</Typography></TableCell>
                            <TableCell classes={{ root: classes.thead }} align="left"><Typography>Title</Typography> </TableCell>
                            <TableCell classes={{ root: classes.thead }} align="left"><Typography>Payment Date</Typography></TableCell>
                            <TableCell classes={{ root: classes.thead }} align="left"><Typography> 	Payment Type</Typography></TableCell>
                            <TableCell classes={{ root: classes.thead }} align="left"><Typography>Amount</Typography> </TableCell>
                            <TableCell classes={{ root: classes.thead }} align="left"><Typography>Status</Typography> </TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows  ? rows.map((row) => <Transaction {...row}  key={row.id} />) : [0, 0, 0, 0, 0].map((e, i) => <JobSkeleton key={i} />)}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* {number_of_pages > 1 &&
                <Jh_Pagination page={page} pages={number_of_pages} handleChange={handleChange} />} */}

        </Box>
    )
}
