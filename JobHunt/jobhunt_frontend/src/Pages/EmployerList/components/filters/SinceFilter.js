import { Accordion, AccordionDetails, AccordionSummary, Box, IconButton, makeStyles, Slider, Typography, withStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { Jh_Card } from '../../../../components/Jh_Card'
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
    },
    markLabel:{
        marginTop:'0.3em'
    }

}))
const AirbnbSlider = withStyles({
    root: {
        height: 3,
        padding: '13px 0',
    },
    thumb: {
        height: 20,
        width: 20,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        bottom: '3px',
        boxShadow: '#ebebeb 0 2px 2px',
        '&:focus, &:hover, &$active': {
            boxShadow: '#ccc 0 2px 3px 1px',
        },
        '& .bar': {
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    active: {},
    track: {
        height: 5,
    },
    rail: {
        color: '#d8d8d8',
        opacity: 1,
        height: 5,
    },
})(Slider);


export const SinceFilter = (props) => {
    const classes = useStyles()
    const [range, setRange] = useState({
        min: props.min,
        max: props.max
    })
    const [expand,setExpand] =useState(true)

    const handleSliderChange = (event, range) => {
        setRange({ min: range[0], max: range[1] })

    }
    console.log(range)
    return (
        <Jh_Card>
            <Accordion defaultExpanded elevation={0} classes={{ root: classes.root }}>
                <AccordionSummary
                    expandIcon={<IconButton onClick={() => setExpand(!expand)} >{expand ? <RemoveIcon /> : <AddIcon/>}</IconButton>}
                    aria-controls="Since Filter"
                    id="Since Filter"
                    classes={{ root: classes.summary, expandIcon: classes.expandIcon }}
                >
                    <Typography  >Since</Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <AirbnbSlider
                        color="secondary"
                        classes={{markLabel:classes.markLabel}}
                        defaultValue={[props.min, props.max]}
                        onChange={handleSliderChange}
                        min={props.min}
                        max={props.max}
                        marks={[{ value: props.min, label: range.min }, { value: props.max, label: range.max }]}
                    />
                </AccordionDetails>
            </Accordion>

        </Jh_Card>
    )
}
