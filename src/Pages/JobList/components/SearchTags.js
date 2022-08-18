import React, { useState } from 'react'
import { Box, Button, Chip,makeStyles, Typography } from '@material-ui/core'
import { Jh_Card } from '../../../components/Jh_Card'
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles=makeStyles(theme=>({
    deleteIcon:{
        color:theme.palette.secondary.main,
        '&:hover':{
            color:theme.palette.secondary.light,
        }
    },
    chip:{
        fontSize:theme.typography.body2.fontSize,
        margin:theme.spacing(1),
        padding:theme.spacing(1)
    },
}))
export const SearchTags = () => {
    const classes=useStyles()
    const [tags,setTags]  = useState([
        "FullTime",'UI/Ux Designer','Istanbul'
    ])
    const handleDelete =(targetTag) =>{
        setTags(tags.filter(tag => tag!=targetTag))
    }
    return (
        <Jh_Card style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Box>
                {tags.length!=0 ? tags.map((tag)=>(
                <Chip
                classes={{root:classes.chip,deleteIcon:classes.deleteIcon}}
                    size="medium"
                    label={tag}
                    onDelete={() => handleDelete(tag)}  
                />
                )): <Typography>No Tags Selected</Typography>}
            </Box>
            <Box>
                    <Button startIcon={<SaveAltIcon/>} color="primary">Save</Button>
                    <Button startIcon={<DeleteIcon/>} color="primary">Clean</Button>
            </Box>
        </Jh_Card>
    )
}
