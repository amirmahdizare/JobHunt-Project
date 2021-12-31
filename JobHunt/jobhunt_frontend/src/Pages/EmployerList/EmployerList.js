import { Box, Container, Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { ContentHeader } from '../../components/ContentHeader'
import { Jh_AlphabetFilter } from '../../components/Jh_AlphabetFilter/Jh_AlphabetFilter'
import { useCategories } from '../../hooks'
import { AccordionFilterBox } from './components/AccordionFilterBox'
import { EmployersContainer } from './components/Employers/EmployersContainer'
import { List } from './components/List'
import { ListPagination } from './components/ListPagination'
import { SearchKeyword } from './components/SearchKeyword'
import { SelectLocation } from './components/SelectLocation'
import SelectSortBy from './components/SelectSortBy'
import { Since } from './components/Since'

const EmployerList = () => {
    const categories = useCategories()
    return (
        <Box >
            <ContentHeader image="https://creativelayers.net/themes/jobhunt-html/images/resource/mslider1.jpg" text="Employer" />
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3} spacing={2} >
                        <SearchKeyword />
                        <SelectLocation />
                        {categories && <AccordionFilterBox
                            title="Categories"
                            items={categories} />}
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
                            ]} /> */}
                        <Since min={1991} max={2022} />

                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Box m={1}>
                            <Grid container spacing={1} alignItems="center">

                                <Grid item xs={12} sm={7}>
                                    <Typography>Total of 145 Employer</Typography>
                                </Grid>

                                <Grid item sm={5} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                                    <Typography variant="body2" >Sort By&nbsp;&nbsp;</Typography>
                                    <SelectSortBy />
                                </Grid>

                                <Grid item xs={12}>
                                    <Jh_AlphabetFilter />
                                </Grid>
                                <Grid item xs={12}>
                                    <EmployersContainer />

                                </Grid>
                            </Grid>
                        </Box>
                        <ListPagination />
                    </Grid>

                </Grid>


            </Container>
        </Box>
    )
}
export default EmployerList 