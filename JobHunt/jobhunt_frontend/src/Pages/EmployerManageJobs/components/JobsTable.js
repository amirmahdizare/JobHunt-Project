import React from 'react'
import { Box, Grid, makeStyles, ThemeProvider, Typography } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Jh_Tooltip } from '../../../components/Jh_Tooltip';
import { LineAwesome, SvgEye, SvgPencilAltSolid, SvgTrashAlt } from 'react-line-awesome-svg';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 650,
      
        
    },
    tableContainer:{
        marginLeft:theme.spacing(2),
          '& .MuiTableCell-body':{
            paddingTop:theme.spacing(4),
            paddingBottom:theme.spacing(3)
        }
    },
    thead: {

        color: theme.palette.secondary.main

    },
    tooltip:{
        fontSize:theme.typography.body1.fontSize
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
export const JobsTable = (props) => {
    const classes = useStyles()
    return (
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
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell align="left">
                                <Typography variant="body1">{row.jobTitle}</Typography>
                                <Typography variant="body2" color="textSecondary"><LocationOnOutlinedIcon style={{verticalAlign:'middle'}} fontSize="small" />{row.jobLocation}</Typography>
                            </TableCell>
                            <TableCell align="left"><Typography variant="body2" color="textSecondary">{row.application}+&nbsp;Applied</Typography></TableCell>
                          <TableCell align="left">
                                <Typography color="textSecondary" variant="body2">{row.created}</Typography>
                                <Typography color="textSecondary" variant="body2">{row.expired}</Typography>
                                </TableCell>
                            <TableCell align="left">

                                <Typography color={row.status=='Active' ? 'primary' : 'secondary'} variant="body2">{row.status}</Typography>
                                </TableCell>
                               <TableCell align="left">
                                <Jh_Tooltip fontSize={classes.tooltip.fontsize}  title="View Job" laIcon={SvgEye}  />
                                <Jh_Tooltip fontSize={classes.tooltip.fontsize} title="Edit" laIcon={SvgPencilAltSolid}  />
                                <Jh_Tooltip fontSize={classes.tooltip.fontsize} title="Delete" laIcon={SvgTrashAlt}  />


                            </TableCell> 
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
