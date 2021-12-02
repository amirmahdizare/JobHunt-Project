import React from 'react'
import { useCategories, useJobWorktimes } from '../../../../../../hooks/index.js'
import { useStyles } from './useStyles.js'

import { Box, CircularProgress, Grid, MenuItem, TextField, Typography } from '@material-ui/core'
import { capitalizeFirstLetter } from '../../../../../../utils'
import ReactQuill from 'react-quill'

export const JobInformation = (props) => {

    const categories = useCategories()
    const worktimes = useJobWorktimes()

    const { info, handleChange } = props
    const classes = useStyles()

    return (
        <Box boxSizing="border-box">
            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={12} md={6} key="SSS">
                    <Typography variant="body2" gutterBottom>Title</Typography>
                    <TextField
                        key="title"
                        variant="outlined"
                        value={info.title}
                        onChange={(e) => handleChange({ ['title']: e.target.value })}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body2" gutterBottom>Category</Typography>
                    <TextField
                        select
                        value={info.category_id}
                        onChange={(e) => handleChange({ category_id: e.target.value })}
                        variant="outlined"
                        fullWidth
                    // error={!!error['category_id']}
                    // helperText={errorTextGenerator('category_id')}
                    >
                        {categories?.length ? categories.map((option) => (
                            <MenuItem key={option.title} value={option.id}>
                                {option.title}
                            </MenuItem>
                        ))
                            : <CircularProgress />}
                    </TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body2" gutterBottom>WorkTime</Typography>
                    <TextField
                        select
                        value={info.cooperation_kind_id}
                        onChange={(e) => handleChange({ cooperation_kind_id: e.target.value })}
                        variant="outlined"
                        fullWidth
                    // error={!!error['cooperation_kind_id']}
                    // helperText={errorTextGenerator('cooperation_kind_id')}
                    >
                        {worktimes?.length
                            ? worktimes.map((option) => (
                                <MenuItem key={option.cooperation_kind_id} value={option.cooperation_kind_id}>
                                    {capitalizeFirstLetter(option.title)}
                                </MenuItem>
                            )) : <CircularProgress />}

                    </TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography color="textSecondary" variant="body2" gutterBottom>Work Exprience</Typography>
                    <TextField
                        disabled
                        variant="outlined"
                        value={info.experience}
                        onChange={(e) => handleChange({ experience: e.target.value })}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" gutterBottom>Description</Typography>
                    <ReactQuill
                        className={classes.quill}
                        theme="snow"
                        placeholder="Enter Job Description"
                        value={info.description}
                        onChange={c => handleChange({ description: c })}
                    />
                    {/* {!!errorTextGenerator('description') && <Typography color="secondary" variant="subtitle2">&nbsp;{errorTextGenerator('description')}</Typography>} */}

                </Grid>
            </Grid>
        </Box>
    )
}
