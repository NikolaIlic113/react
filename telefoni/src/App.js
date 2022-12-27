//import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Telefoni from './components/Telefoni';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Korpa from './components/Korpa';
import BottomBar from './components/BottomBar';


function App() {

  const [korpaBroj, postaviKorpaBroj] = useState(0);
  const [korpaTelefoni, postaviKorpaTelefoni] = useState([]);

  const [telefoni] = useState([
    {
      id: 1,
      kolicina:0,
      cena:450,
      model: "Samsung",
      specifikacije:
        "Velicina ekrana = 4,9'', RAM = 8gb, baterija = 3000mAh",
      amount: 0,
      vrsta: "skup",
      slika: "1",
    },
    {
      id: 2,
      kolicina:0,
      cena:200,
      model: "Nokia",
      specifikacije:
        "Velicina ekrana = 4,7'', RAM = 6gb, baterija = 2500mAh",
      amount: 0,
      vrsta: "jeftin",
      slika: "2",
    },
    {
      id: 3,
      kolicina:0,
      cena:650,
      model: "Apple",
      specifikacije:
        "Velicina ekrana = 6,4'', RAM = 8gb, baterija = 3500mAh",
      amount: 0,
      vrsta: "skup",
      slika: "3",
    },
    {
      id: 4,
      kolicina:0,
      cena:300,
      model: "Huawei",
      specifikacije:
        "Velicina ekrana = 4,0'', RAM = 4gb, baterija = 2000mAh",
      amount: 0,
      vrsta: "jeftin",
      slika: "4",
    },
    {
      id: 5,
      kolicina:0,
      cena:330,
      model: "Xiaomi",
      specifikacije:
        "Velicina ekrana = 4,2'', RAM = 4gb, baterija = 2300mAh",
      amount: 0,
      vrsta: "jeftin",
      slika: "5",
    },
  ]);

  // const [telefoni] = useState(pice);

  function vrsta(v){
    let telefoni_mob = telefoni.filter((prod) => prod.vrsta === v);
    return telefoni_mob;
  }

  function korpa() {
    let pKorpa = telefoni.filter((prod) => prod.kolicina > 0);
    postaviKorpaTelefoni(pKorpa);
  }

  function dodaj(id) {

    postaviKorpaBroj(korpaBroj + 1);

    telefoni.forEach((prod) => {
      if (prod.id === id) {
        prod.kolicina++;
      }
      console.log(prod.kolicina);

    });

    korpa();
  }

    function oduzmi(id) {
      if (korpaBroj > 0 ) postaviKorpaBroj(korpaBroj - 1);

      telefoni.forEach((prod) => {
        if (prod.id === id) {
          if(prod.kolicina > 0){
          prod.kolicina--;
          }
        }
        console.log(prod.kolicina);
        korpa();
      });
    }


  return (
    <BrowserRouter className="App">
      <NavigationBar></NavigationBar>
      <Routes>
        <Route
          path="/"
          element={<Telefoni przi={telefoni} dodaj={dodaj} oduzmi = {oduzmi}/>}
        />
        <Route path="/jeftin"
          element={<Telefoni przi={vrsta("jeftin")} dodaj = {dodaj} oduzmi = {oduzmi} />} />
      <Route path="/skup"
          element={<Telefoni przi={vrsta("skup") }  dodaj = {dodaj} oduzmi = {oduzmi}/>} />

          <Route path="/korpa" element={<Korpa telefoni={korpaTelefoni} />} />
      </Routes>
      <BottomBar></BottomBar>
    </BrowserRouter>
  );
}

export default App;
