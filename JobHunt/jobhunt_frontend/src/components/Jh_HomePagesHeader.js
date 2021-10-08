import React, { useEffect } from 'react'
import { Box, Breadcrumbs, Container, Link, makeStyles, Typography } from '@material-ui/core'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
const useStyles = makeStyles(theme => ({
    container: {
        alignItems:'center',
        display:'flex',
        justifyContent:'space-between',
        paddingTop:theme.spacing(14),
        paddingBottom:theme.spacing(5),
        [theme.breakpoints.down('sm')]:{
            alignItems:'center',
            justifyContent:'space-around',
            flexDirection:'column',
            textAlign:'center',
            padding:theme.spacing(5)
        }
    },
    root:{
        backgroundColor:'#f4f5fa',
    }
}))
 const Jh_HomePagesHeaderComponent = ( {page ,description}) => {
    // const {page ,description} = props
    useEffect(()=>{
            window.pageYOffset=1
            window.scrollTo(0,1)
    }) 
    const classes = useStyles()
    return (
        <Box  className={classes.root} >
            <Container maxWidth="lg" className={classes.container}>
            <Box>
                <Typography variant="h4">{page}</Typography>
                <Typography color="textSecondary">{description}</Typography>
            </Box>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                <Link underline="none"  color="inherit" href="/" >
                    Home
                </Link>
                {/* <Link underline="none" color="inherit" href="/" > */}
                    <Typography> Pages</Typography>
                {/* </Link> */}
                <Typography color="textPrimary">{page}</Typography>
            </Breadcrumbs>
        </Container>
        </Box>
    )
}
export const Jh_HomePagesHeader=React.memo(Jh_HomePagesHeaderComponent)