import { Box, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
 const Jh_CountDownComponent = ({minute}) => {
     const [countDown, setCountDown] = useState(0);
     const [runTimer, setRunTimer] = useState(false);

     useEffect(() => {
        let timerId;
    
        if (runTimer) {
          setCountDown(60 * minute);
          timerId = setInterval(() => {
            setCountDown((countDown) => countDown - 1);
          }, 1000);
        } else {
          clearInterval(timerId);
        }
    
        return () => clearInterval(timerId);
      }, [runTimer]);
    
      useEffect(() => {
        if (countDown < 0 && runTimer) {
          setRunTimer(false);
          setCountDown(0);
        }
      }, [countDown, runTimer]);
    
      const togglerTimer = () => setRunTimer((t) => !t);
      useEffect(()=>{
        togglerTimer()
      },[])
      const seconds = String(countDown % 60).padStart(2, 0);
      const minutes = String(Math.floor(countDown / 60)).padStart(2, 0); 
    return (
        <Box>
           <Typography> {minutes}:{seconds}</Typography>
        </Box>
    )
}
export const Jh_CountDown = React.memo(Jh_CountDownComponent)