import { Box, Button, CircularProgress, Container, makeStyles, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { HomePagesHeader } from '../../components/HomePagesHeader'
import { Question } from './components/Question'
import { getFAQs } from '../../api/public'
import { useGetData } from '../../hooks/useGetData'
const useClasses = makeStyles(theme => ({
    button: {
        borderRadius: theme.spacing(1),
        border: '2px solid',
        borderColor: theme.palette.secondary.main,
        color: theme.palette.text.primary,
        marginBottom: theme.spacing(5),
        padding: theme.spacing(1.5),
        textTransform: 'none',
        transition: 'all .4s ease',
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            border: '2px solid',
            borderColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText
        }
    }


}))
const FAQ = () => {
    const classes = useClasses()

    const [page, setPage] = useState(1)
    const params = { page: page, pagination_size: 2 }
    const [data, error, loading] = useGetData(getFAQs, params)
    const { pages } = data || 1
    const [faqs, setFaqs] = useState([])
    useEffect(() => {
        if (data && data.faqs) setFaqs((prev) => ([...prev, ...data.faqs]))

    }, [data])


    const handleLoadMore = () => setPage((prev) => prev + 1)
    return (
        <Box>
            <HomePagesHeader page="Faq" description="Keep up to date with the latest news" />
            <Container maxWidth="lg">
                <Box my={3}>
                    {faqs && faqs.map((question) => (
                        <Question question={question.question} answer={question.answer} key={question.id} />
                    ))}
                </Box>
                <Box display="flex" justifyContent="center">
                    {!loading && faqs?.length == 0 && <Typography > Not Data Found</Typography>}
                    {loading && <Box m={4}><CircularProgress /></Box>}
                    {!loading && pages && pages > 1 && pages > page &&
                        <Button
                            className={classes.button}
                            color="secondary"
                            variant="outlined"
                            onClick={handleLoadMore}
                        ><Typography variant="h6" style={{ fontSize: '16px' }} >Load more faqs</Typography></Button>
                    }
                </Box>

            </Container >

        </Box >
    )
}
export default FAQ