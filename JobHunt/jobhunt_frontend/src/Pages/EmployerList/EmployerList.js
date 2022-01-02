import { Box, Container, Divider, Grid, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { ContentHeader } from '../../components/ContentHeader'
// import { Jh_AlphabetFilter } from '../../components/Jh_AlphabetFilter/Jh_AlphabetFilter'
// import { useCategories } from '../../hooks'
// import { AccordionFilterBox } from './components/AccordionFilterBox'
import { EmployersContainer } from './components/Employers/EmployersContainer'
// import { CategoryFilter } from './components/filters/CategoryFilter'
// import { LocationFilter } from './components/filters/LocationFilter'
// import { List } from './components/List'
// import { SearchKeyword } from './components/SearchKeyword'
// import SelectSortBy from './components/SelectSortBy'
// import { Since, SinceFilter } from './components/filters/SinceFilter'
// import { useGetData } from '../../hooks/useGetData'

const EmployerList = () => {
    const [filter,setFilter] = useState({})
    // const addFilter = (filter) =>setFilter(filter)
    return (
        <Box >
            <ContentHeader image="https://creativelayers.net/themes/jobhunt-html/images/resource/mslider1.jpg" text="Employers" />
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    {/* <Grid item xs={12} md={3} spacing={2} >
                        {/* <SearchKeyword /> */}
                        {/* <LocationFilter /> */}
                        {/* <CategoryFilter addFilter={addFilter}/> */}
                        {/* <AccordionFilterBox
                            title="Team Size"
                            items={[
                                { name: "1-10" },
                                { name: "100-200" },
                                { name: "201-301" },
                                { name: "301-401" },
                                { name: "401-501" },
                                { name: "501-601" },
                                { name: "601-701" },
                            ]} />
                       <SinceFilter min={1991} max={2022} /> 

                    </Grid> */}
                    <Grid item xs={12} md={12}>
                        <Box m={2}>
                            <Grid container spacing={1} alignItems="center">

                                {/* <Grid item xs={12} sm={7}>
                                    <Typography>Total of 145 Employer</Typography>
                                </Grid> */}

                                {/* <Grid item sm={5} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}> */}
                                    {/* <Typography variant="body2" >Sort By&nbsp;&nbsp;</Typography> */}
                                    {/* <SelectSortBy /> */}
                                {/* </Grid> */}

                                {/* <Grid item xs={12}>
                                    <Jh_AlphabetFilter />
                                </Grid> */}
                                <Grid item xs={12}>
                                    <EmployersContainer filter={filter} />

                                </Grid>
                            </Grid>
                        </Box>
                        {/* <ListPagination /> */}
                    </Grid>

                </Grid>


            </Container>
        </Box>
    )
}
export default EmployerList 