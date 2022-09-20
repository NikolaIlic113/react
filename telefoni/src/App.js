import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Telefoni from './components/Telefoni';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const [telefoni] = useState([
    {
      id: 1,
      model: "Samsung",
      specifikacije:
        "Sir, šunka, šampinjoni, masline",
      amount: 0,
      vrsta: "pice",
    },
    {
      id: 2,
      model: "Nokia",
      specifikacije:
        "Pepperoni, sir",
      amount: 0,
      vrsta: "pice",
    },
    {
      id: 3,
      model: "Apple",
      specifikacije:
        "Sir, gorgonzola, parmezan, dimljeni sir",
      amount: 0,
      vrsta: "pice",
    },
    {
      id: 4,
      model: "Huawei",
      specifikacije:
        "Sir, šunka, pančeta, kisela pavlaka, šampinjoni",
      amount: 0,
      vrsta: "pice",
    },
  ]);

  // const [telefoni] = useState(pice);

  function pice(){
    let telefoni_pice = telefoni.filter((prod) => prod.vrsta == "pice");
    return telefoni_pice;
  }


  return (
    <BrowserRouter className="App">
      <NavigationBar></NavigationBar>
      <Routes>
        <Route
          path="/"
          element={<Telefoni przi={telefoni} />}
        />
        <Route path="/pice"
          element={<Telefoni przi={pice()} />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
