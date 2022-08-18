import { IconButton, Tooltip,makeStyles } from '@material-ui/core'
import React from 'react'
import { LineAwesome } from 'react-line-awesome-svg'
const useClasses = makeStyles(theme => ({
    tooltip: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: theme.spacing(1),
        fontSize: theme.typography.caption.fontSize,
        paddingLeft: '20px',
        paddingRight: '20px',
        display:'block'
    },
    icon:{
        fill: theme.palette.primary.main,
        color:theme.palette.primary.main,
        fontSize: (props) => (props.fontSize ? props.fontSize :  '20px')
    }
}))
export const Jh_Tooltip = (props) => {
    const classes=useClasses(props)
    return (
        <Tooltip title={props.title} placement="top" classes={{ tooltip: classes.tooltip }}>
            <IconButton classes={{label:classes.icon}} onClick={props.callback} aria-label={props.title}>
                {props.MuiIcon}
                <LineAwesome icon={props.laIcon} />
            </IconButton>
        </Tooltip>
    )
}
