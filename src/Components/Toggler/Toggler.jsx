import React from 'react'
import "./Toggler.css"
import Sun from "@iconscout/react-unicons/icons/uil-sun"
import Moon from "@iconscout/react-unicons/icons/uil-moon"
import { themeContext } from '../../ThemeChanger'
import { useContext } from 'react'

const Toggler = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const handleClick = () =>
    {
        theme.dispatch({type : "toggle"})
    }
  return (
    <div className="toggle" onClick = {handleClick}>
        <Moon/>
        <Sun/>
        <div className="toggleButton"
        style={darkMode? {left : "2px"} : {right : "2px"}}></div>
    </div>
  )
}

export default Toggler