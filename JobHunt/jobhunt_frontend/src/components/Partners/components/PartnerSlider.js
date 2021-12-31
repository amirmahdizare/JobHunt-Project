import { React, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, CircularProgress, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { getPartners } from "../../../api/public";
import { useGetData } from "../../../hooks/useGetData";
import Company from './Company'

const useClasses = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        padding: theme.spacing(5),
        '& .slick-arrow ': {
            color: theme.palette.secondary.main,

        },
        '& .slick-arrow:hover': {
            color: theme.palette.secondary.main,
        },
        '& .slick-arrow:before ': {
            color: theme.palette.secondary.main,

        },
        '& .slick-dots li':
        {
            border: `1px solid ${theme.palette.secondary.main}`,
            borderRadius: '50%',
            height: '10px',
            width: '10px',
            padding: '2px',
        },
        '& .slick-dots li button:before': {
            color: 'white',
            content: 'unset',
            position: 'unset',
        },
        '& .slick-dots .slick-active button': {
            backgroundColor: theme.palette.secondary.main,
            borderRadius: '50%',
        },
        '&  .slick-dots  button': {
            width: '100%',
            height: '100%'
        }
    }
}))
export default function PartnerSlider() {
    const [config, setConfig] = useState({
        autoplay: true,
        infinite: true
    })

    const [isLoadMore, setIsLoadMore] = useState(false)

    const afterChange = (current) => {
        let slick_active = document.querySelectorAll('#partner .slick-track > .slick-active');
        let slick_slide = document.querySelectorAll('#partner .slick-track > .slick-slide');
        if (current === slick_slide.length - slick_active.length) setIsLoadMore((prev) => !prev)
    };
    const classes = useClasses()
    var settings = {
        autoplay: config.autoplay,
        autoplaySpeed: 2000,
        dots: true,
        infinite: config.infinite,
        onInit: function () {
            if (document.getElementsByClassName('slick-slide').length > 3) {
                document.getElementsByClassName('slick-dots')[0].onclick = () => setConfig({ ...config, autoplay: false })
            }
            else {
                setConfig({ ...config, infinite: false })
            }
        },
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: config.infinite,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ],
        afterChange

    };
    const [page, setPage] = useState(1)
    const params = { page: page, pagination_size: 4 }

    const [data, error, loading] = useGetData(getPartners, params)

    const { pages } = data || 1
    const [partners, setPartners] = useState([])


    useEffect(() => {
        if (data && data.partners) setPartners((prev) => ([...prev, ...data.partners]))

    }, [data])
    useEffect(() => {
        if (pages > page) setPage((prev) => prev + 1)

    }, [isLoadMore])
    return (

        <Container maxWidth="lg" className={classes.root} id="partner">
            {partners &&
                <Slider {...settings} focusOnSelect>
                    {
                        partners.map((partner) =>
                            <Company logo={partner.logo} link={partner?.link} title={partner.name} />
                        )}
                </Slider >
            }
            < Box display="flex" alignItems="center" justifyContent="center">
                {data?.length == 0 && <Typography>No partners Found</Typography>}
                {!data && loading && <CircularProgress />}

            </Box>
        </Container>
    );
}
