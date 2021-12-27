import { Box, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { Jh_Pagination } from '../../../../../components/Jh_Pagination'
import { useEmployerActivePackage } from '../../../../../hooks/useEmployerActivePackage';
import { getCurrency } from '../../../../../utils';
import { Package } from './Package';
import { SectionLoading } from '../../../../../components/SectionLoading'
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
    const [packageInfo, error, loading] = useEmployerActivePackage()
    return (
        <Box>
            {loading && <SectionLoading />}
            {!packageInfo && !loading && <Typography>You Dont Have Active Package , Buy from Below</Typography>}
            {packageInfo && !loading && <TableContainer className={classes.tableContainer} component={Box}>
                <Table className={classes.table} aria-label="Jobs table">
                    <TableHead>
                        <TableRow>
                            <TableCell classes={{ root: classes.thead }} align="left"><Typography>Transaction ID</Typography></TableCell>
                            <TableCell classes={{ root: classes.thead }} align="left"><Typography>Package Type</Typography> </TableCell>
                            <TableCell classes={{ root: classes.thead }} align="left"><Typography>Expiry</Typography></TableCell>
                            <TableCell classes={{ root: classes.thead }} align="left"><Typography>Job Posting Limit</Typography> </TableCell>
                            <TableCell classes={{ root: classes.thead }} align="left"><Typography>Price</Typography> </TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <Package
                            packageID={packageInfo?.id}
                            package_type={packageInfo?.type}
                            expiry={packageInfo?.rules?.expire_rule}
                            job_posting_limit={packageInfo?.rules?.job_posting_limit}
                            price={packageInfo?.price?.amount}
                            currency={getCurrency(packageInfo?.price?.currency)}
                        //    status={}
                        />
                    </TableBody>
                </Table>
            </TableContainer>}
        </Box>
    )
}
