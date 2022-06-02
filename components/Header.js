import { Button, Typography } from '@mui/material'
import React from 'react'
import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
        <Typography variant='h1' className={headerStyles.title}>
          <span>WebDev</span> News
        </Typography>
        <Typography className={headerStyles.description} variant='caption'>Keep up to date with the latest web dev news</Typography>
        <hr/>
        <br/>
    </div>
  )
}

export default Header