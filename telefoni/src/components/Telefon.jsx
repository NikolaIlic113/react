import React from 'react'



function Telefon({pr, dodaj, oduzmi}) {
  return (
    <div className='kartica'>  
      <img classname = "slika" src = "https:/picsum.photos/200" alt= "SLika"></img>
      <div className="kartica-body">
        <h3 className="kartica-naslov">{pr.model}</h3>
        <p className="kartica-sastojci">{pr.specifikacije}</p>
        <p className="kartica-sastojci">Cena: {pr.cena}</p>
        <p className="kartica-sastojci">Kolicina: {pr.kolicina}</p>
      </div>
      <button
            className="btn"
            onClick={() => dodaj(pr.id)}
          > + </button>
      <button
            className="btn"
            onClick={() => oduzmi(pr.id)}
          > - </button>
      </div>
  )
}

export default Telefon