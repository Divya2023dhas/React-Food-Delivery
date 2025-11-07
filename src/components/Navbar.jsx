import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import Location from "./Location"; 
import Login from"./Login";

function Navbar() {
  
  const [showLocationPopup, setShowLocationPopup] = useState(false);
    const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
    const [showLogin, setShowLogin] = useState(false);

  // sample food items
  const foods = [
    "Pizza",
    "Pasta",
    "Paneer Pasta",
    "Pasta with Cheese",
    "Pav Bhaji",
    "Parotta",
    "Paneer Butter Masala",
  ];
    useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 400);
    return () => clearTimeout(timer);
  }, [query]);


  useEffect(() => {
    if (debouncedQuery.trim() === "") {
      setSuggestions([]);
      return;
    }

    const result = foods.filter((item) =>
      item.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
    setSuggestions(result);
  }, [debouncedQuery]);
return (
  <>
    
    <div className="bg-white text-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
      
        <div className="flex items-center space-x-10">
          <img src="/Images/Food Logo.png" alt="Logo" className="h-16 w-16 object-cover" />
         
        </div>
         <ul className="hidden md:flex space-x-6 font-medium">
        
          <li><button className="hover:text-blue-600">Menu</button></li>
          <li>
            <Link to="deals" className="hover:text-blue-600 flex items-center gap-1 bg-yellow-300 text-yellow-900 text-xs px-2 py-0.5 rounded-md font-semibold">
              Deal Hot
              </Link>
          </li>
         <li>
              <button
                onClick={() => setShowLocationPopup(true)}
                className="hover:text-blue-600 font-medium"
              >
                Location
              </button>
            </li>
            
        </ul>

       <div className="hidden md:flex items-center bg-gray-100 px-4 py-1 rounded-full w-64">
          <SearchIcon style={{ fontSize: 30, color: "gray" }} />
          <input
            type="text"
            placeholder="Search..."
             onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent outline-none px-2 text-sm w-full"
          />
          {suggestions.length > 0 && (
          <ul className="absolute top-11 left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-md z-10">
            {suggestions.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-red-100 cursor-pointer"
                onClick={() => {
                  setQuery(item);
                  setSuggestions([]);
                }}
                onMouseDown={(e) => e.preventDefault()}
              >
                {item}
              </li>
            ))}y
          </ul>
        )}
        </div>
         <button
            onClick={() => setShowLogin(true)}
            className="flex items-center gap-1 bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded-lg text-white"
          >
            <LoginIcon />
            <span>Login</span>
          </button>
        <div className="flex items-center space-x-4">
         
          <Link to="/admin" className="p-2 hover:bg-gray-100 rounded-full">
            <AccountCircleIcon />
          </Link>
  <Link
            to="/addcart"
            className="relative p-2 hover:bg-gray-100 rounded-full"
          >
            <ShoppingCartIcon />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1">
              2
            </span>
          </Link>
        </div>
      </div>
    </div>
     {showLogin && <Login onClose={() => setShowLogin(false)} />}
    
     { showLocationPopup && (
        <Location onClose={() => setShowLocationPopup(false)} />
      )}
      </>
      
    );
    }

export default Navbar;
