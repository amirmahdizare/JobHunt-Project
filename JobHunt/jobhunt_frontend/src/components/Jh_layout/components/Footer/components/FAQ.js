import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { ListMenu } from './ListMenu'

const FAQ = () => {
    return (
        <Grid item xs={12} md={3}>
            <Box p={2} >
                <Typography variant="h5" style={{ color: 'white' }}>Frequently Asked Questions</Typography>
                <ListMenu
                    menuItems={[
                        { name: 'Privacy & Security', href: '#' },
                        { name: 'Term Of Service', href: '/terms' },
                        { name: 'Commuication', href: '#' },
                        { name: 'Referral Terms', href: '#' },
                        { name: 'Lending Licence', href: '#' },
                        { name: 'Disclaimers', href: '#' },
                        { name: 'Support', href: '/contactus' },
                        { name: 'How It Works', href: '/howitworks' },
                        { name: 'For Employers', href: '#' },
                        { name: 'Underwriting', href: '#' },
                        { name: 'Contact Us', href: '/contactus' },
                    ]}
                />
            </Box>
        </Grid>
    )
}
export default FAQ