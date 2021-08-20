import { Box, Paper, Typography, Tooltip, IconButton, makeStyles, Grid } from '@material-ui/core'
import React from 'react'
import { LineAwesome, SvgGraduationCapSolid, SvgPencilAltSolid, SvgTrashAlt } from 'react-line-awesome-svg'
import { Jh_Tooltip } from '../../../../../../../components/Jh_Tooltip'
const useClasses = makeStyles(theme => ({
    field: {
        [theme.breakpoints.up('sm')]: {
            display: 'inline'
        },
    }
}))
export const EducationDegree = (props) => {
    const classes = useClasses()
    return (
        <Box p={2} display="flex" flex="1" >
            {/* Logo */}
            <LineAwesome fill="#f50057" fontSize="70px" icon={SvgGraduationCapSolid} />
            <Box paddingX={2} width="100%" position="relative">
                <Grid container>
                    <Grid item xs={11}>
                        {/* Info */}
                        <Typography color="primary" variant="h6" gutterBottom>{props.grade}</Typography>
                        <Typography color="textSecondary" variant="body2" gutterBottom>{props.duration}</Typography>
                        <Typography variant="h6" display="inline" gutterBottom>{props.institution}&nbsp;&nbsp;&nbsp;</Typography>
                        <Typography variant="body1" className={classes.field} color="textSecondary" gutterBottom>{props.field}</Typography>
                        <Typography variant="subtitle2" color="textSecondary" gutterBottom>{props.description}</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        {/* Tooltip */}
                        <Box display='flex' justifyContent="center"  >
                            <Jh_Tooltip laIcon={SvgPencilAltSolid} title="Edit" callback={undefined} />
                            <Jh_Tooltip laIcon={SvgTrashAlt} title="Delete" callback={undefined} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>

        </Box>
    )
}
