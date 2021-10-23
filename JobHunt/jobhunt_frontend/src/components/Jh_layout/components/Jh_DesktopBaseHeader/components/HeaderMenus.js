import React from 'react'
import Box from '@material-ui/core/Box';
import CustomMenu from './CustomMenu'
import { Button, Typography } from '@material-ui/core';
import { useAuth } from '../../../../../api/authentication';
const DesktopViewHeaderMenus = () => {
    const auth=useAuth()
    return (
        <Box display="flex" alignItems="center">
            <CustomMenu
                menuTitle="Employer"
                menuItems={[
                    { name: 'Manage Jobs', href: auth.user=='employer' ? '/managejobs' : '/login' },
                ]}
                // innerMenus={[{
                //     title: 'Employers Dashboard',
                //     href: "#"
                //     , menuItems: [
                //         { name: 'Employer Job Manager', href: '#' },
                //         { name: 'Employer Packages', href: '#' },
                //         { name: 'Employer Post New', href: '#' },
                //         { name: 'Employer Profile', href: '#' },
                //         { name: 'Employer Resume', href: '#' },
                //         { name: 'Employer Transaction', href: '#' },
                //         { name: 'Employers Job Alert', href: '#' },
                //         { name: 'Employer Change Password', href: '#' },
                //     ]

                // }]}
            />
            <CustomMenu
                menuTitle="Candidate"
                menuItems={[
                    { name: 'Dashboard', href:auth.user=='candidate' ?  '/dashboard' : '/login' },
                ]}
            />
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
        </Box>
    )
}
export { DesktopViewHeaderMenus }