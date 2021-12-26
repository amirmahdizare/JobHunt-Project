import { Box } from '@material-ui/core'
import React from 'react'
import { SectionHeader } from '../../../../components/SectionHeader'
import { PackagesTable } from './components/PackagesTable'

export const Packages = () => {
    return (
        <Box>
           <SectionHeader  title="Packages"/>
           <PackagesTable/>  
        </Box>
    )
}
