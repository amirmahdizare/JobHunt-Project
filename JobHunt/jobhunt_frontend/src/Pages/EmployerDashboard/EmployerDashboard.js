import { Box, Container, Divider, Grid } from '@material-ui/core'
import React from 'react'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'
import CandidatesDashboardBackground from '../../asset/backgrounds/CandidatesDashboardBackground.jpg'
import { ContentHeader } from '../../components/ContentHeader'
import { EmployerMenu } from '../../components/EmployerMenu'
import { ChangePassword } from './components/ChangePassword/ChangePassword'
import { CompanyProfile } from './components/CompanyProfile/CompanyProfile'
import { ManageJobs } from './components/ManageJobs/ManageJobs'
import { PostJob } from './components/PostJob/PostJob'

const EmployerDashboard = () => {
    let { path, url } = useRouteMatch();
    return (
        <Box>
            <ContentHeader image={CandidatesDashboardBackground} text="Welcome Tara Planer" />
            <Container maxWidth="lg">
                <Grid container >
                    <Grid item xs={12} md={3}>
                        <EmployerMenu />
                    </Grid>
                    <Divider light orientation="vertical" flexItem />
                    <Grid item xs={12} md={8}>
                        <Switch>
                            <Route path={`${path}/managejobs`} component={ManageJobs} />
                            <Route exact path={`${path}/companyprofile`} component={CompanyProfile} />
                            <Route exact path={`${path}/transactions`} children={<h1>Transactions</h1>} />
                            <Route exact path={`${path}/resumes`} children={<h1>Resumes</h1>} />
                            <Route exact path={`${path}/packages`} children={<h1>Packages</h1>} />
                            <Route exact path={`${path}/postjob`} component={PostJob} />
                            <Route exact path={`${path}/jobalert`} children={<h1>Job Alert</h1>} />
                            <Route exact path={`${path}/changepassword`} component={ChangePassword} />
                            <Route children={<Redirect to={`${path}/managejobs`}/>}  />
                        </Switch>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
export default EmployerDashboard