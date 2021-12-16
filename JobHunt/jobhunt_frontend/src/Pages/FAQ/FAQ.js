import { Box, CircularProgress, Container, Typography } from '@material-ui/core'
import React from 'react'
import { HomePagesHeader } from '../../components/HomePagesHeader'
import { Question } from './components/Question'
import { getFAQs } from '../../api/public'
import { useGetData } from '../../hooks/useGetData'

const FAQ = () => {
    const [data, error, loading] = useGetData(getFAQs)


    return (
        <Box>
            <HomePagesHeader page="Faq" description="Keep up to date with the latest news" />
            <Container maxWidth="lg">
                <Box my={3}>
                    {!loading && data && data.map((question) => (
                        <Question question={question.question} answer={question.answer} key={question.id} />
                    ))}
                </Box>
                <Box display="flex" justifyContent="center">
                    {data?.length == 0 && <Typography > Not Data Found</Typography>}
                    {loading && <Box m={4}><CircularProgress /></Box>}
                </Box>
            </Container>

        </Box>
    )
}
export default FAQ