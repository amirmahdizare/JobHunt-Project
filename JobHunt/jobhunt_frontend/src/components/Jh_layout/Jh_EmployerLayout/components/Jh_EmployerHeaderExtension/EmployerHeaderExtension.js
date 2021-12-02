import React from 'react'
import { Jh_Avatar } from '../../../../UserAvatar'
import { Jh_PopperMenu } from './components/Jh_PopperMenu'
import { EmployerMenu } from '../../../../EmployerMenu'
import { Box, ThemeProvider, createTheme, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
const useStyles = makeStyles((theme) => ({
    postJobButton: {
        borderRadius: '40px',
        border: '2px solid #fb236a',
        textTransform: 'none',
        boxSizing: 'border-box',
        transition: 'all 0.4s ease 0s',
        padding: ' 8px 22px',
        '&:hover': {
            backgroundColor: '#fb236a',
            color: 'white',
            boxShadow: 'none',
            transform: 'none',
            border: '2px solid #fb236a',
        },
    }
}));
export const EmployerHeaderExtension = () => {
    const classes = useStyles()
    return (
        <ThemeProvider theme={() => createTheme({ typography: { fontFamily: 'QUICKSAND' } })} >
            <Box display="flex" alignItems="center">
                <Button
                    size="large"
                    className={classes.postJobButton}
                    variant={window.pageYOffset == 0 ? "contained" : "outlined"}
                    color="secondary"
                    startIcon={<AddOutlinedIcon />}
                    href="/dashboard/postjob"
                >
                    <Typography variant="body1"> Post Jobs</Typography>
                </Button>&nbsp;&nbsp;
                <Jh_Avatar src="https://creativelayers.net/themes/jobhunt-html/images/resource/profile.jpg" size="medium" name="Tera Planer" />
                <Jh_PopperMenu employerName="Tara Planer" />

            </Box>
        </ThemeProvider>
    )
}
