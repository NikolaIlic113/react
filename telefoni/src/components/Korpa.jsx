import Telefon from "./Telefon";


const Korpa = ({ telefoni }) => {
    function zbir(){
        var z = 0;
        telefoni.forEach((prod) => {
            z = z + prod.cena;
          });
          return z;
    }
  return (
    <div className="cart-container">
      <h3>This is your cart.</h3>
      {telefoni.map((prod) => (
        <Telefon pr={prod} key={prod.id} />
      ))}

      <p>Ukuona cena : {zbir()}</p>
    </div>
  );
};

export default Korpa;