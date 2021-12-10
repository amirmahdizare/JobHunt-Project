import React from 'react'
import Box from '@material-ui/core/Box';
import CustomMenu from './CustomMenu'
import { Button, Typography } from '@material-ui/core';
import { SelectLanguage } from './SelectLanguage';
const DesktopViewHeaderMenus = () => {

    return (
        <Box display="flex" alignItems="center">

            <Button
                style={{ textTransform: 'none' }}
                color="inherit"
                href="/bloglist">
                <Typography color="inherit">Blog</Typography>
            </Button>
            <Button
                style={{ textTransform: 'none' }}
                color="inherit"
                href="/jobs">
                <Typography color="inherit">Jobs</Typography>
            </Button>
            <CustomMenu
                menuTitle="About&nbsp;Us"
                menuItems={[
                    { name: 'Aboutus', href: '/aboutus' },
                    { name: 'FAQ', href: '/faq' },
                    { name: 'How it works', href: '/howitworks' },
                    { name: 'Pricing Plans', href: '/pricing' },
                    { name: 'Terms & Condition', href: '/terms' },
                ]}

            />
            <Button
                style={{ textTransform: 'none' }}
                color="inherit"
                href="ContactUs">
                <Typography color="inherit">Contact&nbsp;Us</Typography>
            </Button>
            &nbsp;
            <SelectLanguage/>
        </Box>
    )
}
export { DesktopViewHeaderMenus }