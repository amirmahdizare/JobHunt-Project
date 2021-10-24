import { Box, Button, ButtonGroup, Grid, TextField, Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React, { useEffect } from 'react'
import { SvgMobileAltSolid, SvgUser } from 'react-line-awesome-svg'
import { capitalizeFirstLetter } from '../../../utils'
import { InputField } from '../../LoginPage/components/InputField'
import { SelectCountry } from '../../SignupPage/components/SelectCountry'

export const EnterUsername = ({ handleChange, values, setNextButtonState,errorMessages }) => {
    const { identifier, ident_kind, country_code } = values
    useEffect(() => setNextButtonState(values.identifier), [values])
    return (
        <Box display="flex" flexDirection="column" alignItems="center"  >
            <Typography variant="h5" align="center" >Enter Your Username ({capitalizeFirstLetter(ident_kind)})</Typography>
            &nbsp;
            <ButtonGroup >
                <Button color="secondary" onClick={() => handleChange({ ident_kind: 'email' })} variant={ident_kind == 'email' ? 'contained' : 'outlined'} disabled >Email</Button>
                <Button color="secondary" onClick={() => handleChange({ ident_kind: 'mobile' })} variant={ident_kind == 'mobile' ? 'contained' : 'outlined'}>Mobile</Button>
            </ButtonGroup>
            <Box mt={1} width={'100%'} >
                {values.ident_kind == 'mobile' ?
                    <Grid container spacing={1} alignItems="center">
                        <Grid item xs={12} md={4}  >
                            <SelectCountry country_code={country_code} handleChange={handleChange} />
                        </Grid>
                        <Grid item xs={4} md={2}>
                            <TextField
                                disabled
                                id="outlined-disabled"
                                label="Country Code"
                                variant="outlined"
                                value={country_code}
                                margin="normal"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={8} md={6}>
                            <InputField
                                title={capitalizeFirstLetter(ident_kind)}
                                value={identifier}
                                valueTitle='identifier'
                                handleChange={handleChange}
                               // error={errorMessages}
                                inputType={ident_kind=="mobile" ? 'number' :"text" }
                                required svgIcon={SvgMobileAltSolid}
                            />
                        </Grid>
                    </Grid>
                    : <InputField
                        title={capitalizeFirstLetter(ident_kind)}
                        value={identifier}
                        valueTitle='identifier'
                        handleChange={handleChange}
                       // error={errorMessages}
                        inputType="text"
                        required svgIcon={SvgUser}
                    />}
                    {errorMessages ? <Alert severity="error" variant="filled" >{  capitalizeFirstLetter(errorMessages)}</Alert> : null}

            </Box>
        </Box>
    )
}
