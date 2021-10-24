import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import {logo} from '../asset/index'
const Jh_Logo1 = () => {
    return (
        <>
          <Button href="/home"><img src= {logo} /> </Button>
        </>
    )
}
export {Jh_Logo1}