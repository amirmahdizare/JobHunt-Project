import React from 'react'
import { Box, CircularProgress, Container, Typography } from '@material-ui/core'
import { HomePagesHeader } from '../../components/HomePagesHeader'
import { Item } from './components/Item'
import { useGetData } from '../../hooks/useGetData'
import { getPolicies } from '../../api/public'

const Policies = () => {
    const [data, error, loading] = useGetData(getPolicies)
    return (
        <Box>
            <HomePagesHeader page="Policies"  />
            <Container maxWidth="lg">
                <Box my={3}>

                    {data && data.map((policie) => (
                        <Item title={policie.title} description={policie.description} key={policie.id} />
                    ))}
                    {data?.length == 0 && <Typography > Not ServicesData Found</Typography>}
                    {!data && loading && <CircularProgress />}
                </Box>
            </Container>

        </Box>
    )
}
export default Policies