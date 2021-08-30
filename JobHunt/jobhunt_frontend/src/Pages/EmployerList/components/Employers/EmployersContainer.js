import { Box } from '@material-ui/core'
import React from 'react'
import { EmployerCard } from './components/EmployerCard'

export const EmployersContainer = () => {
    return (
        <Box mt={3}>
            <EmployerCard
                logo="https://creativelayers.net/themes/jobhunt-html/images/resource/em1.jpg"
                numberOfOpenPositions={4}
                name="King LLC"
                category="Accountancy, Human Resources"
                location=" Toronto, Ontario"
                description="The Heavy Equipment / Grader Operator is responsible for operating one or several types construction equipment, such as front end loader, roller, bulldozer, or excavator to move,…" />

            <EmployerCard
                logo="https://creativelayers.net/themes/jobhunt-html/images/resource/em2.jpg"
                numberOfOpenPositions={4}
                name="Telimed"
                category="Accounting Assistant, Arts, Design, and Media"
                location=" Toronto, Ontario"
                description="The Heavy Equipment / Grader Operator is responsible for operating one or several types construction equipment, such as front end loader, roller, bulldozer, or excavator to move,…" />
            <EmployerCard
                logo="https://creativelayers.net/themes/jobhunt-html/images/resource/em3.jpg"
                numberOfOpenPositions={4}
                name="Ucess"
                category="Arts, Design, and Media, Web Developer"
                location=" Toronto, Ontario"
                description="The Heavy Equipment / Grader Operator is responsible for operating one or several types construction equipment, such as front end loader, roller, bulldozer, or excavator to move,…" />
            <EmployerCard
                logo="https://creativelayers.net/themes/jobhunt-html/images/resource/em4.jpg"
                numberOfOpenPositions={4}
                name="Airbnb"
                category="Arts, Design, and Media"
                location=" Toronto, Ontario"
                description="The Heavy Equipment / Grader Operator is responsible for operating one or several types construction equipment, such as front end loader, roller, bulldozer, or excavator to move,…" />
            <EmployerCard
                logo="https://creativelayers.net/themes/jobhunt-html/images/resource/em5.jpg"
                numberOfOpenPositions={4}
                name="TeraPlaner"
                category="Accountancy, Human Resources"
                location=" Toronto, Ontario"
                description="The Heavy Equipment / Grader Operator is responsible for operating one or several types construction equipment, such as front end loader, roller, bulldozer, or excavator to move,…" />
            <EmployerCard
                logo="https://creativelayers.net/themes/jobhunt-html/images/resource/em6.jpg"
                numberOfOpenPositions={4}
                name="King LLC"
                category="Accountancy, Human Resources"
                location=" Toronto, Ontario"
                description="The Heavy Equipment / Grader Operator is responsible for operating one or several types construction equipment, such as front end loader, roller, bulldozer, or excavator to move,…" />
            <EmployerCard
                logo="https://creativelayers.net/themes/jobhunt-html/images/resource/em7.jpg"
                numberOfOpenPositions={4}
                name="King LLC"
                category="Accountancy, Human Resources"
                location=" Toronto, Ontario"
                description="The Heavy Equipment / Grader Operator is responsible for operating one or several types construction equipment, such as front end loader, roller, bulldozer, or excavator to move,…" />

        </Box>
    )
}
