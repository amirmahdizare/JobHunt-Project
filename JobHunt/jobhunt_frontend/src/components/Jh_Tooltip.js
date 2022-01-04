import { IconButton, Tooltip, makeStyles, Link } from '@material-ui/core'
import React from 'react'
import { LineAwesome } from 'react-line-awesome-svg'
const useClasses = makeStyles(theme => ({
    tooltip: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: theme.spacing(1),
        fontSize: theme.typography.caption.fontSize,
        paddingLeft: '20px',
        paddingRight: '20px',
        display: 'block'
    },
    icon: {
        fill: theme.palette.primary.main,
        color: theme.palette.primary.main,
        fontSize: (fontSize) => (fontSize ? fontSize : '20px')
    }
}))
export const Jh_Tooltip = ({link,title,MuiIcon,laIcon,fontSize,callback}) => {
    const classes = useClasses(fontSize)
    return (
        <Link href={link} target={link ? '_blank' : null }>
            <Tooltip title={title}  placement="top" classes={{ tooltip: classes.tooltip }}>
                <IconButton classes={{ label: classes.icon }} onClick={callback} aria-label={title}>
                    {MuiIcon}
                    <LineAwesome icon={laIcon} />
                </IconButton>
            </Tooltip>
        </Link>
    )
}
