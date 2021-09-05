import { Box, Typography ,makeStyles} from '@material-ui/core'
import React from 'react'
import { LineAwesome } from 'react-line-awesome-svg'
const useStyles = makeStyles(theme=>({
    icon:{
        fill:theme.palette.text.secondary,
        fontSize:theme.typography.h1.fontSize,
        marginRight:theme.spacing(2),
        verticalAlign:'middle',
    }
}))
export const ContactItem = (props) => {
    const classes=useStyles()
    const { iconName, detail } = props
    return (
        <Box my={3} display="flex" alignItems="center">
            <LineAwesome className={classes.icon} icon={iconName} />
            <Typography color="textSecondary">{detail}</Typography>
        </Box>
    )
}
