import { Box, Grid, Grow, TextField } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React, { useEffect } from 'react'
import { SvgKeySolid, SvgUser } from 'react-line-awesome-svg'
import { capitalizeFirstLetter } from '../../../utils'
import { InputField } from '../../LoginPage/components/InputField'
import { SelectCountry } from './SelectCountry'

const EnterInformation = ({ handleChange, values, setNextButtonState, errorMessages }) => {
    useEffect(() => {
        setNextButtonState(values.country_code && values[values.ident_kind]  && errorMessages == null)
    })
    return (
        <Box my={2}>
            {values.ident_kind == 'mobile'
                ? <Grid container spacing={1} alignItems="center">
                    <Grid item xs={12} md={3} >
                        <SelectCountry country_code={values.country_code} handleChange={handleChange} />
                    </Grid>
                    <Grid item xs={3} md={2}>
                        <TextField
                            disabled
                            id="outlined-disabled"
                            label="Country Code"
                            variant="outlined"
                            value={values.country_code}
                            // margin="none"
                            fullWidth
                            
                        />
                    </Grid>
                    <Grid item xs={9} md={7}>
                        <InputField
                            title={`${capitalizeFirstLetter(values.ident_kind)} (Username)`}
                            value={values.mobile}
                            valueTitle='mobile'
                            error={errorMessages?.[values.ident_kind]}
                            handleChange={handleChange}
                            helperText="Number Must Start Without 0"
                            inputType="number"
                            required svgIcon={SvgUser}
                        />
                    </Grid>
                </Grid>

                : <InputField
                    title={`${capitalizeFirstLetter(values.ident_kind)} (Username)`}
                    value={values.email}
                    valueTitle='email'
                    error={errorMessages?.[values.ident_kind]}
                    helperText="Example : Example@gmail.com"
                    handleChange={handleChange}
                    inputType="text"
                    required svgIcon={SvgUser}
                />
            }

            <InputField
                title="Password (Optional) "
                value={values.password}
                valueTitle='password'
                error={errorMessages?.['password']}
                handleChange={handleChange}
                helperText="At Least 8 Digit"
                inputType="password"
                required svgIcon={SvgKeySolid}
                margin="normal"
            />
            <Grow
                key='12'
                in={true}
                style={{ transformOrigin: '0 0 0' }}
                timeout={{ appear: 200, enter: 300, exit: 600 }}
            >
                <div>
                    {errorMessages && typeof errorMessages == 'string' ? <Alert severity="warning" variant="filled">{capitalizeFirstLetter(errorMessages)}</Alert> : null}
                </div></Grow>
        </Box>
    )
}
export { EnterInformation }