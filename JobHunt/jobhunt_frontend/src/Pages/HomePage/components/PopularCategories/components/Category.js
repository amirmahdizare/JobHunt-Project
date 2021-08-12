import {Card ,Grid, makeStyles , Typography } from '@material-ui/core'
import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
const useClasses = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
        border: '0',
        boxShadow: 'unset',
        boxSixing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        transition: 'all 0.5s ease',
        borderColor:'gray',
        '& .MuiCardActionArea-focusHighlight': {
            background: 'white'
        },
        '& .icon': {
            fontSize: "70px",
            fill: theme.palette.primary.light
        },
        '&:hover': {
            backgroundColor: 'white !important',
            boxShadow: '0px 0px 25px rgba(0,0,0 , 0.15)',
            borderRadius: '8px',
            zIndex: 10,
            '& .icon': {
                fill: theme.palette.secondary.main,
                transition: 'all 0.4s ease'
            }

        }
    }, 
    content: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(3),
        
    },
    categoryName: {
        fontSize: '20px',
        fontWeight: '1000',
        marginTop: theme.spacing(2),
        width:'100%',
    },
    categoryStatus: {
        color: theme.palette.secondary.main,
        fontSize: '15px',
        marginTop: theme.spacing(2),
        width:'100%'
    }
}))
const Category = (props) => {
    const classes = useClasses(props);
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} p={2} >
            <Card className={classes.root} >
                <CardActionArea>
                    <CardContent className={classes.content}>
                        {props.icon}
                        <Typography variant="h5" component="b" className={classes.categoryName} >{props.title}</Typography>
                        <Typography variant="h6" className={classes.categoryStatus} >{props.status}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}
export default Category