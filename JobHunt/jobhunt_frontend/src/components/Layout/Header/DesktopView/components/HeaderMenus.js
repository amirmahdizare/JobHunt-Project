import React from 'react'
import Box from '@material-ui/core/Box';
import CustomMenu from './CustomMenu'
const DesktopViewHeaderMenus = (props) => {
    return (
        <Box display="flex" alignItems="center">
            <CustomMenu
                menuTitle="Home"
                menuItems={[
                    { name: 'Home Layout 1', href: '#' },
                    { name: 'Home Layout 2', href: '#' }
                ]}
            />
            <CustomMenu
                menuTitle="Employers"
                menuItems={[
                    { name: 'Employer List 1', href: '#' },
                    { name: 'Employer List 2', href: '#' },
                    { name: 'Employer List 3', href: '#' },
                    { name: 'Employer Single 1', href: '#' },
                    { name: 'Employer Single 2', href: '#' },
                ]}
                innerMenus={[{
                    title: 'Employers Dashboard',
                    href:"#"
                    , menuItems:[
                        { name: 'Employer Job Manager', href: '#' },
                        { name: 'Employer Packages', href: '#' },
                        { name: 'Employer Post New', href: '#' },
                        { name: 'Employer Profile', href: '#' },
                        { name: 'Employer Resume', href: '#' },
                        { name: 'Employer Transaction', href: '#' },
                        { name: 'Employers Job Alert', href: '#' },
                        { name: 'Employer Change Password', href: '#' },
                    ]

                }]}
            />
            <CustomMenu
                menuTitle="Candidates"
                menuItems={[
                    { name: 'Candidates List 1', href: '#' },
                    { name: 'Candidates List 2', href: '#' },
                    { name: 'Candidates List 3', href: '#' },
                    { name: 'Candidates Single 1', href: '#' },
                    { name: 'Candidates Single 2', href: '#' },

                ]}
                innerMenus={[{
                    title: 'Candidates Dashboard',
                    href:"#"
                    , menuItems:[
                        { name: 'Candidates Resume', href: '#' },
                        { name: 'Candidates Resume new', href: '#' },
                        { name: 'Candidates Profile', href: '#' },
                        { name: 'Candidates Shortlist', href: '#' },
                        { name: 'Candidates Job Alert', href: '#' },
                        { name: 'Candidates Dashboard', href: '#' },
                        { name: 'CV Cover Letter', href: '#' },
                        { name: 'Change Password', href: '#' },
                        { name: 'Candidates Applied Jobs', href: '#' },
                    ]

                }]}
            />
            <CustomMenu
                menuTitle="Blog"
                menuItems={[
                    { name: 'Blog List 1', href: '#' },
                    { name: 'Blog List 2', href: '#' },
                    { name: 'Blog List 3', href: '#' },
                    { name: 'Blog Single', href: '#' },

                ]}
            />
            <CustomMenu
                menuTitle="Job"
                menuItems={[
                    { name: 'Job List Classic', href: '#' },
                    { name: 'Job List Grid', href: '#' },
                    { name: 'Job List Modern', href: '#' },
                    { name: 'Job Single 1', href: '#' },
                    { name: 'Job Single 2', href: '#' },
                    { name: 'Job Single 3', href: '#' },

                ]}
            />
            <CustomMenu
                menuTitle="Pages"
                menuItems={[
                    { name: 'About Us', href: '#' },
                    { name: '404 Error', href: '#' },
                    { name: 'Contact Us 1', href: '#' },
                    { name: 'Contact Us 2', href: '#' },
                    { name: 'FAQs', href: '#' },
                    { name: 'How it works', href: '#' },
                    { name: 'Login', href: '#' },
                    { name: 'Pricing Plans', href: '#' },
                    { name: 'Register', href: '#' },
                    { name: 'Terms & Condition', href: '#' },
                ]}
                
            />
        </Box>
    )
}
export { DesktopViewHeaderMenus }