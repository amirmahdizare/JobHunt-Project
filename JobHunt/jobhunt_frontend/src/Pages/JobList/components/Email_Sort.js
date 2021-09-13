import React from 'react'
import { Box, Button, Grid, Typography } from '@material-ui/core'
import Jh_SelectMenu from '../../../components/Jh_SelectMenu'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
export const Email_Sort = () => {
    return (
        <Grid container alignItems="center"  spacing={1}>
            <Grid item xs={12} md={4}   >
                <Button fullWidth  variant="outlined" startIcon={<MailOutlineIcon color="action" />} href="/mailto"> Email me Jobs Like These</Button>
            </Grid>
            <Grid item xs={2} md={4} style={{textAlign:'right'}}>
                    <Typography  display="inline">Sort By</Typography>
            </Grid>
            <Grid item xs={5} md={2}>
                    <Jh_SelectMenu options={[
                        'Most Recent', 'Most Recent',
                    ]} />
            </Grid>
            <Grid item xs={5} md={2}>
                    <Jh_SelectMenu options={[
                        '30 Per Page',
                        '40 Per Page',
                        '50 Per Page',
                        '60 Per Page',
                    ]} />
            </Grid>
        </Grid>
    )
}
