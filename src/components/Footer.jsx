import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google"; 


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6">
       
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo and text */}
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <img
              src="/images/Food logo.png"
              alt="FoodLogo"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold">WARNER&SPENCER</h2>
              
              
            </div>
          </div>
           <div className="flex gap-3">
            <h3 >Download APP</h3>
            <a
              href="#"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm font-medium"
            >
              <GoogleIcon fontSize="small" />
              <span>Get it on Play Store</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm font-medium"
            >
              <AppleIcon fontSize="small" />
              <span>Download on App Store</span>
            </a>
          </div>
        </div>

       
        <hr className="border-gray-700 mb-6" />

     
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
             <div className="flex gap-6 text-gray-400">
                <h3>Followed by
                
            </h3>

            <a href="#" className="hover:text-white flex items-center gap-1">
              <InstagramIcon /> <span>Instagram</span>
            </a>
            <a href="#" className="hover:text-white flex items-center gap-1">
              <FacebookIcon /> <span>Facebook</span>
            </a>
          </div>

          {/* Extra info or comment */}
          <p className="text-gray-500 text-sm">
           "your culniary adventure await"
          </p>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} WARNER &SPENCER. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
