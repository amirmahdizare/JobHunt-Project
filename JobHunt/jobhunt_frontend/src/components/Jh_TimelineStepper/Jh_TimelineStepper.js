import React from 'react'
import { Box , makeStyles  } from '@material-ui/core'
import { Jh_TimelineStepperItem } from './Jh_TimelineStepperItem'
const useClasses=makeStyles(theme=>({
    root:{
        '& .Jh_TimelineStepperItem:not(:last-child):before':{
            position:'absolute',
            left:'27px',
            backgroundColor:theme.palette.primary.main,
            content:'""',
            width:'2px',
            height:'100%',
            zIndex:-1,
            overflow:'hidden'
        }
    }
}))
export const Jh_TimeLineStepper = (props) => {
    const classes=useClasses()
    return (
        <Box className={classes.root} >
            {props.items.map((item)=>(
                <Jh_TimelineStepperItem 
                title={item.title}
                secondTitle={item.secondTitle}
                duration={item.duration}
                description={item.description}/>
            ))}
            
        </Box>
    )
}
