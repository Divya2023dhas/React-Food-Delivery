import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
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
      
      </Routes>
      <Footer/>
    </Router>
  
  );
}

export default App;
