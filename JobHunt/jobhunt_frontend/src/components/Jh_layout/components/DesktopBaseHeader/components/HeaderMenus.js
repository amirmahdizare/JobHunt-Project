import React from 'react'
import Box from '@material-ui/core/Box';
import CustomMenu from './CustomMenu'
import { Button, Typography } from '@material-ui/core';
import { SelectLanguage } from './SelectLanguage';
import { HeaderButtons } from './HeaderButtons'
import { useAuth } from '../../../../../api/authentication';
const DesktopViewHeaderMenus = () => {
    const auth = useAuth()
    return (
        <Box display="flex" alignItems="center">
            <Button
                disableRipple
                style={{ textTransform: 'none' }}
                color="inherit"
                href='/aboutus'>
                <Typography color="inherit">About&nbsp;Us</Typography>
            </Button>
           { auth.user=='candidate' && <Button
                disableRipple
                style={{ textTransform: 'none' }}
                color="inherit"
                href='/employers'>
                <Typography color="inherit">Employers</Typography>
            </Button>}
            { auth.user=='employer' && <Button
                disableRipple
                style={{ textTransform: 'none' }}
                color="inherit"
                href='/candidates'>
                <Typography color="inherit">Candidates</Typography>
            </Button>}
            {/* <CustomMenu
                menuTitle="About&nbsp;Us"
                menuItems={[
                    { name: 'Aboutus', href: '/aboutus' },
                    { name: 'FAQ', href: '/faq' },
                    { name: 'How it works', href: '/howitworks' },
                    { name: 'Pricing Plans', href: '/pricing' },
                    { name: 'Terms & Condition', href: '/terms' },
                ]}

            /> */}
            <Button
                disableRipple
                style={{ textTransform: 'none' }}
                color="inherit"
                href="/jobs">
                <Typography color="inherit">Jobs</Typography>
            </Button>
            <Button
                disableRipple
                style={{ textTransform: 'none' }}
                color="inherit"
                href="/bloglist">
                <Typography color="inherit">Blog</Typography>
            </Button>
            <Button
                disableRipple
                style={{ textTransform: 'none' }}
                color="inherit"
                href="/howitworks">
                <Typography color="inherit">How&nbsp;it&nbsp;works</Typography>
            </Button>         
               <Button
                disableRipple
                style={{ textTransform: 'none' }}
                color="inherit"
                href="/pricing">
                <Typography color="inherit">Pricing&nbsp;Plan&nbsp;</Typography>
            </Button>
            &nbsp;
            {!auth.user && <HeaderButtons />}
        </Box>
    )
}
export { DesktopViewHeaderMenus }