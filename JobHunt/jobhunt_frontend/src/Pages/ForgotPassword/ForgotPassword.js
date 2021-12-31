import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box, CircularProgress, Container, Divider } from '@material-ui/core';
import { HomePagesHeader } from '../../components/HomePagesHeader';
import { EnterUsername } from './components/EnterUsername';
import { VerifyAccount } from '../SignupPage/components/VerifyAccount';
import { ChangePassword } from './components/ChangePassword';
import { Alert } from '@material-ui/lab';
import { useAuth } from '../../api/authentication';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)

    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Enter Username', 'Verify Account', 'Change Password', 'Finish'];
}


export default function ForgotPassword() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();
    const auth = useAuth()
    const [loading, toggleLoading] = useState(null)
    const [errorMessages, setErrorMessages] = useState(null)
    const [values, setValues] = useState({
        identifier: '',
        ident_kind: 'mobile',
        verifyCode: '',
        country_code: '',
        newPassword: '',
        confirmPassword: ''
    })
    const [nextButtonState, setNextButtonState] = useState(true)
    const handleChange = (obj) => {
        setValues({ ...values, ...obj })
        setErrorMessages(null)
    }
    function getStepContent(step) {
        switch (step) {
            case 0:
                return <EnterUsername errorMessages={errorMessages} values={values} setNextButtonState={setNextButtonState} handleChange={handleChange} />;
            case 1:
                return <VerifyAccount errorMessages={errorMessages} values={values} type="forgotpassword" setNextButtonState={setNextButtonState} handleChange={handleChange} />
            case 2:
                return <ChangePassword errorMessages={errorMessages} values={values} setNextButtonState={setNextButtonState} handleChange={handleChange} />;
            default:
                return 'Unknown step';
        }
    }

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        if (activeStep == 0) {
            toggleLoading(true)
            auth.forgotPassword(values)
                .then(() => {
                    goToNextStep()
                    toggleLoading(false)
                })
                .catch(e => {
                    toggleLoading(false)
                    setErrorMessages(e.message)
                })

        }
        if (activeStep == 1) {
            toggleLoading(true)
            auth.verifyCode(values.verifyCode)
                .then(() => {
                    goToNextStep()
                    toggleLoading(false)
                })
                .catch(e => {
                    toggleLoading(false)
                    setErrorMessages(e)
                })

        }
        if (activeStep == 2) {
            toggleLoading(true)
            auth.changePassword(values.newPassword,values.confirmPassword)
                .then(() => {
                    goToNextStep()
                    toggleLoading(false)
                })
                .catch(e => {
                    toggleLoading(false)
                    setErrorMessages(e.message)
                })

        }
    };
    const goToNextStep = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const setButtonLabel = () => {
        return loading ? <CircularProgress size="20px" style={{ color: 'white' }} /> : 'Next'
    }


    return (
        <Box>
            <HomePagesHeader page="Forgot Password" />
            <Container maxWidth="md">
                <Box className={classes.root}>
                    <Box width={'100%'} display={{ xs: 'none', md: 'flex' }}>
                        <Stepper style={{ width: '100%' }} activeStep={activeStep}>
                            {steps.map((label, index) => {
                                const stepProps = {};
                                const labelProps = {};
                                // if (index == 0 && info.role) {
                                //   labelProps.optional = <Typography variant="body2">{capitalizeFirstLetter(info.role)}</Typography>;
                                // }
                                if (isStepSkipped(index)) {
                                    stepProps.completed = false;
                                }
                                return (
                                    <Step key={label} {...stepProps}>
                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                    </Step>
                                );
                            })}

                        </Stepper>
                    </Box>
                    <Box my={2} display={{ xs: 'block', md: 'none' }}>
                        {activeStep < steps.length
                            ?
                            <>
                                <Typography variant="h5" color="secondary" gutterBottom>Step&nbsp;{activeStep + 1}&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
                                <Typography variant="h4" gutterBottom>{steps[activeStep]}</Typography>
                            </>
                            : <Typography variant="h5" color="secondary" gutterBottom>SignUp Finished</Typography>}
                        <Divider />
                    </Box>
                    <div>
                        {activeStep === steps.length - 1 ? (
                            <div>
                                <Alert variant="filled" severity="success">
                                    <Typography variant="h6" gutterBottom>Your Password Successfully Changed</Typography>
                                    <Button variant="contained" color="primary" href="/home">Back To Home</Button>
                                   &nbsp; <Button variant="contained" color="primary" href="/login">Login</Button>

                                </Alert>
                            </div>
                        ) : (
                            <div>
                                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                <div>
                                    <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                        Back
                                    </Button>

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                        disabled={!nextButtonState}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : setButtonLabel()}
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </Box>
            </Container>
        </Box>
    );
}