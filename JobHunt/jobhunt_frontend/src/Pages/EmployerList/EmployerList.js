import { Box, Container, Grid } from '@material-ui/core'
import React, { useState } from 'react'
import { employersBackground } from '../../asset'
import { ContentHeader } from '../../components/ContentHeader'
import { useFilter } from 'hooks/useFilter'
import { EmployersContainer } from './components/Employers/EmployersContainer'
import { CategoryFilter, SinceFilter, LocationFilter } from './components/filters'

const EmployerList = () => {

    const [filter,addFilter,clearFilter] =useFilter()

    return (
        <Box >
            <ContentHeader image={employersBackground} text="Employers" />
            <Container maxWidth="lg">
                <Grid container spacing={2}>

                    <Grid item xs={12} md={3}  >
                        {/* <SearchKeyword /> */}
                        {/* <LocationFilter addFilter={addFilter} clearFilter={clearFilter} /> */}
                        <CategoryFilter addFilter={addFilter} clearFilter={clearFilter} />
                        {/* <SinceFilter min={1991} max={2022} />  */}

                    </Grid>

                    <Grid item xs={12} md>
                        <Box width={1}>

                            <Grid item md>
                                {/* <Grid item xs={12}>
                                    <Jh_AlphabetFilter />
                                </Grid> */}
                                <EmployersContainer filter={filter} />

                            </Grid>
                        </Box>
                    </Grid>

                </Grid>


            </Container>
        </Box>
    )
}
export default EmployerList 