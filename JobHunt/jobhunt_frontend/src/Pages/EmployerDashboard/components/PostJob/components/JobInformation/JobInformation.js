import React from 'react'

import { useCategories, useJobWorktimes } from '../../../../../../hooks/index.js'
import { useStyles } from './useStyles.js'
import { useCurrencies } from '../../../../../../hooks/useCurrencies.js'

import { Box, Button, CircularProgress, Grid, MenuItem, TextField, Typography } from '@material-ui/core'
import { capitalizeFirstLetter } from '../../../../../../utils'
import ReactQuill from 'react-quill'
import { PostJobStatus } from './PostJobStatus.js'
import { useChinaCities } from '../../../../../../hooks/useChinaCities.js'
import { useChinaStates } from '../../../../../../hooks/useChinaStates.js'
import { useStateCities } from '../../../../../../hooks/useStateCities.js'
import { useCarearLevel } from '../../../../../../hooks/useCarearLevel.js'
import { useQualification } from '../../../../../../hooks/useQualification.js'
import { useSalaryTypes } from '../../../../../../hooks/useSalaryTypes.js'
import { useIndustryJobs } from '../../../../../../hooks/useIndustryJobs.js'

export const JobInformation = (props) => {

    const [categories] = useCategories()
    const worktimes = useJobWorktimes()
    const currencies = useCurrencies()
    const { info, handleChange, postJob, postJobStatus, mode } = props
    const [states, states_error, states_loading] = useChinaStates()
    const [cities, cities_error, cities_loading] = useStateCities(info.state_id)
    const salaryTypes = useSalaryTypes()
    const qualification = useQualification()
    const carearLevel = useCarearLevel()
    const classes = useStyles()
    const industryJobs = useIndustryJobs()

    const errorGenerator = (field, realFieldName) => {
        return {
            error: postJobStatus.status == 'error' && postJobStatus.detail?.[field]
                ? true
                : false,
            helperText: postJobStatus?.detail?.[field]
                ? realFieldName && 'The ' + capitalizeFirstLetter(realFieldName) + " is required" || capitalizeFirstLetter(postJobStatus?.detail?.[field]?.[0])
                : null
        }
    }

    const classnameGenerator = (field) => {
        if (field?.split('.').length == 2)
            return { className: !info?.[field.split('.')[0]][field.split('.')[1]] ? "placeholder" : null }
        return { className: !info?.[field] ? "placeholder" : null }
    }

    return (
        <Box m={2} boxSizing="border-box">

            <Grid container spacing={3} className={classes.container}>
                {postJobStatus.status != 'success' && <>
                    <Grid item xs={12} md={12} >
                        <Typography variant="body2" gutterBottom>Title</Typography>
                        <TextField
                            key="title"
                            variant="outlined"
                            placeholder='Ex : Backend Developer'
                            value={info.title}
                            onChange={(e) => handleChange({ ['title']: e.target.value })}
                            fullWidth
                            {...errorGenerator('title', 'title')}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography variant="body2" gutterBottom>Category</Typography>
                        <TextField
                            select
                            value={info.category_id || "unset"}
                            onChange={(e) => handleChange({ category_id: e.target.value })}
                            variant="outlined"
                            fullWidth
                            {...classnameGenerator('category_id')}
                            {...errorGenerator('category_id', 'category')}
                        >
                            <MenuItem value="unset" disabled  >
                                Select Category
                            </MenuItem>

                            {categories ? categories.map((option) => (
                                <MenuItem key={option.title} value={option.id}>
                                    {option.title}
                                </MenuItem>
                            ))
                                : <CircularProgress />}
                        </TextField>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography variant="body2" gutterBottom>Cooperation Kind</Typography>
                        <TextField
                            select
                            value={info.cooperation_kind_id || "unset"}
                            onChange={(e) => handleChange({ cooperation_kind_id: e.target.value })}
                            variant="outlined"
                            fullWidth
                            {...classnameGenerator('cooperation_kind_id')}
                            {...errorGenerator('cooperation_kind_id', 'Cooperation Kind')}
                        >
                            <MenuItem value="unset" disabled className='placeholder'>Select Cooperation Kind</MenuItem>

                            {worktimes
                                ? worktimes.map((option) => (
                                    <MenuItem key={option.cooperation_kind_id} value={option.cooperation_kind_id}>
                                        {capitalizeFirstLetter(option.title)}
                                    </MenuItem>
                                )) : <CircularProgress />}

                        </TextField>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography variant="body2" gutterBottom>Career Job</Typography>
                        <TextField
                            select
                            variant="outlined"
                            value={info.career_job || "unset"}
                            onChange={(e) => handleChange({ career_job: e.target.value })}
                            fullWidth
                            {...classnameGenerator('career_job')}
                            {...errorGenerator('career_job', 'Career Job')}
                        >
                            <MenuItem value="unset" disabled className='placeholder'>Select Carear Level</MenuItem>

                            {carearLevel && carearLevel.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography variant="body2" gutterBottom>Industry Job</Typography>
                        <TextField
                            variant="outlined"
                            value={info.industry_job || 'unset'}
                            placeholder='Ex : Management'
                            onChange={(e) => handleChange({ industry_job: e.target.value })}
                            fullWidth
                            select
                            {...errorGenerator('industry_job', 'Industry Job')}
                            {...classnameGenerator('industry_job')}
                        >
                            <MenuItem value="unset" disabled className='placeholder'>Select Industry Job</MenuItem>
                            {industryJobs && industryJobs.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="body2" gutterBottom>Qualification</Typography>
                        <TextField
                            select
                            variant="outlined"
                            value={info.qualification || "unset"}
                            onChange={(e) => handleChange({ qualification: e.target.value })}
                            fullWidth
                            {...classnameGenerator('qualification')}
                            {...errorGenerator('qualification', 'Qualification')}
                        >
                            <MenuItem value="unset" disabled className='placeholder'>Select Qualification</MenuItem>
                            {qualification && qualification.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography variant="body2" gutterBottom>  Min Work Experience</Typography>
                        <TextField
                            inputProps={{ min: 0 }}
                            placeholder='Ex : 2'
                            type={'number'}
                            variant="outlined"
                            value={info.min_work_experience}
                            onChange={(e) => handleChange({ min_work_experience: e.target.value })}
                            fullWidth
                            {...errorGenerator('min_work_experience', 'Min Work Experience')}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="body2" gutterBottom>  Salary</Typography>
                        <TextField
                            inputProps={{ min: 0 }}
                            type={'number'}
                            variant="outlined"
                            placeholder='Ex : 25000'
                            value={info.salary?.amount}
                            onChange={(e) => handleChange({ salary: { ...info.salary, amount: e.target.value } }, 'salary.amount')}
                            fullWidth
                            {...errorGenerator('salary.amount', 'Salary')}
                        />
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant="body2" gutterBottom>  Currency</Typography>
                        <TextField
                            id="outlined-select-currency"
                            select
                            fullWidth
                            placeholder='Select Currency'
                            value={info.salary?.currency || "unset"}
                            onChange={(e) => handleChange({ salary: { ...info.salary, currency: e.target.value } }, 'salary.currency')}
                            variant="outlined"
                            {...classnameGenerator('salary.currency')}
                            {...errorGenerator('salary.currency', 'Salary Currency')}
                        >
                            <MenuItem value="unset" disabled className='placeholder'>Select Currency</MenuItem>

                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}&nbsp;({option.value.toUpperCase()})
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant="body2" gutterBottom>  Type</Typography>
                        <TextField
                            select
                            fullWidth
                            value={info.salary?.type || 'unset'}
                            onChange={(e) => handleChange({ salary: { ...info.salary, type: e.target.value } }, 'salary.type')}
                            variant="outlined"
                            {...classnameGenerator('salary.type')}
                            {...errorGenerator('salary.type', 'Salary Type')}
                        >
                            <MenuItem value="unset" disabled className='placeholder'>Select Types</MenuItem>
                            {salaryTypes && salaryTypes.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option && capitalizeFirstLetter(option)}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="body2" gutterBottom>  State </Typography>
                        <TextField
                            select
                            variant="outlined"
                            value={info.state_id || "unset"}
                            onChange={(e) => handleChange({ state_id: e.target.value })}
                            fullWidth
                            {...classnameGenerator('state_id')}
                            {...errorGenerator('state_id', 'State')}
                        >
                            <MenuItem value="unset" disabled className='placeholder'>Select State</MenuItem>
                            {states && states.map((option) => (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="body2" gutterBottom> City </Typography>
                        <TextField
                            select
                            variant="outlined"
                            defaultValue={null}
                            value={info.city_id || "unset"}
                            onChange={(e) => handleChange({ city_id: e.target.value })}
                            fullWidth
                            disabled={!info.state_id}
                            {...classnameGenerator('city_id')}
                            {...errorGenerator('city_id', 'City')}
                        >
                            <MenuItem value="unset" disabled >
                                {cities_loading
                                    ? <><CircularProgress style={{ width: '1rem', height: '1rem', margin: 0, verticalAlign: 'middle' }} />&nbsp;&nbsp;Loading Cities</>
                                    : !info.state_id ? ' Select State first' : 'Select Your City'}
                            </MenuItem>
                            {cities && cities.map((option) => (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <Typography variant="body2" gutterBottom> Tags</Typography>
                        <TextField
                            variant="outlined"
                            placeholder='Example : dev,web,site'
                            value={info.tags?.[0]}
                            onChange={(e) => handleChange({ tags: [e.target.value] })}
                            fullWidth
                            {...errorGenerator('tags', 'Tags')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2" gutterBottom>Description</Typography>
                        <ReactQuill
                            className={classes.quill}
                            theme="snow"
                            style={{ borderColor: errorGenerator('description').error ? 'red' : ' unset' }}
                            placeholder="Enter Job Description"
                            value={info.description}
                            onChange={c => handleChange({ description: c })}
                        />
                        {errorGenerator('description').error && <Typography color="secondary" variant="subtitle2">&nbsp;{errorGenerator('description', 'Description').helperText}</Typography>}

                    </Grid>
                </>}
                <Grid item xs={12} md={postJobStatus.status == 'success' ? 12 : 8}>
                    <PostJobStatus postJobStatus={postJobStatus} mode={mode} />
                </Grid>
                {postJobStatus.status != 'success' &&
                    <Grid item xs={12} md={4}>
                        <Button
                            variant='contained'
                            color="primary"
                            onClick={() => postJob()}
                            style={{ textTransform: 'none', fontSize: '1rem' }}
                            size='large'
                            fullWidth
                            disabled={postJobStatus.status == 'loading'}
                        >
                            {postJobStatus.status == 'loading'
                                ? <CircularProgress style={{ width: '1.5rem', height: '1.5rem' }} />
                                : mode == 'add' ? ' Post Job' : 'Edit Job'}
                        </Button>

                    </Grid>}
            </Grid>
        </Box>
    )
}
