import React from 'react'
import { Box, Button, CircularProgress, Grid, Typography } from '@material-ui/core'
import { Map } from '@material-ui/icons'
import DirectionsIcon from '@material-ui/icons/Directions';
import { SvgEnvelope, SvgFaxSolid, SvgMapMarkedAltSolid, SvgPhoneAltSolid } from 'react-line-awesome-svg'
import { ContactItem } from './ContactItem'
import { useGetData } from '../../../hooks/useGetData';
import { getContactInfo } from '../../../api/public';

export const JobHuntOffice = () => {
    const [info, error, loading] = useGetData(getContactInfo)
    return (
        <Grid item xs={12} md={7}>
            <Box my={4}>
                <Typography variant="h6" gutterBottom>JobHunt Office</Typography>
                {info ?
                    <>
                        <ContactItem iconName={SvgMapMarkedAltSolid} detail={info?.address} />
                        <ContactItem iconName={SvgPhoneAltSolid} detail={info?.phone} />
                        <ContactItem iconName={SvgFaxSolid} detail={info?.fax} />
                        <ContactItem iconName={SvgEnvelope} detail={info?.email} />
                        <Grid container spacing={2}>
                            <Grid item xs={6} ><Button disabled startIcon={<Map />} size="large" fullWidth variant="contained" color="primary">See On Map</Button></Grid>
                            <Grid item xs={6}><Button disabled startIcon={<DirectionsIcon />} size="large" fullWidth variant="outlined" color="primary">Direction</Button></Grid>
                        </Grid>
                    </>
                    :
                    <Typography>Contact Info isn't Available</Typography>
                }
                { loading &&
                    <Box display={'flex'} height={'100%'} alignItems={'center'} justifyContent={'center'}>
                        <CircularProgress />
                    </Box>
                }
            </Box>
        </Grid>
    )
}
