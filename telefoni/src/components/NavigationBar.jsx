

import React from 'react'
import { BsFillPhoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";

function NavigationBar() {
  return (
    <div className='navigationBar'>
      <Link to="/">Pocetna</Link>
      <Link to="/pice" className='ikonica'>
        <BsFillPhoneFill />
      </Link>
      <Link to="/korpa" className='ikonica'>
        <BsCartFill />
      </Link>
      </div>
  )
}
	



export default NavigationBar