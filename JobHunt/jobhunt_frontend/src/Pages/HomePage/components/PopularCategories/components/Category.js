import React from 'react'
import { Avatar, Card, Grid, Link, makeStyles, Typography } from '@material-ui/core'
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
        borderColor: 'gray',
        '& .MuiCardActionArea-focusHighlight': {
            background: 'white'
        },
        '& .icon': {
            fontSize: "70px",
            fill: theme.palette.primary.light
        },
        '& i':{
            color:theme.palette.primary.main,
            fontSize:'60px'
        },
        '&:hover': {
            backgroundColor: 'white !important',
            boxShadow: '0px 0px 25px rgba(0,0,0 , 0.15)',
            borderRadius: '8px',
            zIndex: 10,
            '& i': {
                color: theme.palette.secondary.main,
                transition: 'all 0.4s ease',

            },
            '& $defaultIcon': {
                backgroundColor: theme.palette.secondary.main,
                transition: 'all 0.4s ease',
            },
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
        width: '100%',
    },
    categoryStatus: {
        color: theme.palette.secondary.main,
        fontSize: '15px',
        marginTop: theme.spacing(2),
        width: '100%'
    },
    defaultIcon: {
        backgroundColor: theme.palette.primary.light,
        height: '70px',
        width: '70px',
        fontSize: "50px",


    },

}))
const Category = (props) => {
    const classes = useClasses(props);
    const  { title, openPositions, id,icon } = props

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} p={2} >
            <Card className={classes.root} component={Link} href={`/jobs?categoryId=${id}`} color="inherit" underline="none">
                <CardActionArea>
                    <CardContent className={classes.content}>
                        {icon && <i  className={classes.icon} class={icon}></i>}
                        {!icon && title && <Avatar className={classes.defaultIcon} >{title[0]}</Avatar>}
                        <Typography variant="h5" component="b" className={classes.categoryName} >{title}</Typography>
                        {openPositions ? <Typography variant="h6" className={classes.categoryStatus} >({openPositions}&nbsp;Open Positions</Typography> : null}
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}
export default Category