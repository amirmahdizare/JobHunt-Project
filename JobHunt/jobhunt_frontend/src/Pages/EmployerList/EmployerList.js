import { Box, Container, Divider, Grid } from '@material-ui/core'
import React from 'react'
import { ContentHeader } from '../../components/ContentHeader'
import { AccordionFilterBox } from './components/AccordionFilterBox'
import { List } from './components/List'
import { ListPagination } from './components/ListPagination'
import { SearchKeyword } from './components/SearchKeyword'
import { SelectLocation } from './components/SelectLocation'
import { Since } from './components/Since'

const EmployerList = () => {
    return (
        <Box >
            <ContentHeader image="https://creativelayers.net/themes/jobhunt-html/images/resource/mslider1.jpg" text="Employer" />
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3} spacing={2} >
                        <SearchKeyword />
                        <SelectLocation />
                        <AccordionFilterBox
                            title="Specialism"
                            items={[
                                { name: "Accountancy", number: 2 },
                                { name: "Banking", number: 2 },
                                { name: "Charity & Voluntary", number: 3 },
                                { name: "Estate Agency", number: 3 },
                                { name: "Graduate", number: 2 },
                                { name: "IT Contractor", number: 7 },
                            ]} />
                        <AccordionFilterBox
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
                        <Since min={1991} max={2022} />

                    </Grid>
                    <Grid item xs={12} md={9} spacing={2} >
                        <Grid item xs={12}>
                           <List/>
                           <ListPagination/>
                        </Grid>
                    </Grid>

                </Grid>


            </Container>
        </Box>
    )
}
export default EmployerList 