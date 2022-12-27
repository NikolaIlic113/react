

import React from 'react'
import { BsFillPhoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { AiOutlineMobile } from "react-icons/ai";

function NavigationBar() {
  return (
    <div className='navigationBar'>
      <Link to="/">Početna</Link>
      <Link to="/skup" className='ikonica'>
        <BsFillPhoneFill />
      </Link>
      <Link to="/jeftin" className='ikonica'>
        <AiOutlineMobile />
      </Link>
      <Link to="/korpa" className='ikonica'>
        <BsCartFill />
      </Link>
      </div>
  )
}
	



export default NavigationBar