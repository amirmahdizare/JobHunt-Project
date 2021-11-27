import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    container: {
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
})
export {useStyles}