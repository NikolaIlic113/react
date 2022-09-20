import React from 'react'
import Telefon from './Telefon.jsx'

const Telefoni = ({przi, dodaj, oduzmi}) => {
  return (
    <div className='telefoni'>

{przi.map((prod) => (
        <Telefon pr = {prod} key={prod.id} dodaj={dodaj} oduzmi = {oduzmi} kor={0}/>
      ))}
        {}
    </div>
  )
}
	

export default Telefoni