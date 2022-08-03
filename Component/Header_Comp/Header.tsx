import React from 'react'
import styles from '../../styles/Header.module.scss';
// icons
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// MUI components
import { IconButton } from '@mui/material'

function Header() {
  return (
    <div className={styles.main}>
      <div className={styles.inner__main}>
        <IconButton color='inherit'>
          <MenuIcon />
        </IconButton>
        <p className={styles.logo__main}>Ztreaminx!</p>
      </div>
      <IconButton color='inherit'>
        <SearchIcon />
      </IconButton>
    </div>
  )
}

export default Header