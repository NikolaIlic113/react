import Telefon from "./Telefon";


const Korpa = ({ telefoni }) => {
    function zbir(){
        var z = 0;
        telefoni.forEach((prod) => {
            z = z + prod.cena * prod.kolicina;
          });
          return z;
    }
  return (
    <>
    <div className="telefoni">
      
      {telefoni.map((prod) => (
        <Telefon pr={prod} key={prod.id} kor={1}/>
      ))}

      
    </div>
    <p>Ukuona cena : {zbir()}</p>
    </>
  );
};

export default Korpa;