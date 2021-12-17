import { Box, Card, CardMedia, Grid, Link,makeStyles ,Typography } from '@material-ui/core'
import React from 'react'

const photos = [
    { url: 'https://creativelayers.net/themes/jobhunt-html/images/resource/op1.jpg', href: '#' },
    { url: 'https://creativelayers.net/themes/jobhunt-html/images/resource/op2.jpg', href: '#' },
    { url: 'https://creativelayers.net/themes/jobhunt-html/images/resource/op3.jpg', href: '#' },
    { url: 'https://creativelayers.net/themes/jobhunt-html/images/resource/op4.jpg', href: '#' },
    { url: 'https://creativelayers.net/themes/jobhunt-html/images/resource/op5.jpg', href: '#' },
    { url: 'https://creativelayers.net/themes/jobhunt-html/images/resource/op6.jpg', href: '#' },

]
const useStyles=makeStyles(theme=>({
    image:{
        borderRadius:theme.spacing(1),
        [theme.breakpoints.up('sm')]:{
          height:'75px'  
        }
    }
}))
export const OurPhoto = () => {
    const classes=useStyles()
    return (
        <Box my={2}>
            <Typography variant="h6">Our Photos</Typography>
            <Box my={1}>
                <Grid container spacing={1} >
                {photos.map((photo) => (
                    <Grid item xs={12} sm={6} md={4}  >
                        <Card component={Link} href={photo.href}  >
                            <CardMedia component="img" className={classes.image}  image={photo.url}  />
                        </Card>
                    </Grid>
                ))}
                
            </Grid>
            </Box>
        </Box>


    )
}
