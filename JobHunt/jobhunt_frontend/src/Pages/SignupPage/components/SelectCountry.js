import React, { useEffect, useState } from 'react'
import { Avatar, CircularProgress, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import { getSingleCountryInfo, getValidCountriesToSignupDetail } from '../../../api/public'
import { generateImageURL } from '../../../api/OSS/minioAPI'
export const SelectCountry = ({ handleChange, country_code }) => {
    const [countriesDetail, setCountriesDetail] = useState([])
    const [countryinfo, setCountryInfo] = useState({
        id: null,
        name: null,
    })
    const [flag, setFlag] = useState(null)
    useEffect(() => {
        getValidCountriesToSignupDetail().then((data) => setCountriesDetail(data))
    }, [])
    useEffect(() => {
        setFlag(null)
        if (countriesDetail.length != 0 && countryinfo.id) {
            getSingleCountryInfo(countryinfo.name)
                .then(async (data) => {
                    if (data['flag'].length != 0)
                        setFlag(await generateImageURL(data['flag'][countryinfo.id]['path']))
                        else 
                        setFlag(countryinfo.name[0])
                }
                )
        }
    }, [countryinfo])
    return (
        <FormControl variant="outlined" fullWidth margin="normal" >
            <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
            <Select
                labelId="select-country-outlined-label"
                id="demo-simple-select-outlined"
                value={country_code}
                onChange={(event) => handleChange({ 'country_code': event.target.value })}
                label="Country"
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {countriesDetail != 0 ?
                    countriesDetail.map((country) => {
                        return <MenuItem
                            key={country.id}
                            onClick={() => setCountryInfo({ id: country.id, name: country.name })}
                            value={country.code}>
                            {country.code == country_code && flag && flag.length != 1
                                ? <img style={{ height: '20px', width: '20px',borderRadius:'50%', verticalAlign: 'middle' }} src={flag} />
                                : null}
                            {country.code == country_code && !flag
                                ? <CircularProgress style={{ verticalAlign: 'middle' }} size="20px" />
                                : null}
                            {country.code == country_code && flag && flag.length == 1
                                ? <Avatar sizes="small" style={{height:'20px',width:'20px',display:'inline-flex',verticalAlign:'middle',backgroundColor:'purple'}} color="" >{flag}</Avatar>
                                : null
                            }
                            &nbsp;&nbsp;{country.name}
                        </MenuItem>

                    })
                    : <CircularProgress style={{ margin: '10px' }} size="25px" />
                }
            </Select>
        </FormControl>
    )
}
