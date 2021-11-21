import { Box, Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { HomePagesHeader } from '../../components/HomePagesHeader'
import { Question } from './components/Question'
import { Loading } from '../../routes/components/Loadable/Loading'
import useLoading from '../../hooks/useLoading'
import { getFAQs } from '../../api/public'

const FAQ = () => {
    const [data, setData] = useState([])
    const loading = useLoading()

    useEffect(() => {
        loading.toggleLoading()
        getFAQs()
            .then((data) => {
                console.log(data)
                setData(data[0])
            })
            .finally(() => loading.toggleLoading())
    }, [])
    return (
        <Box>
            <HomePagesHeader page="Faq" description="Keep up to date with the latest news" />
            <Container maxWidth="lg">
                <Box my={3}>
                    {
                        loading.isLoading && <Loading />
                    }

                    {data.map((question) => (
                        <Question question={question.question} answer={question.answer} key={question.id} />
                    ))}
                </Box>
            </Container>

        </Box>
    )
}
export default FAQ