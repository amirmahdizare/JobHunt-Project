import React, { useEffect, useState } from 'react'
import { alpha, Box, Button, CircularProgress, FormControl, FormHelperText, Grid, InputBase, InputLabel, makeStyles, OutlinedInput, TextareaAutosize, TextField, Typography, withStyles } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { postContactUs } from '../../../api/public'
import useLoading from '../../../hooks/useLoading'
import { useForm } from 'react-hook-form'

import useValidate from '../../../hooks/useValidate'

const useStyles = makeStyles(theme => ({
    alert: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3)
    },
    input: {
        float: "left",
        width: '100%',
        border: '2px solid #e8ecec',
        marginBottom: '5px',
        borderRadius: '8px',
        padding: '12px 45px 12px 15px',
        background: '#ffffff',
        fontSize: ' 13px',
        color: '#101010',
        lineHeight: ' 24px',
        "&:focus": {
            border: '2px solid blue',
        }
    },
    label: {
        float: 'left',
        width: '100%',
        color: '#202020',
        marginBottom: '13px',
    }
}))

export const KeepInTouch = () => {
    const classes = useStyles()
    const [alert, setAlert] = useState({
        status: false,
        massage: '',
        severity: '',
    })

    const { isLoading, toggleLoading } = useLoading()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { emailRegex } = useValidate()

    const onSubmit = (data) => {
        toggleLoading()
        postContactUs(data)
            .then((response) => {
                const res = response[0]
                if (res.code == 200) {
                    setAlert({
                        status: true,
                        massage: res.message,
                        severity: 'success'
                    })
                }
            })
            .catch((err) =>
                setAlert({
                    status: true,
                    massage: "Something went wrong!",
                    severity: 'error'

                }))
            .finally(() => toggleLoading())
    }


    return (
        <Grid item xs={12} md={5}>

            <Box my={4} >
                <Typography variant="h6" gutterBottom>Keep In Touch</Typography>
                <Box display="flex" flexDirection="column" style={{ marginBottom: '0.5rem' }}>
                    <InputLabel className={classes.label} shrink  >FullName</InputLabel>
                    <InputBase
                        style={{ flex: 1 }}
                        placeholder='fullName'
                        className={classes.input}
                        {...register("full_name", {
                            required: 'Please Enter FullName'

                        })}
                    />
                    {errors.full_name && <Typography color="error" variant="body2" gutterBottom>{errors.full_name.message}</Typography>}
                </Box>

                <Box display="flex" flexDirection="column" style={{ marginBottom: '0.5rem' }}>
                    <InputLabel className={classes.label} shrink >Email</InputLabel>
                    <InputBase
                        placeholder="email"
                        className={classes.input}
                        {...register("email", {
                            required: 'Please Enter Email',
                            pattern: {
                                value: emailRegex,
                                message: 'The entered email is not valid'
                            }
                        })}

                    />
                    {errors.email && <Typography color="error" variant="body2" gutterBottom>{errors.email.message}</Typography>}
                </Box>

                <Box display="flex" flexDirection="column" style={{ marginBottom: '0.5rem' }}>
                    <InputLabel className={classes.label} shrink  >Subject</InputLabel>
                    <InputBase
                        placeholder="subject"
                        className={classes.input}
                        {...register("subject", {
                            required: 'Please Enter Subject',
                        })}
                    />
                    {errors.subject && <Typography color="error" variant="body2" gutterBottom>{errors.subject.message}</Typography>}

                </Box>

                <Box display="flex" flexDirection="column" style={{ marginBottom: '0.5rem' }}>
                    <InputLabel className={classes.label} shrink  >Message</InputLabel>
                    <InputBase
                        multiline
                        rows={4}
                        placeholder="message"
                        className={classes.input}
                        {...register("message", {
                            required: 'Please Enter Message',
                        })}

                    />
                    {errors.message && <Typography color="error" variant="body2" gutterBottom>{errors.message.message}</Typography>}

                </Box>
                {isLoading &&
                    <Box display="flex" justifyContent="center" width="100%">
                        <CircularProgress />
                    </Box>
                }
                {!isLoading &&
                    <Button
                        size="large"
                        variant="contained"
                        color="secondary"
                        fullWidth
                        onClick={handleSubmit(onSubmit)}
                        disabled={isLoading}
                    >Send</Button>
                }
                {alert.status &&
                    <Alert
                        className={classes.alert}
                        variant="filled"
                        margin="normal"
                        severity={alert.severity}>Your Message Successfully Sent , Thanks For Your Feedback! </Alert>
                }
            </Box>
        </Grid >
    )
}
