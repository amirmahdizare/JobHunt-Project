import { Box, Grid } from '@material-ui/core'
import React from 'react'
import { Paper, Typography, Tooltip, IconButton, makeStyles } from '@material-ui/core'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { LineAwesome, SvgGraduationCapSolid, SvgPencilAltSolid, SvgTrashAlt } from 'react-line-awesome-svg'
import { Jh_Tooltip } from '../Jh_Tooltip';
const useClasses = makeStyles(theme => ({
    secondTitle:{
        [theme.breakpoints.up('sm')]:{
            display:'inline'
        },
    }
}))
export const Jh_TimelineStepperItem = (props) => {
    const classes = useClasses()
    return (
        <Box p={2} className="Jh_TimelineStepperItem" display="flex" flex="1" position="relative" >
           
            {/* Logo */}
            <RadioButtonUncheckedIcon style={{ backgroundColor:'white' }} color="primary" />
                   <Box width="100%" paddingX={2} position="relative">
            <Grid container>
               <Grid item xs={11}>
                {/* Info */}
                <Typography color="primary" display="inline" variant="h6" gutterBottom>{props.title}&nbsp;&nbsp;&nbsp;</Typography>
                <Typography color="textSecondary" className={classes.secondTitle}  variant="body1" gutterBottom>{props.secondTitle}</Typography>
                <Typography color="textSecondary" variant="body1" gutterBottom>{props.duration}</Typography>
                <Typography variant="subtitle2" color="textSecondary">{props.description}</Typography>
                </Grid>
                <Grid item xs={1}>
                {/* Tooltip */}
                <Box display="flex" justifyContent="center" >
                    <Jh_Tooltip laIcon={SvgPencilAltSolid} title="Edit" callback={undefined} />
                    <Jh_Tooltip laIcon={SvgTrashAlt} title="Delete" callback={undefined} />
                </Box>
                </Grid >
            </Grid>
            </Box>
        </Box>
    )
}