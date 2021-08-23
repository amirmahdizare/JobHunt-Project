import { Button, createTheme, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
const makeColor = (props)=> {
    const theme=createTheme()
            switch (props.color) {
                case 'primary':
                   return theme.palette.primary.main
                case 'secondary':
                    return theme.palette.secondary.main
                case 'primaryLight':
                    return theme.palette.primary.light
                case 'warning':
                    return theme.palette.warning.main
                case 'success':
                    return theme.palette.success.main

                default:
                    break;
            }
        }
const useClasses = makeStyles((theme) => ({
    outlined: {
        borderColor:(props)=> makeColor(props) ,
        borderRadius:theme.spacing(1),
        borderWidth: '2px',
        borderStyle: 'solid',
        color:(props)=> makeColor(props) ,
        fill:(props)=> makeColor(props),
        fontSize:theme.typography.h6.fontSize,
        margin:theme.spacing(0.5),
        minWidth:'unset',
        transition:'all 0.6s ease',
        textTransform:'none',
        width:(props) => (props.width ? props.width : '100%'),
        '&:hover':{
            backgroundColor:(props) => makeColor(props),
            color:'white',
            fill:'white'
        }
    },
    contained:{
        backgroundColor:(props)=> makeColor(props),
        borderColor:(props)=> makeColor(props) ,
        borderRadius:theme.spacing(1),
        borderStyle: 'solid',
        borderWidth: '2px',
        color:'white' ,
        fill:'white',
        fontSize:theme.typography.h6.fontSize,
        minWidth:'unset',
        margin:theme.spacing(0.5),
        transition:'all 0.6s ease',
        textTransform:'none',
        width:(props) => (props.width ? props.width : '100%'),
        '&:hover':{
            backgroundColor:'white',
            color:(props) => makeColor(props),
            fill:(props) => makeColor(props),
        }
    }
}))
export const Jh_Button= (props) => {
    const classes = useClasses(props,createTheme())
    console.log(createTheme())
    return (
        <Button href={props.href} classes={{ root:  props.variant == 'contained' ? classes.contained : classes.outlined }}>
            {props.icon} 
            {props.text ? <Typography>&nbsp;&nbsp;{props.text}</Typography> : null}
        </Button>
    )
}
