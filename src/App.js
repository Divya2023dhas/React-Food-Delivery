import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import Pizzapage from "./pages/Pizzapage"; 
import Burgerpage from"./pages/Burgerpage";
import Pastapages from"./pages/Pastapages";

import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Navbar />
       <section className="bg-black text-white text-center py-16">
        <h1 className="text-4xl font-extrabold tracking-wide">
          Your culinary adventure await
        </h1>
      </section>
      <Routes>
        <Route path="/" element={<Menu />} />
         <Route path="/Pizza" element={<Pizzapage />} />
         <Route path="/Burger" element={<Burgerpage/>}/>
         <Route path="/Pasta" element={<Pastapages/>}/>
      
      </Routes>
      <Footer/>
    </Router>
  
  );
}

export default App;
