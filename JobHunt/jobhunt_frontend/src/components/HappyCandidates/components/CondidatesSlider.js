import { React, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, CircularProgress, Typography } from "@material-ui/core";
import CandidateComment from "./CandidateComment";
import { makeStyles } from "@material-ui/core";
import { getExperiences } from "../../../api/public";
import { useGetData } from "../../../hooks/useGetData";
const useClasses = makeStyles({
  root: {
    '& .slick-dots li':
    {
      border: '1px solid white',
      borderRadius: '50%',
      height: '10px',
      padding: '4px',
      width: '10px',
    },
    '& .slick-dots li button:before': {
      color: 'white',
      content: 'unset',
      position: 'unset',
    },
    '& .slick-active button': {
      backgroundColor: 'white',
      borderRadius: '50%',
    },
    '& .slick-dots  button': {
      width: '100%',
      height: '100%'
    }
  }
})
export default function CondidatesSlider() {
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
    ]
  };

  const [experiences, error, loading] = useGetData(getExperiences)
  return (
    <Box m={2} className={classes.root} >
      {experiences &&

        < Slider {...settings} focusOnSelect>
          {/* <Box> */}
          {experiences.map((exp) =>
            <CandidateComment
              key={exp.id}
              candidateName={exp.user_info?.first_name + ' '+ exp.user_info?.last_name }
              candidateComment={exp.description}
              candidateAvatar={exp.image}
            />

          )}


          {/* <CandidateComment
          candidateAvatar="https://creativelayers.net/themes/jobhunt-html/images/resource/r2.jpg"
          candidateName="Ali Tufan"
          candidateJobTitle="Web Designer"
          candidateComment="Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything!  Can’t quite believe the service"
        /> */}
        </Slider >
      }
      < Box display="flex" alignItems="center" justifyContent="center">
        {experiences?.length == 0 && <Typography>No experiences Found</Typography>}
        {!experiences && loading && <CircularProgress />}

      </Box>
    </Box >
  );
}
