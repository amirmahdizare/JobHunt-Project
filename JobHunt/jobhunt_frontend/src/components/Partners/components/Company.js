import { Box, Card, CardActionArea } from '@material-ui/core'
import React from 'react'
export default function Company(props) {
    return (
        <Box m={1} boxSizing="border-size">
            <Card component='a' href={'http://' + props.link} style={{ borderRadius: 'unset' }} elevation='0'>
                <CardActionArea >

                    <img style={{ height: '85px',borderRadius:'4px'}} src={props.logo} />
                </CardActionArea>
            </Card>
        </Box>
    )
}
