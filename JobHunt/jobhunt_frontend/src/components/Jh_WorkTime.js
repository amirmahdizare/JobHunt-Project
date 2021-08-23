import { Button } from '@material-ui/core'
import React from 'react'

export const Jh_WorkTime = (props) => {
    const makeWorkTimestatus = () => {
        switch (props.workTime) {
            case 'FULL TIME':
                return { color: '#8b91dd', borderColor: '#8b91dd' , borderRadius:'24px' }
            case 'PART TIME':
                return { color: '#7dc246', borderColor: '#7dc246' ,borderRadius:'24px' }
            case 'FREELANCE':
                return { color: '#fb236a', borderColor: '#fb236a' ,borderRadius:'24px' }
            case 'TEMPORARY':
                return { color: '#7dc246', borderColor: '#7dc246' ,borderRadius:'24px'  }
            default:
                return;
        }
    }
    return (
        <>
            <Button  style={makeWorkTimestatus()}  variant="outlined">{props.workTime} </Button>
        </>
    )
}
