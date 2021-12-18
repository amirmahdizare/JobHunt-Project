import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, CircularProgress, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { getBlogs, } from "../../../api/public";
import { useGetData } from '../../../hooks/useGetData'
import Tip from "./Tip";
import { useState } from "react";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
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
    '& .slick-dots li':
    {
      border: `1px solid ${theme.palette.secondary.main}`,
      borderRadius: '50%',
      height: '10px',
      width: '10px',
      padding: '4px',
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
export default function TipsSlider() {
  const [config, setConfig] = useState({
    autoplay: true,
    infinite: true
  })
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
    nextArrow: <ArrowForwardIcon />,
    prevArrow: <ArrowBackIcon />,
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


  };

  const [tips, error, loading] = useGetData(getBlogs)
  return (
    <Container maxWidth="lg" className={classes.root} >

      {tips &&

        <Slider {...settings} focusOnSelect>

          {tips.map(tip => (
            <Tip
              key={tip.id}
              id={tip.id}
              date={tip.date}
              description={tip.caption}
              image={tip.image}
              // numberOfComments={0}
              title={tip.title}
            />
          ))}
        </Slider >
      }
      < Box display="flex" alignItems="center" justifyContent="center">
        {tips?.length == 0 && <Typography>No tips Found</Typography>}
        {!tips && loading && <CircularProgress />}

      </Box>

    </Container>

  );
}
