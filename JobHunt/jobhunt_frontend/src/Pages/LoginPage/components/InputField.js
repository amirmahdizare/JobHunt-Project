import React from 'react'
import { Box, FormControl, Grow, InputAdornment, InputLabel, makeStyles, OutlinedInput } from '@material-ui/core'
import { LineAwesome } from 'react-line-awesome-svg'
import { Alert } from '@material-ui/lab'
import { capitalizeFirstLetter } from '../../../utils'
const useStyles = makeStyles(theme => ({
    icon: {
        fontSize: theme.typography.h6.fontSize,
        fill: '#303f9f'
    }
}))
export const InputField = ({ formState, title, valueTitle, inputType, svgIcon, value, handleChange, required, helperText,error,onKeyDown, ...props }) => {
    const classes = useStyles()
    const iconStyle = () => {
        if (error)
            return { fill: '#f44336' }
        return { fill: '#303f9f' }
    }
    return (
        <Box>
            <FormControl error={error} fullWidth color="primary" margin="normal" variant="outlined" {...props}>
                <InputLabel htmlFor="outlined-adornment-username">{title}</InputLabel>
                <OutlinedInput
                    type={inputType || 'text'}
                    value={value}
                    label={title}
                    placeholder={helperText}
                    onChange={(e) => handleChange({ [valueTitle]: e.target.value })}
                    onKeyDown={onKeyDown}
                    endAdornment={
                        <InputAdornment position="end">
                            <LineAwesome className={classes.icon} style={iconStyle(valueTitle)} fontSize="inherit" icon={svgIcon} />
                        </InputAdornment>
                    }
                    labelWidth={70}
                />
            </FormControl >
            <Grow
                in={true}
                style={{ transformOrigin: '0 0 0' }}
                timeout={{ appear: 400, enter: 500, exit: 700 }}
            >
                <div>
                    {error? <Alert severity="error" variant="filled" >{ error.map((item) => capitalizeFirstLetter(item)).join(' & ')}</Alert> : null}
                </div>
            </Grow>
        </Box>
    )
}