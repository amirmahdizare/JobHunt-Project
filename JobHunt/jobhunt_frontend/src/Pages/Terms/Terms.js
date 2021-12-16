import React, { useState } from 'react'
import { Box, CircularProgress, Container, Typography } from '@material-ui/core'
import { HomePagesHeader } from '../../components/HomePagesHeader'
import { getTerms } from '../../api/public'
import { useGetData } from '../../hooks/useGetData'
import { Term } from './components/Term'

const Terms = () => {

    const [data, error, loading] = useGetData(getTerms)
    const { terms } = data || []


    return (
        <Box>
            <HomePagesHeader page="Terms and Conditions" description="Keep up to date with the latest news" />
            <Container maxWidth="lg">
                {!loading && terms && terms.map((term, index) => (
                    <Term title={term.title} description={term.description} key={term.id * Date.now()} />
                ))}

                <Box display="flex" justifyContent="center">
                    {terms?.length == 0 && <Typography > Not Data Found</Typography>}
                    {loading && <Box m={4}><CircularProgress /></Box>}
                </Box>

            </Container>

        </Box>
    )
}
export default Terms