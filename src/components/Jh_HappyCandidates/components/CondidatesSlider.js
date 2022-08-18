import { React, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@material-ui/core";
import CandidateComment from "./CandidateComment";
import { makeStyles } from "@material-ui/core";
const useClasses = makeStyles(theme => ({
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
}))
export default function CondidatesSlider() {
  const [autoplay, setAutoplay] = useState(true)
  const classes = useClasses()
  var settings = {
    autoplay: autoplay,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    onInit: function () {
      document.getElementsByClassName('slick-dots')[0].onclick = () => setAutoplay(false)
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
          infinite: true,
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
  return (
    <Box m={2} className={classes.root} >
      <Slider {...settings} focusOnSelect>
        {/* <Box> */}
        <CandidateComment
          candidateAvatar="https://creativelayers.net/themes/jobhunt-html/images/resource/r2.jpg"
          candidateName="Ali Tufan"
          candidateJobTitle="Web Designer"
          candidateComment="Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything!  Can’t quite believe the service"
        />
        <CandidateComment
          candidateAvatar="https://creativelayers.net/themes/jobhunt-html/images/resource/r1.jpg"
          candidateName="Augusta Silva"
          candidateJobTitle="Web Designer"
          candidateComment="Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything!  Can’t quite believe the service"
        />
        <CandidateComment
          candidateAvatar="https://creativelayers.net/themes/jobhunt-html/images/resource/r2.jpg"
          candidateName="Ali Tufan"
          candidateJobTitle="Web Designer"
          candidateComment="Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything!  Can’t quite believe the service"
        />
        <CandidateComment
          candidateAvatar="https://creativelayers.net/themes/jobhunt-html/images/resource/r1.jpg"
          candidateName="Augusta Silva"
          candidateJobTitle="Web Designer"
          candidateComment="Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything!  Can’t quite believe the service"
        />
        <CandidateComment
          candidateAvatar="https://creativelayers.net/themes/jobhunt-html/images/resource/r2.jpg"
          candidateName="Ali Tufan"
          candidateJobTitle="Web Designer"
          candidateComment="Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything!  Can’t quite believe the service"
        />
        <CandidateComment
          candidateAvatar="https://creativelayers.net/themes/jobhunt-html/images/resource/r1.jpg"
          candidateName="Augusta Silva"
          candidateJobTitle="Web Designer"
          candidateComment="Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything!  Can’t quite believe the service"
        />
      </Slider>
    </Box>
  );
}