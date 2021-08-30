import { Button } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'
const useClasses=makeStyles(theme=>({
    root:{
        padding:theme.spacing(0.75),
        margin:theme.spacing(0.40),
        minWidth:'unset'
    }
    ,
    outlinedPrimary:{
        borderColor:theme.palette.primary.light,
        color:theme.palette.primary.light,
        '&:hover':{
        backgroundColor:theme.palette.primary.light,
        borderColor:theme.palette.primary.light,

        color:'white'
        }
    },
    containedPrimary:{
        backgroundColor:theme.palette.primary.light,
        border:'1px solid transparent',
        '&:hover':{
        backgroundColor:theme.palette.primary.light,

        }
    }
}))
export const Letter = (props) => {
    const classes=useClasses()
    return (
        <Button classes={{root:classes.root,outlinedPrimary:classes.outlinedPrimary,containedPrimary:classes.containedPrimary}} {...props}>
            {props.children}
        </Button>
    )
}
