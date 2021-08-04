import React from 'react'
import Box from '@material-ui/core/Box';
import CustomMenu from './CustomMenu'
const DesktopViewHeaderMenus = (props) => {
    return (
        <Box display="flex" alignItems="center">
            <CustomMenu
                menuTitle="Home"
                menuItems={[
                    { name: 'item1', href: '#' },
                    { name: 'item2', href: '#' }
                ]}
            />
            <CustomMenu
                menuTitle="Employers"
                menuItems={[
                    { name: 'item1', href: '#' },
                    { name: 'item2', href: '#' }
                ]}
            />
            <CustomMenu
                menuTitle="Candidates"
                menuItems={[
                    { name: 'item1', href: '#' },
                    { name: 'item2', href: '#' }
                ]}
            />
            <CustomMenu
                menuTitle="Blog"
                menuItems={[
                    { name: 'item1', href: '#' },
                    { name: 'item2', href: '#' }
                ]}
            />
            <CustomMenu
                menuTitle="Job"
                menuItems={[
                    { name: 'item1', href: '#' },
                    { name: 'item2', href: '#' }
                ]}
            />
            <CustomMenu
                menuTitle="Pages"
                menuItems={[
                    { name: 'item1', href: '#' },
                    { name: 'item2', href: '#' }
                ]}
            />
        </Box>
    )
}
export { DesktopViewHeaderMenus }