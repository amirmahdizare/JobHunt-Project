import React from 'react'
import { Box, Container, Divider, Grid } from '@material-ui/core'
import { Jh_ContentHeader } from '../../components/Jh_ContentHeader'
import { EmployerInfo } from './components/EmployerInfo'
import { ShareBox } from './components/ShareBox'
import { AboutBusiness } from './components/AboutBusiness'
import { CompanyInformation } from './components/CompanyInformation/CompanyInformation'
import { JobsFromBusiness } from './components/JobsFromBusiness'
export const EmployerSingle = () => {
    return (
        <Box >
            <Jh_ContentHeader image="https://creativelayers.net/themes/jobhunt-html/images/resource/mslider1.jpg" text="Single Employer" />
            <Container maxWidth="lg">
                <Grid container style={{ marginTop: '16px' }} alignItems="center" >
                    <EmployerInfo
                        name="Tera Planner"
                        location="Sacramento, California"
                        workTime="FULL TIME"
                        applications={1}
                        postDate="July 29, 2017"
                        views="868"
                    />
                    <ShareBox />
                </Grid>
                <Divider light style={{ marginTop: '8px', marginBottom: '8px' }} />
                <Grid container spacing={2}>
                    <AboutBusiness description=
                        {["Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a glowered inset one echidna cassowary some parrot and much as goodness some froze the sullen much connected bat wonderfully on instantaneously eel valiantly petted this along across highhandedly much.",
                            "Repeatedly dreamed alas opossum but dramatically despite expeditiously that jeepers loosely yikes that as or eel underneath kept and slept compactly far purred sure abidingly up above fitting to strident wiped set waywardly far the and pangolin horse approving paid chuckled cassowary oh above a much opposite far much hypnotically more therefore wasp less that hey apart well like while superbly orca and far hence one.Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy.",
                            "Ability to write code – HTML & CSS (SCSS flavor of SASS preferred when writing CSS)Proficient in Photoshop, Illustrator, bonus points for familiarity with Sketch (Sketch is our preferred concepting)Cross-browser and platform testing as standard practiceExperience using Invision a plusExperience in video production a plus or, at a minimum, a willingness to learn",
                            "Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a glowered inset one echidna cassowary some parrot and much as goodness some froze the sullen much connected bat wonderfully on instantaneously eel valiantly petted this along across highhandedly much.",
                            "Repeatedly dreamed alas opossum but dramatically despite expeditiously that jeepers loosely yikes that as or eel underneath kept and slept compactly far purred sure abidingly up above fitting to strident wiped set waywardly far the and pangolin horse approving paid chuckled cassowary oh above a much opposite far much hypnotically more therefore wasp less that hey apart well like while superbly orca and far hence one.Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy."]} />
                    <CompanyInformation />
                    <JobsFromBusiness/>
                </Grid>
            </Container>
        </Box>
    )
}
