import React from 'react'
import { Box, CircularProgress, Container, Typography } from '@material-ui/core'
import { HomePagesHeader } from '../../components/HomePagesHeader'
import { Step } from './components/Step'
import { getHowWorks } from '../../api/public'
import { useGetData } from '../../hooks/useGetData'
const HowItWorks = () => {
    const [data, error, loading] = useGetData(getHowWorks)

    return (
        <Box>
            <HomePagesHeader page="How It Works" description="Get a digital tour of how Jobhunt works for you." />
            <Container maxWidth='lg'>
                {data && data.map((step, index) =>
                    <Step
                        key={step.id}
                        direction={index % 2 == 0 ? 'ltr' : 'rtl'}
                        description={step.description}
                        icon={<i className={step.icon} />}
                        image={step.image}
                        number={index + 1}
                        title={step.title}
                    />
                )}


                <Box display="flex" justifyContent="center">
                    {data?.length == 0 && <Typography>Not Found Data</Typography>}
                    {!data && loading && <CircularProgress />}
                </Box>
            </Container>

        </Box>
    )
}
export default HowItWorks
