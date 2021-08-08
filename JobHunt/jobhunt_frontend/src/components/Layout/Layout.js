import React from 'react'
import { DesktopHeader } from './Header/DesktopView/DesktopHeader'
import { MobileHeader } from './Header/MobileView/MobileHeader'
import Footer from './Footer/Footer'
const Layout = () => {
    return (
        <>
            <DesktopHeader />
            <MobileHeader />
            <Footer/>
        </>
    )
}
export { Layout }