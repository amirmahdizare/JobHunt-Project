import { Box, CardMedia, CircularProgress, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import { useLanguage } from '../../../../LanguageProvider/Dev/useLanguage'
const useStyles = makeStyles((theme) => ({
    root: {
        background: 'rgba(0,0,0,.4)',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex:100
        
    },
    loading:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        position:'sticky',
        top:'35%',
        left:'50%',
        transform:'translateX(-50%)',
        width:'fit-content',
        padding:theme.spacing(5),
        borderRadius:theme.spacing(1),
        background:'white'
    },
    flag:{
        width:'90px',
        height:'70px',
        borderRadius:theme.spacing(1),
        marginBottom:theme.spacing(2)
    }
}))
export const LanguageLoading = () => {
    const classes = useStyles()
    const { loading } = useLanguage()
    return (
        <>
            {loading.status &&  <Box className={classes.root}>
                <Box className={classes.loading}>
                <CardMedia className={classes.flag} src={loading.targetLanguage?.url} component="img"/>
                <Typography variant='h6' gutterBottom>Loading {loading.targetLanguage?.suf.toUpperCase()}</Typography>
                <br/>
                <CircularProgress />
                </Box>
            </Box>}
        </>
    )
}
