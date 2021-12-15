import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useState } from 'react';
export const Term = (props) => {
    const { title, description } = props
    const [expand, setExpand] = useState(false)
    return (
        <Accordion expanded={expand} elevation={0}>
            <AccordionSummary
                expandIcon={expand ? <RemoveIcon /> : <AddIcon />}
                aria-controls={`tem is ${title}`}
                id={`term is ${title}`}
                onClick={() => setExpand(!expand)}
            >
                <Typography variant="h6">{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body2" color="textSecondary">
                    {description}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}
