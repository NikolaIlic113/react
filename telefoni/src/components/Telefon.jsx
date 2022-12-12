import React from 'react'
import samsung from 'D:/Faks/4. godina/iteh/domaci3/telefoni/src/slike/1.jpg';
import nokia from 'D:/Faks/4. godina/iteh/domaci3/telefoni/src/slike/2.jpg';
import apple from 'D:/Faks/4. godina/iteh/domaci3/telefoni/src/slike/3.jpg';
import huawei from 'D:/Faks/4. godina/iteh/domaci3/telefoni/src/slike/4.jpg';


function Telefon({pr, dodaj, oduzmi, kor}) {
  return (
    <div className='kartica'>  
      
      <div className="kartica-body">
      {pr.slika === "1" ? (
        <img className = "slika" src={samsung}></img>
          ): (
            pr.slika === "2" ? (
              <img className = "slika" src={nokia}></img>
                ): (
                  pr.slika === "3" ? (
                    <img className = "slika" src={apple}></img>
                      ): (
                        <img className = "slika" src={huawei}></img>
                          )
                    )
              )}
        <h3 className="kartica-naslov">{pr.model}</h3>
        <p className="kartica-specifikacije">{pr.specifikacije}</p>
        <p className="kartica-specifikacije">Cena: {pr.cena}</p>
        
      </div>
      {kor === 0 ? ( <>
        <p className="kartica-specifikacije">Kolicina: {pr.kolicina}</p>
       <button
            className="btn"
            onClick={() => dodaj(pr.id)}
          > + </button>
      <button
            className="btn"
            onClick={() => oduzmi(pr.id)}
          > - </button>
          </>
          ): (<p className="kartica-specifikacije">Kolicina: {pr.kolicina}</p>)}
      </div>
  )
}

export default Telefon