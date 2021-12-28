import React, { useEffect, useState } from 'react'
import { Box, Button, CircularProgress, Container, makeStyles, Typography } from '@material-ui/core'
import { HomePagesHeader } from '../../components/HomePagesHeader'
import { getTerms } from '../../api/public'
import { useGetData } from '../../hooks/useGetData'
import { Term } from './components/Term'
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
const Terms = () => {
    const classes = useClasses()
    const [page, setPage] = useState(1)
    const params = { page: page, pagination_size: 15 }
    const [data, error, loading] = useGetData(getTerms, params)
    const [terms, setTerms] = useState([])
    const { pages } = data || []
    useEffect(() => {
        if (data && data.terms) setTerms((prev) => ([...prev, ...data.terms]))
    }, [data])
    const handleLoadMore = () => setPage((prev) => prev + 1)
    return (
        <Box>
            <HomePagesHeader page="Terms and Conditions" description="Keep up to date with the latest news" />
            <Container maxWidth="lg">
                <Box my={3}>
                    {terms && terms.map((term, index) => (
                        <Term title={term.title} description={term.description} key={term.id * Date.now()} />
                    ))}
                </Box>
                <Box display="flex" justifyContent="center">
                    {terms?.length == 0 && <Typography > Not Data Found</Typography>}
                    {loading && <Box m={4}><CircularProgress /></Box>}
                    {!loading && pages && pages > 1 && pages > page &&
                        <Button
                            className={classes.button}
                            color="secondary"
                            variant="outlined"
                            onClick={handleLoadMore}
                        >
                            <Typography variant="h6" style={{ fontSize: '16px' }} >Load more Terms</Typography>
                        </Button>
                    }
                </Box>

            </Container>

        </Box>
    )
}
export default Terms