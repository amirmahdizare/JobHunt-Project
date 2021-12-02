import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import { Box, CircularProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundColor:'rgba(0,0,0,.3)'

        },
    },
    completed: {
        '& $line': {
            backgroundColor:'rgba(0,0,0,.3)'
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundColor: theme.palette.primary.main,
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {  
        backgroundColor: theme.palette.success.light
    },
}));

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <InfoOutlinedIcon />,
        2: <CreditCardOutlinedIcon />,
        3: <CheckCircleOutlineOutlinedIcon />,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed ,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin:theme.spacing(2),
        // padding:theme.spacing(2)
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
    return ['Job Information', 'Package & Payments', 'Done'];
}

export function PostJobStepper(props) {
    const classes = useStyles();
    const steps = getSteps();

     const {activeStep,handleBack,handleNext ,children,loading} = props
    return (
        <Box className={classes.root}>
            <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                {steps.map((label) => (
                    <Step key={label} >
                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div key="cc">{children}</div>
            <div>
                {activeStep >= steps.length - 1 ? (
                    <Alert severity="success" variant="filled">Job Added Successfully</Alert>
                ) : (
                        <Box my={2} display="flex" justifyContent="flex-end">
                            {loading && <CircularProgress/>}  
                            <Button disabled={activeStep === 0} onClick={()=> handleBack()} className={classes.button}>
                                Back
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={()=>handleNext()}
                                className={classes.button}
                            >
                              {/* Next */}
                                {activeStep == steps.length-2  ? 'Post Job' : 'Next' }
                            </Button>
                        </Box>
                )}
            </div>
        </Box>
    );
}