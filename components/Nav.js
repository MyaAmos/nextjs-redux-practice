import navStyles from '../styles/Nav.module.css'

import React from 'react'
import { Link } from '@mui/material'
import NewspaperIcon from '@mui/icons-material/Newspaper'; 

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
        <ul>
            <li>
                <NewspaperIcon />
            </li>
            <li>
                <Link href='/' color='black' underline='hover'>Home</Link>
            </li>
            <li>
                <Link href='/about' color='black' underline='hover'>About</Link>
            </li>
            <li>
                <Link href='/posts' color='black' underline='hover'>Posts</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav