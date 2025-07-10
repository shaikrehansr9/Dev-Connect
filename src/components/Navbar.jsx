import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(true); // Change to false to test logged-out view
  const [isOpen, setIsOpen] = useState(false);
     const navigate =useNavigate();
  const handleLogout = () => {
   
    setLoggedIn(false);
    navigate('/login');
    console.log("User logged out");
    localStorage.removeItem('token');
  };

  return (
    <nav 
      id="navBar" 
      className="fixed top-0 w-full bg-gradient-to-r from-blue-700 to-blue-900 shadow-lg p-4 md:px-8 lg:px-12 text-white font-sans relative z-20 
                 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 sm:justify-between md:justify-start"
    >
      <a 
        href="/" 
        id="item" 
        className="text-3xl font-extrabold text-white tracking-tight transform transition-transform duration-300 hover:scale-105 mr-4"
      >
        DevConnect
      </a>
      <a 
        href="/" 
        id="item" 
        className="text-white text-lg font-medium hover:text-amber-300 transition-colors duration-200 px-3 py-2 rounded-md"
      >
        home
      </a>

      {localStorage.getItem('token')!='demon_token' && (
        <>
        
          <a 
            href="/Login" 
            id="item2" 
            className="text-white text-lg font-medium hover:text-amber-300 transition-colors duration-200 px-3 py-2 rounded-md"
          >
            Login
          </a>
          <a 
            href="/Register" 
            id="item3" 
            className="text-white text-lg font-medium hover:text-amber-300 transition-colors duration-200 px-3 py-2 rounded-md"
          >
            Register
          </a>
        </>
      )}

      {localStorage.getItem('token')=='demon_token' && (
        <>
        
        <button 
          onClick={handleLogout} 
          id="btn" 
          className="bg-gray-600 text-white text-lg font-semibold px-5 py-2 rounded-lg shadow-md 
                     hover:bg-gray-700 transition-colors duration-200 transform hover:scale-105 ml-auto md:ml-8"
        >
          Logout
        </button>
        </>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="md:hidden text-white hover:text-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md p-2 transition-colors duration-200"
        aria-label="Toggle navigation"
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
    </nav>
  );
}

export default Navbar;
