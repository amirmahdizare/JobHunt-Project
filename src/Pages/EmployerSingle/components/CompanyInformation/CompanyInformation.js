import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { LineAwesome, SvgBarsSolid, SvgClock, SvgEye, SvgFileAlt, SvgMap, SvgUser, SvgUsersSolid } from 'react-line-awesome-svg'
import { InfoItem } from './components/InfoItem'
const useClasses = makeStyles(theme => ({
    infoBox: {
        border: '2px solid #e2e2e2',
        borderRadius: theme.spacing(1),
        margin: theme.spacing(1),
        padding: theme.spacing(2)
    }
}))
const info = [
    { icon: <LineAwesome icon={SvgEye} />, title: 'Viewed', description: '164' },
    { icon: <LineAwesome icon={SvgFileAlt} />, title: 'Posted Jobs', description: '4' },
    { icon: <LineAwesome icon={SvgMap} />, title: 'Locations', description: 'United States, San Diego' },
    { icon: <LineAwesome icon={SvgBarsSolid} />, title: 'Categories', description: 'Arts, Design, Media' },
    { icon: <LineAwesome icon={SvgClock} />, title: 'Since', description: '2002' },
    { icon: <LineAwesome icon={SvgUsersSolid} />, title: 'Team Size', description: '15' },
    { icon: <LineAwesome icon={SvgUser} />, title: 'Followers', description: '15' },

]
export const CompanyInformation = () => {
    const classes = useClasses()
    return (
        <Grid item xs={12} md={4}>
            <Typography variant="h6">&nbsp;Company Information</Typography>
            <Box className={classes.infoBox}>
                {info.map((info) => (
                    <InfoItem icon={info.icon} title={info.title} description={info.description} />
                ))}

            </Box>

        </Grid>
    )
}
