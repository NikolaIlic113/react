

import React from 'react'
import { BsFillPhoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div className='navigationBar'>
      <Link to="/">Pocetna</Link>
      <Link to="/pice">
        <BsFillPhoneFill />
      </Link>
      </div>
  )
}
	



export default NavigationBar