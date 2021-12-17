import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { ListMenu } from './ListMenu'

const FAQ = () => {
    return (
        <Grid item xs={12} md={5}>
            <Box p={2} >
                <Typography variant="h5" style={{ color: 'white' }}>Frequently Asked Questions</Typography>
                <Box display={'flex'} width={1} mt={2}>
                    <Box width={1/2}>
                <ListMenu
                    menuItems={[
                        { name: 'Privacy & Security', href: '#' },
                        { name: 'Term Of Service', href: '/terms' },
                        { name: 'Commuication', href: '#' },
                        { name: 'Referral Terms', href: '#' },
                        { name: 'Lending Licence', href: '#' },
                        { name: 'Disclaimers', href: '#' },
                    ]}
                /></Box>
                 <Box width={1/2}>
                                <ListMenu
                    menuItems={[
                        { name: 'Disclaimers', href: '#' },
                        { name: 'Support', href: '/contactus' },
                        { name: 'How It Works', href: '/howitworks' },
                        { name: 'For Employers', href: '#' },
                        { name: 'Underwriting', href: '#' },
                        { name: 'Contact Us', href: '/contactus' },
                    ]}
                /></Box>
                </Box>
            </Box>
        </Grid>
    )
}
export default FAQ