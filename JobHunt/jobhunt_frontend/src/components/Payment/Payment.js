import { Box, Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@material-ui/core'
import React from 'react'
import { PaymentMethodLogo } from './components/PaymentMethodLogo'
import { applepay, visa, paypal, unionpay, bluechinese } from '../../asset'

export const Payment = () => {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <Box m={2} width={1}>
            <FormControl component="fieldset" fullWidth>
                <Typography gutterBottom color='textSecondary' variant='h6'>Select Payment Method</Typography>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <Card elevation={1}>
                        <CardContent>
                            <FormControlLabel value="card" control={<Radio />} label="Card" />
                            <Typography gutterBottom variant='body2' color='textSecondary'>Secure money transfer with your bank account. Select the port you want below:</Typography>
                            &nbsp;
                            <Box>
                                <PaymentMethodLogo img={visa} />
                                <PaymentMethodLogo img={bluechinese} />
                                <PaymentMethodLogo img={unionpay} />
                                <PaymentMethodLogo img={applepay} />
                            </Box>
                        </CardContent>
                    </Card>
                    &nbsp;
                    <Card elevation={1}>
                        <CardContent>
                            <Box display={'flex'} flexWrap={'wrap'} mr={4} alignItems={'center'} justifyContent={'space-between'}>
                            <Box width={2/3}>
                                <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
                                <Typography gutterBottom variant='body2' color='textSecondary'>PayPal is the faster, safer way to send money, make an online payment, receive money. Account not needed.</Typography>
                                &nbsp;
                            </Box>
                            <Box >
                                <PaymentMethodLogo img={paypal} />
                            </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </RadioGroup>
            </FormControl>
            <Button style={{margin:'8px 0 '}} variant='contained' color='primary'>Pay</Button>
        </Box >
    )
}
