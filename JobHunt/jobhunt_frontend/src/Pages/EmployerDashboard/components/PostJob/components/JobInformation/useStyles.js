import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme=> ({
    container: {
        '& .placeholder':{
            color:theme.palette.text.disabled
        },
        '& .MuiInputBase-root':{
            color:'inherit'
        },
        boxSizing:'border-box',
        '& .ql-toolbar': {
            borderTopLeftRadius: '4px',
            borderTopRightRadius: '4px'
        },
        '& .ql-container': {
            borderBottomRightRadius: '4px',
            borderBottomLeftRadius: '4px'
        },
    },
    quill: {
        borderRadius: '4px',
        marginTop: '8px',
        marginBottom: '8px',
        width: '100%'
    }
}))
export {useStyles}