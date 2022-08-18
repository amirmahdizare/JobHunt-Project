import { Card, CardActionArea ,Grid} from '@material-ui/core'
import React from 'react'
export default function Company(props) {
    return (
        <Grid item xs={4} sm={3} md={2} >
            {/* props.href will be use for Link */}
            <Card style={{borderRadius:'unset'}}  elevation='0'>
                <CardActionArea >
                    <img style={{width:'100%',height:'85px'}} src={props.logo}/>
                </CardActionArea>
            </Card>
        </Grid>
    )
}
