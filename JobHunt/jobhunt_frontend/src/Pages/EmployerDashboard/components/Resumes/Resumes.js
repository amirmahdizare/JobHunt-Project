import React, { useState } from 'react'

import { SectionHeader } from '../../../../components/SectionHeader'
import { AppliedCandidate } from './components/AppliedCandidate'
import { AppliedCandidatesContainer } from './components/AppliedCandidatesContainer'

export const Resumes = () => {

    const [jobOfferId, setJobOfferID] = useState(null)

    return (
        <div>
            <SectionHeader title="Resumes" />

            <AppliedCandidate
                jobOfferId={jobOfferId}
                setJobOfferId={setJobOfferID} />

            <AppliedCandidatesContainer
                jobOfferId={jobOfferId} />

        </div>
    )
}
