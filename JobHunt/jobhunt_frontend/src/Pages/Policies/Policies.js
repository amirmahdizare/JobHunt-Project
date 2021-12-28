import { Box, Button, CircularProgress, Container, makeStyles, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { HomePagesHeader } from '../../components/HomePagesHeader'
import { Question } from './components/Question'
import { getPolicies } from '../../api/public'
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
const Policies = () => {
    const classes = useClasses()
    const [page, setPage] = useState(1)
    const params = { page: page, pagination_size: 15 }
    const [data, error, loading] = useGetData(getPolicies, params)
    const { pages } = data || 1
    const [policies, setPolicies] = useState([])
    useEffect(() => {
        if (data && data.policies) setPolicies((prev) => ([...prev, ...data.policies]))

    }, [data])


    const handleLoadMore = () => setPage((prev) => prev + 1)
    return (
        <Box>
            <HomePagesHeader page="policies" description="Keep up to date with the latest news" />
            <Container maxWidth="lg">
                <Box my={3}>
                    {policies && policies.map((question) => (
                        <Question question={question.title} answer={question.description} key={question.id} />
                    ))}
                </Box>
                <Box display="flex" justifyContent="center">
                    {!loading && policies?.length == 0 && <Typography > Not Data Found</Typography>}
                    {loading && <Box m={4}><CircularProgress /></Box>}
                    {!loading && pages && pages > 1 && pages > page &&
                        <Button
                            className={classes.button}
                            color="secondary"
                            variant="outlined"
                            onClick={handleLoadMore}
                        ><Typography variant="h6" style={{ fontSize: '16px' }} >Load more policies</Typography></Button>
                    }
                </Box>

            </Container >

        </Box >
    )
}
export default Policies
