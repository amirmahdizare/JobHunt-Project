import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import DeleteIcon from '@material-ui/icons/Delete';
import { noImage } from '../../../../../../../asset';
import { generateImageURL } from '../../../../../../../api/OSS/minioAPI';
export const EmployerLogo = ({ logo, handleChange, mode }) => {
    const [logoState, setLogoState] = useState('notSet')
    const [preview, setPreview] = useState('')
    console.log( logo)
    //console.log(URL.createObjectURL(logo))
    useEffect(() => {
        if (!logo) {
            setPreview(undefined)
            return
        }
        if (logo['name']) {
            const objectUrl = URL.createObjectURL(logo)
            setPreview(objectUrl)

            // free memory when ever this component is unmounted
            return () => URL.revokeObjectURL(objectUrl)
        }
        else {
            generateImageURL('jobhunt', Object.values(logo)[0]).then((url) => setPreview(url))
        }
    }, [logo])
    return (
        <Box >
            <Card>
                <CardContent style={{ padding: '8px' }}>
                    <CardMedia
                        component="img"
                        src={preview
                            ? preview
                            : noImage
                        }
                        height="300px"
                    />
                    {/* {logo} */}
                </CardContent>
                <Divider light />
                <CardActions>
                    <Button
                        variant="contained"
                        component="label"
                        color="primary"
                        fullWidth
                        style={{ textTransform: 'none' }}
                        startIcon={<AddAPhotoIcon />}
                    >
                        Add Logo
                        <input
                            type="file"
                            hidden
                            onChange={(e) => { if (!!e.target.files.length) { handleChange('logo', e.target.files[0]); setLogoState('added') } }}
                        />
                    </Button>
                    <Button
                        color="secondary"
                        variant="contained"
                        fullWidth
                        disabled={!preview}
                        style={{ textTransform: 'none' }}
                        onClick={() => { handleChange('logo', null); setPreview(undefined) }}
                        startIcon={<DeleteIcon />}
                    >
                        Remove Logo
                    </Button>
                </CardActions>
            </Card>
        </Box >
    )
}
