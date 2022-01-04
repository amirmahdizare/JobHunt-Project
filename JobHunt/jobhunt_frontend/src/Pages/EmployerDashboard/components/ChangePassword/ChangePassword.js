import React, { useState } from 'react'
import { Box, Grid } from '@material-ui/core'
import { LineAwesome, SvgKeySolid } from 'react-line-awesome-svg'
import { SectionHeader } from '../../../../components/SectionHeader'
import { EnterInfo } from './Steps/EnterInfo'
import { SetPassword } from './Steps/SetPassword/SetPassword'
import { VerifyCode } from './Steps/VerifyCode'

export const ChangePassword = () => {
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
        <Box>
            <SectionHeader title="Change Password" />
            <Box display="flex" flexDirection={'column'} m={2}>
                <Grid container xs={12} md={6} spacing={2} alignContent='flex-start'>
                    <SelectSection />
                {/* <VerifyCode  goToNextStep={goToNextStep} /> */}
                {/* <SetPassword  goToNextStep={goToNextStep} /> */}
                </Grid>
                {/* <EnterInfo  goToNextStep={goToNextStep} /> */}
                <Box flex="1" display={{ xs: 'none', md: 'flex' }}>
                    <LineAwesome width="100%" fill="#e2e2e2" fontSize="15em" icon={SvgKeySolid} />
                </Box>
            </Box>
        </Box>
    )
}
