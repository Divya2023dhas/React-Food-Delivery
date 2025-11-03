import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import Pizzapage from "./pages/Pizzapage";
import Burgerpage from "./pages/Burgerpage";
import Pastapages from "./pages/Pastapages";
import Kfc from "./pages/Kfc";
import Momos from "./pages/Momos";
import Sandwitch from "./pages/Sandwitch";
import Drinks from "./pages/Drinks";
import Deals from "./pages/Deals";
import Addcart from "./pages/Addcart";
import Adminpage from "./pages/Adminpage";
import Footer from "./components/Footer";

//  Controller Component
function Layout() {
  const location = useLocation();
  const isAdminPage = location.pathname === "/admin";

  return (
    <div className="min-h-screen flex flex-col">
    
      {!isAdminPage && <Navbar />}
      {!isAdminPage && (
        <section className="bg-black text-white text-center py-16">
          <h1 className="text-4xl font-extrabold tracking-wide">
            Your culinary adventure awaits
          </h1>
        </section>
      )}
     <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/pizza" element={<Pizzapage />} />
          <Route path="/burger" element={<Burgerpage />} />
          <Route path="/pasta" element={<Pastapages />} />
          <Route path="/chicken" element={<Kfc />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/addcart" element={<Addcart />} />
          <Route path="/momos" element={<Momos />} />
          <Route path="/sandwitch" element={<Sandwitch />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/admin" element={<Adminpage />} />
        </Routes>
      </div>
       {!isAdminPage && <Footer />}
    </div>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
