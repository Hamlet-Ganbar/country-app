import React, { useState, useEffect } from 'react'
import DarkMode from '../DarkMode/DarkMode'
import './Header.css'
import LightMode from '../LightMode/LightMode'
import {  Outlet } from 'react-router-dom'

function Header() {
  const [mode, setMode] = useState(true)
  const [theme, setTheme] = useState("light")
  const modeHandler = () => {
    setMode(!mode)
    if(theme=="light"){
      setTheme('dark')
    }
    else{
      setTheme('light')
    }
  }
 
  return (
    <header>
      <div className={`head ${theme}`}>
        <div className='containerr py-4 d-flex align-items-center justify-content-between align'>
          <h2> <a href="/">Country finder </a> </h2>
          <div onClick={modeHandler} className="mode">
            {mode ? <LightMode /> : <DarkMode />}
          </div>
        </div>
      </div>
      <Outlet />
    </header>

  )
}

export default Header