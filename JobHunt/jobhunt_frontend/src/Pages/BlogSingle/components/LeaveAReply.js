import { Avatar, Box, Button, Chip, CircularProgress, Grid, TextField, Typography } from '@material-ui/core'
import React, {  useState } from 'react'
import { useForm } from 'react-hook-form'
import { postComment } from '../../../api/employer';
import { Alert } from '@material-ui/lab'
import useLoading from '../../../hooks/useLoading';
export const LeaveAReply = (props) => {
    const { id, replyComment, handelReplyComment } = props
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [alert, setAlert] = useState({
        status: null,
        severity: "",
        message: ""
    })
    const { isLoading, toggleLoading } = useLoading()
    const onSubmit = (data) => {
        toggleLoading()
        postComment(data, id, replyComment?.id)
            .then((res) => {
                if (res.code === 200) {
                    setAlert({
                        status: true,
                        severity: 'success',
                        message: res.message
                    })

                }
                else {
                    setAlert({
                        status: true,
                        severity: 'error',
                        message: 'error'
                    })
                }
                console.log(res, "res")
            })
            .catch((error) =>
                setAlert({
                    status: true,
                    severity: 'error',
                    message: error.message
                })
            )
            .finally(() => toggleLoading())
    }


    const handleDelete = () => {
        handelReplyComment(null)
    };
    return (
        <Box my={3} id="leaveAReply">
            <Box display="flex" my={3} justifyContent="space-bettwen">
                <Typography variant="h6">{replyComment ? "Reply To :" : "Enter your comment :"}</Typography>
                {replyComment &&
                    <>
                        <Chip
                            style={{ marginLeft: '0.5rem' }}
                            onDelete={handleDelete}
                            avatar={<Avatar src={replyComment.avatarSrc} />}
                            label={replyComment.name}
                        />
                    </>


                }
            </Box>
            <br />
            <Grid container spacing={3} >
                <Grid item xs={12} md={8}>
                    <TextField
                        error={errors.comment ? true : false}
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={5}
                        variant="outlined" fullWidth
                        {...register("comment", { required: "please enter message" })}
                        helperText={errors.comment ? errors.comment.message : null}
                    />
                </Grid>
                <Grid item xs={12} md={8} justifyContent="center">
                    <Box display="flex" justifyContent="center">
                        {isLoading && <CircularProgress />}

                    </Box>
                    {!isLoading &&
                        <Button
                            onClick={handleSubmit(onSubmit)}
                            color="secondary"
                            fullWidth size="large"
                            variant="contained" ><Typography>Send </Typography>
                        </Button>
                    }
                    {alert.status &&
                        <Alert
                            style={{ transition: 'all 0.4s ease 0.1s', marginTop: '0.5rem' }}
                            elevation={4}
                            variant="filled"
                            severity={alert.severity}>{alert.message}</Alert>
                    }
                </Grid>
            </Grid>

        </Box>
    )
}
