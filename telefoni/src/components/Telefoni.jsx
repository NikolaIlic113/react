import React from 'react'
import Telefon from './Telefon.jsx'

const Telefoni = ({przi}) => {
  return (
    <div className='telefoni'>

{przi.map((prod) => (
        <Telefon pr = {prod} br = {prod.amount} key={prod.id}/>
      ))}
        {}
    </div>
  )
}
	

export default Telefoni