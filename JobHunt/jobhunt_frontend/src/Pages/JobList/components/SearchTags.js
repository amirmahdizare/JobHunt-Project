import React  from 'react'
import { Box, Button, Chip, makeStyles, Typography } from '@material-ui/core'
import { Jh_Card } from '../../../components/Jh_Card'
// import SaveAltIcon from '@material-ui/icons/SaveAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { removeFilter, clearFilters } from '../../../Store/Actions/jobAction'

const useStyles = makeStyles(theme => ({
    deleteIcon: {
        color: theme.palette.secondary.main,
        '&:hover': {
            color: theme.palette.secondary.light,
        }
    },
    chip: {
        fontSize: theme.typography.body2.fontSize,
        margin: theme.spacing(1),
        padding: theme.spacing(1)
    },
}));

const SearchTags = ({ JobReducer, removeFilter, clearFilters }) => {
    const classes = useStyles()

    return (
        <Jh_Card style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
                {JobReducer.allFilters.length !== 0 ? JobReducer.allFilters.map((tag) => (
                    <Chip
                        classes={{ root: classes.chip, deleteIcon: classes.deleteIcon }}
                        size="medium"
                        label={tag?.value}
                        onDelete={() => removeFilter(tag)}
                    />
                ))
                    : <Typography>No Tags Selected</Typography>}
            </Box>
            <Box>
                {/* <Button startIcon={<SaveAltIcon />} color="primary">Save</Button> */}
                <Button startIcon={<DeleteIcon />} onClick={clearFilters} color="primary">Clean</Button>
            </Box>
        </Jh_Card>
    )
}

const mapStateToProps = state => {
    return {
        JobReducer: state.JobReducer
    };
};
export default connect(mapStateToProps, { removeFilter, clearFilters })(SearchTags);