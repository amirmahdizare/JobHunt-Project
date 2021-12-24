import React, { useState } from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Job } from './Job';
import { Jh_Pagination } from '../../../../../components/Jh_Pagination';
import { getCompanyJobs } from '../../../../../api/employer';
import { useGetData } from '../../../../../hooks/useGetData';
import { JobSkeleton } from './JobSkeleton';

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

function createData(jobTitle, jobLocation, application, created, expired, status) {
    return { jobTitle, jobLocation, application, created, expired, status };
}

const rows = [
    createData('Web Designer / Developer', 'Sacramento, California', 3, 'October 27, 2017', 'April 25, 2011', 'Active'),
    createData('Web Designer / Developer', 'Sacramento, California', 3, 'October 27, 2017', 'April 25, 2011', 'Active'),
    createData('Web Designer / Developer', 'Sacramento, California', 3, 'October 27, 2017', 'April 25, 2011', 'Active'),
    createData('Web Designer / Developer', 'Sacramento, California', 3, 'October 27, 2017', 'April 25, 2011', 'Inactive'),
    createData('Web Designer / Developer', 'Sacramento, California', 3, 'October 27, 2017', 'April 25, 2011', 'Active'),

];

export const JobsTable = () => {
    const [page, setPage] = useState(1)
    const classes = useStyles()
    const [JobsDetail, error, loading] = useGetData(getCompanyJobs, { pagination_size: 5, page: page })
    if (JobsDetail)
        var { entities = null, number_of_entities = 0, number_of_pages } = JobsDetail
    //console.log(entities)
    const handleChange = (event, value) => setPage(value)
    console.log( document.querySelector('.MuiPagination-ul li:last-child button svg'))
    // document.querySelector('.MuiPagination-ul li:last-child button svg').before(text)

    return (
        <Box>
            <TableContainer className={classes.tableContainer} component={Box}>
                <Table className={classes.table} aria-label="Jobs table">
                    <TableHead>
                        <TableRow>
                            <TableCell classes={{ root: classes.thead }} align="left"><Typography>Title</Typography></TableCell>
                            <TableCell classes={{ root: classes.thead }} align="left"><Typography>Applications</Typography> </TableCell>
                            <TableCell classes={{ root: classes.thead }} align="left"><Typography>Created & Expired</Typography></TableCell>
                            <TableCell classes={{ root: classes.thead }} align="left"><Typography>Status</Typography></TableCell>
                            <TableCell classes={{ root: classes.thead }} align="left"><Typography>Action</Typography> </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {entities && !loading ? entities.map((row) => <Job {...row} />) : [0, 0, 0, 0, 0].map(() => <JobSkeleton />)}
                    </TableBody>
                </Table>
            </TableContainer>
            {number_of_pages > 1 &&
                <Jh_Pagination page={page} pages={number_of_pages} handleChange={handleChange} />}

        </Box>
    )
}
