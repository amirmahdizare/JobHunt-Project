import { Box, Card, CardActionArea, Link } from '@material-ui/core'
import React from 'react'
export default function Company(props) {
    return (
        <Box m={1} boxSizing="border-size">
            <Card component={Link} href={props.title} style={{ borderRadius: 'unset' }} elevation='0'>
                <CardActionArea >

                    <img style={{ height: '85px',borderRadius:'4px'}} src={props.logo} />
                </CardActionArea>
            </Card>
        </Box>
    )
}
