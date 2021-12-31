import React from 'react'
import { Box } from '@material-ui/core'
import { SectionHeader } from '../../../../components/SectionHeader'
import Pricing from '../../../Pricing/Pricing'
import { PackagesTable } from './components/PackagesTable'
import { Payment } from '../../../../components/Payment/Payment'

export const Packages = () => {
    return (
        <Box>
            <SectionHeader title="Packages" />
            <PackagesTable />
            <Pricing mode={'outter'} />
            {/* <Payment/> */}
        </Box>
    )
}
