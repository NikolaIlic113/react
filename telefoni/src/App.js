import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Telefoni from './components/Telefoni';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Korpa from './components/Korpa';


function App() {

  const [korpaBroj, postaviKorpaBroj] = useState(0);
  const [korpaTelefoni, postaviKorpaTelefoni] = useState([]);

  const [telefoni] = useState([
    {
      id: 1,
      kolicina:0,
      cena:100,
      model: "Samsung",
      specifikacije:
        "Sir, šunka, šampinjoni, masline",
      amount: 0,
      vrsta: "pice",
    },
    {
      id: 2,
      kolicina:0,
      cena:200,
      model: "Nokia",
      specifikacije:
        "Pepperoni, sir",
      amount: 0,
      vrsta: "pice",
    },
    {
      id: 3,
      kolicina:0,
      cena:300,
      model: "Apple",
      specifikacije:
        "Sir, gorgonzola, parmezan, dimljeni sir",
      amount: 0,
      vrsta: "pice",
    },
    {
      id: 4,
      kolicina:0,
      cena:400,
      model: "Huawei",
      specifikacije:
        "Sir, šunka, pančeta, kisela pavlaka, šampinjoni",
      amount: 0,
      vrsta: "pice",
    },
  ]);

  // const [telefoni] = useState(pice);

  function vrsta(v){
    let telefoni_pice = telefoni.filter((prod) => prod.vrsta === v);
    return telefoni_pice;
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
        <Route path="/pice"
          element={<Telefoni przi={vrsta("pice")} dodaj = {dodaj} oduzmi = {oduzmi} />} />
      <Route path="/burgeri"
          element={<Telefoni przi={vrsta("burgeri") }  dodaj = {dodaj} oduzmi = {oduzmi}/>} />

          <Route path="/korpa" element={<Korpa telefoni={korpaTelefoni} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
