import React, { useState } from 'react'
import { Box, Typography } from '@material-ui/core'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Jh_Tooltip } from '../../../../../components/Jh_Tooltip';
import { SvgEye, SvgPencilAltSolid, SvgTrashAlt } from 'react-line-awesome-svg';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import moment from 'moment';
import { capitalizeFirstLetter } from '../../../../../utils';
import { DeleteJobDialoge } from './DeleteJobDialoge';

export const Job = ({application,title,city_name,created_at,status,id,refreshCallback}) => {
    const [open,setOpen]=useState(false)
    return (
        <>
        <TableRow key={id}>
            <TableCell align="left">
                <Typography variant="body1" >{title.length > 25  ?  title.substr(0,25) +"..."  : title }</Typography>
               { city_name  &&<Typography variant="body2" color="textSecondary"><LocationOnOutlinedIcon style={{ verticalAlign: 'middle' }} fontSize="small" />&nbsp;{city_name}</Typography>}
            </TableCell>
            <TableCell align="left"><Typography variant="body2" color="textSecondary">{application  ? <>{application}&nbsp;+&nbsp;Applied </> : 'Unknown'}</Typography></TableCell>
            <TableCell align='left'>
                <Typography color="textSecondary" variant="body2">{created_at && moment(created_at).format("MMM D , YYYY")  }</Typography>
                {/* <Typography color="textSecondary" variant="body2">{expired_at && moment(expired_at).format("MMM Do YY")}</Typography> */}
            </TableCell>
            <TableCell align="left">

                <Typography color={status == 'active' ? 'primary' : 'secondary'} variant="body2">{status ? capitalizeFirstLetter (status) : null}</Typography>
            </TableCell>
            <TableCell align="left" >
                <Box display="flex" flexWrap="nowrap">
                    <Jh_Tooltip link={'/job/'+id} title="View Job" laIcon={SvgEye} />
                    <Jh_Tooltip title="Edit" laIcon={SvgPencilAltSolid} />
                    <Jh_Tooltip title="Delete"  callback={()=>setOpen(true)} laIcon={SvgTrashAlt} />
                </Box>

            </TableCell>
        </TableRow>
        <DeleteJobDialoge open ={open} setOpen={setOpen} id={id} refreshCallback={refreshCallback}/>
        </>
    )
}
