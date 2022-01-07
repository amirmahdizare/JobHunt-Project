import React from 'react'
import { useState } from 'react'
import {
    Accordion, AccordionDetails, AccordionSummary,
    Box,
    Checkbox, FormControlLabel, FormGroup,
    IconButton, makeStyles, TextField, Typography
} from '@material-ui/core'
import { Jh_Card } from './Jh_Card'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { connect } from 'react-redux';
import { setFilter, searchInFiltersList } from '../Store/Actions/jobAction'

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
const Jh_AccordionFilterBox = (props) => {
    const classes = useStyles(props)
    let initialState = {}
    if (props.items)
        props.items.forEach((item) => {
            initialState[item?.name] = false
        })
    const [state, setState] = useState(initialState);
    const [expand, setExpand] = useState(true)

    const handleChange = (event) => {
        props.setFilter(props?.filterProp, event.target.name)
    };
    return (
        <Jh_Card  >
            <Accordion square expanded={expand} elevation={0} classes={{ root: classes.root }}  >
                <AccordionSummary
                    expandIcon={<IconButton onClick={() => setExpand(!expand)} >{expand ? <RemoveIcon /> : <AddIcon />}</IconButton>}
                    aria-controls={`${props.title} Filter`}
                    id={`${props.title} Filter`}
                    classes={{ root: classes.summary, expandIcon: classes.expandIcon }}
                >
                    <Typography  >{props.title}</Typography>
                </AccordionSummary>
                <AccordionDetails style={{ display: 'flex', flexDirection: 'column' }}>
                    <Box display={props.variant == 'withSearch' ? 'block' : 'none'} >
                        <TextField
                            variant="outlined"
                            fullWidth
                            onChange={(e) => props.searchInFiltersList(`${props.filterProp}List`, e.target.value)}
                            label={`Search ${props.title}`} />
                    </Box>
                    <FormGroup style={props.variant == 'withSearch' ? { height: '200px', overflow: 'auto', display: 'flex', flexWrap: 'noWrap' } : null}>
                        {props.items ? props.items.map(item => (<FormControlLabel
                            style={{ color: item.color }}
                            control={<Checkbox checked={props.JobReducer[props?.filterProp].findIndex(m => m == item?.name) !== -1} style={{ color: item.color }} onChange={handleChange} name={item?.name} color="primary" />}
                            label={<Typography color="textPrimary" variant="body2">{item?.name}&nbsp;{item.number ? <>({item.number})</> : undefined}</Typography>}
                        />)) : <Typography>No Item Found!</Typography>}

                    </FormGroup>
                </AccordionDetails>
            </Accordion>

        </Jh_Card>
    )
}

const mapStateToProps = state => {
    return {
        JobReducer: state.JobReducer
    };
};
export default connect(mapStateToProps, { setFilter, searchInFiltersList })(Jh_AccordionFilterBox);
