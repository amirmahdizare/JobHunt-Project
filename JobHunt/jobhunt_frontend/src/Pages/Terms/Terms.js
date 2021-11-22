import React, { useEffect, useState } from 'react'
import { Box, Container, Typography } from '@material-ui/core'
import { HomePagesHeader } from '../../components/HomePagesHeader'
import { getTerms } from '../../api/public'
import useLoading from '../../hooks/useLoading'
import { Loading } from '../../routes/components/Loadable/Loading'

const Terms = () => {
    const [data, setData] = useState([])
    const loading = useLoading()
    useEffect(() => {
        loading.toggleLoading()
        getTerms()
            .then((data) => {
                setData(data[0])
                console.log(data)
            })
            .finally(() => loading.toggleLoading())
    }, [])
    return (
        <Box>
            <HomePagesHeader page="Terms and Conditions" description="Keep up to date with the latest news" />
            <Container maxWidth="lg">
                {
                    loading.isLoading && <Loading />
                }
                {data.map((item, index) => (
                    <Box my={4} key={item.id}>
                        <Typography variant="h6" gutterBottom>{item.title}</Typography>
                        <Typography color="textSecondary" variant="body2" gutterBottom>{item.description}</Typography>
                    </Box>
                ))}
            </Container>

        </Box>
    )
}
export default Terms