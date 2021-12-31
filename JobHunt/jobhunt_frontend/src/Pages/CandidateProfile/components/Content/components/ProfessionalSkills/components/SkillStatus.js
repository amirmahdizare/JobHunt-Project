import { Box, Grid, LinearProgress, Typography, makeStyles, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { SvgPencilAltSolid, SvgTrashAlt } from 'react-line-awesome-svg'
import { Jh_Tooltip } from '../../../../../../../components/Jh_Tooltip'
const useClasses = makeStyles({
    root: {
        overflow: 'visible'
    },
    colorSecondary: {
        backgroundColor: '#e2e2e2',
        borderRadius: '5px',
        height: '6px',
    },
    barColorSecondary: {
        borderRadius: '5px',
        transform: 'unset !important',
        width: (props) => (`${props.skillPercent}%`),
        '&:before': {
            bottom: '10px',
            color: 'black',
            content: (props) => (`"${props.skillPercent}%"`),
            display: 'block',
            fontSize: '15px',
            right: '0',
            position: 'absolute',
        }
    }
})
export const SkillStatus = (props) => {
    const classes = useClasses(props)
    return (
        <Box p={2} >
            <Typography >{props.skill}</Typography>
            <Grid container alignItems="center" spacing={2} >
                <Grid item xs={9} sm={10}>
                    <LinearProgress classes={{ root: classes.root, colorSecondary: classes.colorSecondary, barColorSecondary: classes.barColorSecondary }} variant="determinate" value={props.skillPercent} color="secondary" />
                </Grid>
                <Grid item xs={3} sm={2} >
                    <Box display="flex" justifyContent="flex-end"  >
                        <Jh_Tooltip laIcon={SvgPencilAltSolid} title="Edit" callback={undefined} />
                        <Jh_Tooltip laIcon={SvgTrashAlt} title="Delete" callback={undefined} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
