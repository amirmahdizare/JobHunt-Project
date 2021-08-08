import React from 'react'
import { DesktopHeader } from './Header/DesktopView/DesktopHeader'
import { MobileHeader } from './Header/MobileView/MobileHeader'
const Layout = (props) => {
    return (
        <>
            <DesktopHeader />
            <MobileHeader />
        </>
    )
}
export { Layout }