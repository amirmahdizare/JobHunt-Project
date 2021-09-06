import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useState } from 'react';
export const Question = (props) => {
    const {question,answer} = props
    const [expand,setExpand]=useState(false)
    return (
        <Accordion expanded={expand} elevation={0}>
        <AccordionSummary
          expandIcon={expand ? <RemoveIcon /> : <AddIcon/>}
          aria-controls={`Question is ${question}`}
          id={`Question is ${question}`}
          onClick={()=>setExpand(!expand)}
        >
          <Typography variant="h6">{question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" color="textSecondary">
            {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    )
}
