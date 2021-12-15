import React, { useState } from 'react'
import { Box, CircularProgress, Container, Typography } from '@material-ui/core'
import { HomePagesHeader } from '../../components/HomePagesHeader'
import { getTerms } from '../../api/public'
import { useGetData } from '../../hooks/useGetData'
import { Term } from './components/Term'
import { Jh_Pagination } from '../../components/Jh_Pagination'

const Terms = () => {
    const [page, setPage] = useState(1)
    const params =  {pagination_size : 5 ,page :page}
    const [data, error, loading] = useGetData(getTerms ,params)
    const { terms, pages } = data || []

    const handleChange = (event, value) =>  setPage(value)

    return (
        <Box>
            <HomePagesHeader page="Terms and Conditions" description="Keep up to date with the latest news" />
            <Container maxWidth="lg">
                {!loading && terms && terms.map((term, index) => (
                    <Term title={term.title} description={term.description} key={term.id * Date.now()} />
                ))}

                <Box display="flex" justifyContent="center">
                    {terms?.length == 0 && <Typography > Not Data Found</Typography>}
                    { loading && <Box m={4}><CircularProgress /></Box>}
                </Box>
                {pages > 1 &&
                    <Jh_Pagination handleChange={handleChange} pages={pages} page={page} />
                }
            </Container>

        </Box>
    )
}
export default Terms