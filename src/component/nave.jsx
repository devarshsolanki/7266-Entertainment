import React, { useState, useEffect } from "react";

const Nave = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="home">
      {/* Top Image */}
      {/* <div className="flex justify-center bg-[#0e2444] ">
        <img src="../rlogo.png" alt="Top Image" className="max-w-full h-auto" />
      </div> */}

      {/* Navigation Bar */}
      <nav
        className="fixed top-0 left-0 w-full bg-[#1c1236] text-[#F5F5F5] flex justify-between items-center px-6 py-4 z-500"
      >
        {/* Left Side: Logo */}
        <div className="text-[#00CFFF] text-2xl font-bold">
          <img src="../textlogo.png" alt="Logo" className="md:h-10 md:w-full w-50 h-10 " />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#F5F5F5] focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Center: Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row md:items-center text-lg space-y-4 md:space-y-0 md:space-x-9 ml-auto bg-[#1c1236] md:bg-transparent absolute md:static top-16 left-0 w-full md:w-auto px-6 py-4 md:p-0`}
        >
          <a
            href="#home"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
            className="block text-[#F5F5F5] hover:text-[#A86523] px-4 transition duration-300 font-medium"
          >
            Home
          </a>
          <a
            href="#gear"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
            className="block text-[#F5F5F5] hover:text-[#A86523] px-4 transition duration-300 font-medium"
          >
            Gear
          </a>
          <a
            href="#packages"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
            className="block text-[#F5F5F5] hover:text-[#A86523] px-4 transition duration-300 font-medium"
          >
            Packages
          </a>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
            className="block text-[#F5F5F5] hover:text-[#A86523] px-4 transition duration-300 font-medium"
          >
            Contact
          </a>
        

        {/* Right Side: Call to Action */}
        
          <a
            href="tel:+1 4314587266"
            className="text-[#A86523] sm:bg-[#A86523] text-white px-4 py-2 rounded-lg sm:hover:bg-[#8a4e1c] transition duration-300"
          >
            Call Us
          </a>
        </div>
        
      </nav>
    </div>
  );
};

export default Nave;