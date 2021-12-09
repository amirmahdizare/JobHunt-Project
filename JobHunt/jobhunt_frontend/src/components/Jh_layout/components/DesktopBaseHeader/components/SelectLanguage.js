import React, { useState } from 'react'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Link from '@material-ui/core/Link';
import { Avatar, Box, CircularProgress } from '@material-ui/core';

import { useLanguage } from '../../../../../LanguageProvider/Dev/useLanguage';

export const SelectLanguage = () => {
    const [open, setOpen] = useState(false)
    const handleToggle = () => setOpen(!open)
    const anchorRef = React.useRef(null);

    const { language, availableLanguages, setLanguage } = useLanguage()

    const handleChangeingLanguage = (targetLangauge) => {
        setLanguage(targetLangauge)

    }
    const makeCountries = () => {
        if (availableLanguages)
            return availableLanguages.filter((item) => item.title != language.title).map((country) =>
                <MenuItem key={country.title} onClick={handleToggle}>
                    <Link onClick={() => handleChangeingLanguage(country)} underline="none" >
                        {country.url
                            ? <Avatar variant="square" style={{ width: '2rem', height: '1.5rem' }} src={country.url} />
                            : <CircularProgress style={{ color: 'black',  width: '1.5rem', height: '1.5rem'}} />}

                    </Link>
                </MenuItem>
            )
        return <CircularProgress />
    }

    return (
        <Box
            onMouseLeave={handleToggle}
            onMouseEnter={handleToggle}
        >
            <Button
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                color="inherit"
                endIcon={<ExpandMoreIcon />}
            >
                {language.url
                    ? <Avatar variant="square" style={{ width: '2rem', height: '1.5rem' }} src={language.url} />
                    : <CircularProgress style={{color:'inherit', width: '1.5rem', height: '1.5rem'}} />
                }
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper >
                            <MenuList id="menu-list-grow" >
                                {makeCountries()}
                            </MenuList>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Box>
    )
}
