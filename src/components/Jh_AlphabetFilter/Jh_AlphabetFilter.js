import { Box, Button, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import {Jh_Button} from '../Jh_Button'
import { Letter } from './components/Letter'
const useClasses=makeStyles(theme=>({
    root:{
        backgroundColor:'#f4f5fa',
        display:'flex',
        flexWrap:'wrap',
        borderRadius:theme.spacing(0.5)
    },
    button:{
    }
}))
const alphabet=['All','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
export const Jh_AlphabetFilter = () => {
    const [selected,setSelected]=useState('All')
    const classes=useClasses()
    return (
        <Box className={classes.root}  py={2} px={1}>
            {alphabet.map((letter)=>(
                <Letter color="primary" onClick={() => setSelected(letter)} variant={selected==letter ? 'contained' : 'outlined'}  value={letter}><Typography variant="caption">{letter}</Typography></Letter>
            ))}
            
        </Box>
    )
}
