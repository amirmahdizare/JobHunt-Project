import { Box, Container, Divider, Grid } from '@material-ui/core'
import React from 'react'
import { Switch,Route ,useRouteMatch} from 'react-router-dom'
import CandidatesDashboardBackground from '../../asset/backgrounds/CandidatesDashboardBackground.jpg'
import { ContentHeader } from '../../components/ContentHeader'
import { EmployerMenu } from '../../components/EmployerMenu'
import { CompanyName } from './components/CompanyName/CompanyName'
import { ManageJobs } from './components/ManageJobs/ManageJobs'

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
                            <Route  path={`${path}/managejobs`} component={ManageJobs}/>
                            <Route exact path={`${path}/companyname`} component={CompanyName}/>
                            <Route exact path={`${path}/transactions`} children={<h1>Transactions</h1>}/>
                            <Route exact path={`${path}/resumes`} children={<h1>Resumes</h1>}/>
                            <Route exact path={`${path}/packages`} children={<h1>Packages</h1>}/>
                            <Route exact path={`${path}/postjob`} children={<h1>Post A Job</h1>}/>
                            <Route exact path={`${path}/jobalert`} children={<h1>Job Alert</h1>}/>
                            <Route exact path={`${path}/changepassword`} children={<h1>Change Password</h1>}/>
                            <Route component={ManageJobs}/>
                        </Switch>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
export default EmployerDashboard