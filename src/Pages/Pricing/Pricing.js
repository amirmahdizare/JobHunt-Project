import { Box, Container, Grid } from '@material-ui/core'
import React from 'react'
import { Jh_HomePagesHeader } from '../../components/Jh_HomePagesHeader'
import { Plan } from './components/Plan'
export const Pricing = () => {
    return (
        <Box>
            <Jh_HomePagesHeader page="Pricing" description="Keep up to date with the latest news" />
            <Container maxWidth="lg">
                <Box my={5}>
                    <Grid container spacing={2}>
                        <Plan
                            title="Basic Jobs"
                            price={10}
                            duration="15 Days"
                            jobPosting={1}
                            featuredJob={0}
                            JobDisplayLenght={20}
                            premiumSupport="24/7" />
                        <Plan
                            title="Standard Jobs"
                            price={45}
                            duration="20 Days"
                            jobPosting={11}
                            featuredJob={12}
                            JobDisplayLenght={30}
                            premiumSupport="24/7"
                            standardPlan />
                        <Plan
                            title="Golden Jobs"
                            price={80}
                            duration="2 Month"
                            jobPosting={1}
                            featuredJob={0}
                            JobDisplayLenght={20}
                            premiumSupport="24/7" />
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}
