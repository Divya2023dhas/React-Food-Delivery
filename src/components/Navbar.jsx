import React,{useState} from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import Location from "./Location"; 

function Navbar() {
  
  const [showLocationPopup, setShowLocationPopup] = useState(false);
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
            className="bg-transparent outline-none px-2 text-sm w-full"
          />
        </div>
        <div className="flex items-center space-x-4">
         
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <AccountCircleIcon />
          </button>
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
    
     { showLocationPopup && (
        <Location onClose={() => setShowLocationPopup(false)} />
      )}
      </>
      
    );
    }

export default Navbar;
