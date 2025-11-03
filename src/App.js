import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import Pizzapage from "./pages/Pizzapage";
import Burgerpage from "./pages/Burgerpage";
import Pastapages from "./pages/Pastapages";
import Kfc from "./pages/Kfc";
import Momos from "./pages/Momos";
import Sandwitch from"./pages/Sandwitch";
import Deals from "./pages/Deals";
import Addcart from "./pages/Addcart";
import Footer from"./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <section className="bg-black text-white text-center py-16">
        <h1 className="text-4xl font-extrabold tracking-wide">
          Your culinary adventure awaits
        </h1>
      </section>

      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/pizza" element={<Pizzapage />} />
        <Route path="/burger" element={<Burgerpage />} />
        <Route path="/pasta" element={<Pastapages />} />
        <Route path="/chicken" element={<Kfc />} />
        <Route path="/deals" element={<Deals/>}/>
         <Route path="/addcart" element={<Addcart/>}/>
         <Route path="/Momos" element={<Momos/>}/>
         <Route path="/sandwitch" element={<Sandwitch/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
