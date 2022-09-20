

import React from 'react'

function Telefon({pr, br}) {
  return (
    <div className='kartica'>  
      <img classname = "kartica-slika" src = "https:/picsum.photos/200" alt= "SLika"></img>
      <div className="kartica-body">
        <h3 className="kartica-naslov">{pr.model}</h3>
        <p className="kartica-specifikacije">{pr.specifikacije}</p>
        <p className="kartica-specifikacije">{br}</p>
      </div>
      <button className="btn">+</button>
      <button className="btn">-</button>
      </div>
  )
}

export default Telefon