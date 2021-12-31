import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { SelectAccount } from './components/SelectAccount';
import { HomePagesHeader } from '../../components/HomePagesHeader';
import { Box, CircularProgress, Container, Divider } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { EnterInformation } from './components/EnterInformation';
import { capitalizeFirstLetter } from '../../utils';
import { useAuth } from '../../api/authentication';
import { VerifyAccount } from './components/VerifyAccount';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
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
  return ['Select Account Type', 'Enter Information', 'Verify Account', 'Finish'];
}


export default function SignupPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [nextButtonState, setNextButtonState] = useState(true)
  const [errorMessages, setErrorMessages] = useState(null)
  const [loading, toggleLoading] = useState(null)
  const steps = getSteps();
  const auth = useAuth()
  const [info, setInfo] = useState({
    role: '',
    role_id: '',
    ident_kind: 'mobile',
    mobile: '',
    email: '',
    password: '',
    country_code: '',
    verifyCode: ''
  })


  const handleChange = (obj) => {
    setInfo({ ...info, ...obj })
    setErrorMessages(null)
  }
  const setNextButtonStateFn = (state) => {
    setNextButtonState(state)
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <SelectAccount errorMessages={errorMessages} setNextButtonState={setNextButtonStateFn} userRole={info.role} handleChange={handleChange} useTo="Sign Up" />;
      case 1:
        return <EnterInformation values={info} errorMessages={errorMessages} setNextButtonState={setNextButtonStateFn} handleChange={handleChange} />;
      case 2:
        return <VerifyAccount type="signup" values={info} errorMessages={errorMessages} setNextButtonState={setNextButtonStateFn} handleChange={handleChange} />;
      default:
        return 'Unknown step';
    }
  }

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = async () => {
    if (activeStep == 1) {
      toggleLoading(true)
      try {
        var response = await auth.signup(info.ident_kind, info[info.ident_kind], info.password, info.role_id, info.country_code)
      } catch (errors) {
        toggleLoading(false)
        setErrorMessages(errors.message)
      }
    }
    if (activeStep == 2) {
      toggleLoading(true)
      try {
        var response = await auth.verifyCode(info.verifyCode)
        
      } catch (error) {
        toggleLoading(false)
        setErrorMessages(error)
      }

    }
    if (response || activeStep == 0) {
      toggleLoading(false)
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const setButtonLabel = () => {
    return loading ? <CircularProgress size="20px" style={{ color: 'white' }} /> : 'Next'
  }
  return (
    <Box>
      <HomePagesHeader page="Sign Up" />
      <Container maxWidth="md">
        <Box className={classes.root} mb={2}>
          {/* <div > */}
          <Box width={'100%'} display={{ xs: 'none', md: 'flex' }}>
            <Stepper style={{ width: '100%' }} activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (index == 0 && info.role) {
                  labelProps.optional = <Typography variant="body2">{capitalizeFirstLetter(info.role)}</Typography>;
                }
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
            {activeStep == steps.length-1 ? (
              <div>
                <Alert variant="filled" severity="success">
                  <Typography variant="h6" gutterBottom>Thanks for signing up. Welcome to our community. We are happy to have you on board.</Typography>
                  <Button variant="contained" color="primary" href="/home">Back To Home</Button>
                  &nbsp;<Button variant="contained" color="primary" href="/login">Go to Login</Button>
                </Alert>
              </div>
            ) : (
              <div>
                <Typography component={'div'} className={classes.instructions}> {getStepContent(activeStep)}</Typography>
                <div>
                  <Button disabled={activeStep == 0} onClick={handleBack} className={classes.button}>
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
          {/* </div> */}
        </Box>
      </Container>
    </Box>
  );
}