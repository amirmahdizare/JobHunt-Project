import { Box, Card } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import Jh_JobCard from '../../../../../Jh_JobCard'
const useClasses = makeStyles(theme => ({
    container: {
        borderRadius: theme.spacing(1),
        boxSizing: 'border-box',
        height: '300px',
        overflowY: 'scroll',
        marginTop: theme.spacing(3),
        position: 'relative',
        width: '400px',
    },
    arrowUp: {
        borderLeft: '10px solid transparent',
        borderRight: '10px solid transparent',
        borderBottom: '10px solid white',
        height: '0px',
        position: 'absolute',
        right: '5%',
        top: '-8px',
        width: '0px',
        zIndex: '3'

    }
}))
export const CandidateInterestsContainer = () => {
    const classes = useClasses()
    return (
        <Box position="relative" display={{xs:'none',lg:'block'}}  >
                <Box className={classes.arrowUp}></Box>
                <Card className={classes.container}>
                    <Jh_JobCard
                        jobTitle="Web Designer / Developer"
                        companyName="Massimo Artemisis"
                        // companyLocation="Sacramento, California"
                        // workTime="FULL TIME"
                        companyLogo="https://creativelayers.net/themes/jobhunt-html/images/resource/l1.png"
                        hideDetail
                    />
                    <Jh_JobCard
                        jobTitle="Marketing Director"
                        companyName="Tix Dog"
                        // companyLocation="Rennes, France"
                        // workTime="PART TIME"
                        companyLogo="https://creativelayers.net/themes/jobhunt-html/images/resource/l2.png"
                        hideDetail

                    />
                    <Jh_JobCard
                        jobTitle="C Developer (Senior) C .Net"
                        companyName="StarHealth"
                        companyLocation="London, United Kingdom"
                        workTime="FULL TIME"
                        companyLogo="https://creativelayers.net/themes/jobhunt-html/images/resource/l3.png"
                        hideDetail

                    />
                    <Jh_JobCard
                        jobTitle="C Developer (Senior) C .Net"
                        companyName="StarHealth"
                        // companyLocation="London, United Kingdom"
                        // workTime="FULL TIME"
                        companyLogo="https://creativelayers.net/themes/jobhunt-html/images/resource/l3.png"
                        hideDetail

                    />
                </Card>
        </Box>
    )
}
