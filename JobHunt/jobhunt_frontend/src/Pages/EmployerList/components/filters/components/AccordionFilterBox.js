import React, { useEffect } from 'react'
import { useState } from 'react'
import {
    Accordion, AccordionDetails, AccordionSummary,
    Checkbox, FormControlLabel, FormGroup,
    IconButton, makeStyles, Typography
} from '@material-ui/core'
import { Jh_Card } from '../../../../../components/Jh_Card'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
const useStyles = makeStyles(theme => ({
    root: {
        flex: '1'
    },

    summary: {
        padding: 0
    }
    ,
    expandIcon: {
        paddingTop: '0',
        paddingBottom: '0'
    }
}))
export const AccordionFilterBox = (props) => {
    const classes = useStyles()
    let initialState = {}
    if (props.items) {
        props.items.forEach((item) => {
            initialState[item.id] = false
        })
    }

    const [state, setState] = useState(initialState);
    const [expand, setExpand] = useState(true)
    const { handleFilter } = props
    const handleChange = (obj) => {
        setState({ ...state, ...obj });
    };
    useEffect(() => {
        const filters = []
        for (const key in state) {
           if (state[key] )  filters.push(key) 
        }
        handleFilter(filters)
        return () => {
            // cleanup
        }
    }, [state])
    return (
        <Jh_Card >
            <Accordion square expanded={expand} elevation={0} classes={{ root: classes.root }}  >
                <AccordionSummary
                    expandIcon={<IconButton style={{padding:'0'}}  >{expand ? <RemoveIcon /> : <AddIcon />}</IconButton>}
                    aria-controls={`${props.title} Filter`}
                    id={`${props.title} Filter`}
                    classes={{ root: classes.summary, expandIcon: classes.expandIcon }}
                    onClick={() => setExpand(!expand)}
                >
                    <Typography  >{props.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup >
                        {props.items ? props.items.map(item => (<FormControlLabel
                            key={item.id}
                            control={<Checkbox checked={state[item.id]} onChange={() => handleChange({ [item.id]: !state[item.id] })} id={item.id} color="primary" />}
                            label={<Typography variant="body2">{item.title}&nbsp;{item.number ? <>&nbsp;({item.number})</> : undefined}</Typography>}
                        />)) : <Typography>No Item Found!</Typography>}

                    </FormGroup>
                </AccordionDetails>
            </Accordion>

        </Jh_Card>
    )
}
