import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { LineAwesome, SvgBarsSolid, SvgClock, SvgEye, SvgFileAlt, SvgMap, SvgUser, SvgUsersSolid } from 'react-line-awesome-svg'
import { InfoItem } from './components/InfoItem'
const useClasses = makeStyles(theme => ({
    infoBox: {
        border: '2px solid #e2e2e2',
        borderRadius: theme.spacing(1),
        marginTop: theme.spacing(2),
        marginBottom:theme.spacing(2),
        padding: theme.spacing(2)
    }
}))
export const Jh_Overview = (props) => {
    const {items,title}= props
    const classes = useClasses()
    return (
        <Grid item xs={12} >
            <Typography variant="h6">{title}</Typography>
            <Box className={classes.infoBox}>
                {items ? items.map((info) => (
                    <InfoItem icon={info.icon} title={info.title} description={info.description} />
                )): null}

            </Box>

        </Grid>
    )
}
