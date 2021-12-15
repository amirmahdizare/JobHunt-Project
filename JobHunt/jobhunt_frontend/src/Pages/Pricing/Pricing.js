import { Box, CircularProgress, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { getPricing } from '../../api/public'
import { HomePagesHeader } from '../../components/HomePagesHeader'
import { useGetData } from '../../hooks/useGetData'
import { Plan } from './components/Plan'

const Pricing = () => {
    const [data, error, loading] = useGetData(getPricing)

    return (
        <Box>
            <HomePagesHeader page="Pricing" description="Keep up to date with the latest news" />
            <Container maxWidth="lg">
                <Box my={5}>
                    <Grid container spacing={2}>
                        {data && data.map((item, index) =>
                            <Plan
                                standardPlan={index === 1 ? true : false}
                                key={item.id}
                                title={item.type}
                                price={item.price}
                                duration="15 Days"
                                jobPosting={item.rules.job_posting_limit}
                                featuredJob={0}
                                JobDisplayLenght={item.rules.expire_rule}
                                premiumSupport="24/7" />
                        )}

                    </Grid>
                    {data?.length == 0 && <Typography > Not data  Found</Typography>}
                    {!data && loading && <CircularProgress />}
                </Box>
            </Container>
        </Box>
    )
}
export default Pricing