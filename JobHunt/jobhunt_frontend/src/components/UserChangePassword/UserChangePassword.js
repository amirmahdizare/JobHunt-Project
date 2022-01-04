import React, { useState } from 'react'
import { Box, Grid } from '@material-ui/core'
import { LineAwesome, SvgKeySolid } from 'react-line-awesome-svg'
import { SectionHeader } from '../SectionHeader'
import { EnterInfo } from './Steps/EnterInfo'
import { SetPassword } from './Steps/SetPassword/SetPassword'
import { VerifyCode } from './Steps/VerifyCode'

export const UserChangePassword = () => {
    const [step, setStep] = useState(1)
    const goToNextStep = () => setStep(step + 1)

    const SelectSection = () => {
        switch (step) {
            case 1: return <EnterInfo goToNextStep={goToNextStep} />
            case 2: return <VerifyCode goToNextStep={goToNextStep} />
            case 3: return <SetPassword goToNextStep={goToNextStep} />
            default: return <></>
        }
    }

    return (
        <Box width={1} boxSizing={'border-box'} >

            <SectionHeader title="Change Password" />

            <Box display={'flex'} flexDirection={'row'} width={1}>

                <Box m={2} flex={1}>
                    <SelectSection />
                </Box>

                <Box flex={1} display={{ xs: 'none', md: 'block' }}>
                    <LineAwesome width="100%" fill="#e2e2e2" fontSize="15em" icon={SvgKeySolid} />
                </Box>

            </Box>

        </Box>
    )
}
