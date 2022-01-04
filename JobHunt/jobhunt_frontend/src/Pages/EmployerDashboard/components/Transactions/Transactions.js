import { Box } from '@material-ui/core'
import React from 'react'
import { SectionHeader } from '../../../../components/SectionHeader'
import { TransactionTable } from './components/TransactionTable'

export const Transactions = () => {
    return (
        <Box width={1}>
            <SectionHeader title="Transaction" />
            <TransactionTable/>
            
        </Box>
    )
}
