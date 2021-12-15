import React from 'react'
import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core'
const useStyles = makeStyles(theme => ({
    plan: {
        backgroundColor: (props) => (props.standardPlan ? '#141f72' : '#f4f5fa'),
        borderRadius: theme.spacing(1),
        bottom: '0',
        color: (props) => (props.standardPlan ? '#ffffff ' : '#888888'),
        padding: theme.spacing(2),
        paddingBottom: theme.spacing(4),
        position: 'relative',
        textAlign: 'center',
        transition: 'bottom 0.4s ease',
        '&:hover': {
            bottom: '15px'
        }
    },
    box: {
        background: '#ffffff',
        boxShadow: '0px 2px 4px rgb(0 ,0 ,0 ,0.06)',
        borderRadius: theme.spacing(1),
        color: '#141f72',
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),

    },
    button: {
        backgroundColor: (props) => (props.standardPlan ? '#ffffff' : '#141f72'),
        borderRadius: theme.spacing(4),
        boxShadow: 'unset',
        color: (props) => (props.standardPlan ? '#141f72' : '#ffffff '),
        padding: `${theme.spacing(2)}px ${theme.spacing(5)}px`,
    }
}))
export const Plan = (props) => {
    const { title, price, duration, jobPosting, featuredJob, JobDisplayLenght, premiumSupport } = props

    const classes = useStyles(props)
    return (
        <Grid item xs={12} md={4} >
            <Box className={classes.plan}>
                <Box className={classes.box}>
                    <Typography color="textPrimary" gutterBottom variant="h6">{title}</Typography>
                    <Typography display="inline" gutterBottom>
                        {price.currency.toUpperCase() === "Euro" && <i class="la la-eur" />}
                        {price.currency.toUpperCase() === "USD" && <i class="la la-usd" />}
                        {price.currency.toUpperCase() === "CNY" && <i class="la la-cny" />}

                    </Typography>
                    <Typography display="inline" variant="h2" gutterBottom>{price.amount}</Typography>
                    <br /><Typography color="textSecondary">{duration}</Typography>
                </Box>
                <Typography gutterBottom>{jobPosting}&nbsp;job posting</Typography>
                <br />
                <Typography gutterBottom>{featuredJob}&nbsp;featured job</Typography>
                <br />
                <Typography gutterBottom>Job displayed for {JobDisplayLenght} days</Typography>
                <br />

                <Typography gutterBottom>Premium Support &nbsp;{premiumSupport}</Typography>
                <br />

                <Button className={classes.button} color={props.standardPlan ? "default" : 'primary'} variant="contained" size="large" ><Typography>Buy Now</Typography></Button>
            </Box>
        </Grid>
    )
}
