import React from "react";

const Footar = () => {
  return (
    <footer className="bg-[#1c1236] text-[#FBE4D6] pt-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          {/* Left Section: Contact Info */}
          <div className="flex flex-col items-start space-y-4 text-left w-full md:w-auto">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#A86523]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>Winnipeg, MB, Canada</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#A86523]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.11-.21c1.2.48 2.52.74 3.88.74a1 1 0 011 1v3.5a1 1 0 01-1 1C10.29 22 2 13.71 2 3.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.36.26 2.68.74 3.88a1.003 1.003 0 01-.21 1.11l-2.2 2.2z" />
              </svg>
              <span>+1 (204) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#A86523]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>purewal7266@gmail.com</span>
            </div>
          </div>

          {/* Center Section: Social Media Links */}
          <div className="flex justify-center space-x-6 w-full md:w-auto">
            <a
              href="https://www.instagram.com/7266entertainmentsolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E1306C]  hover:text-[#FBE4D6] transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-8 md:w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.281.058-2.563.334-3.637 1.408-1.074 1.074-1.35 2.356-1.408 3.637-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.281.334 2.563 1.408 3.637 1.074 1.074 2.356 1.35 3.637 1.408 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.281-.058 2.563-.334 3.637-1.408 1.074-1.074 1.35-2.356 1.408-3.637.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.281-.334-2.563-1.408-3.637-1.074-1.074-2.356-1.35-3.637-1.408-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.324c-2.296 0-4.162-1.866-4.162-4.162s1.866-4.162 4.162-4.162 4.162 1.866 4.162 4.162-1.866 4.162-4.162 4.162zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
              </svg>
            </a>
            <a
              href="https://wa.me/+1 4314587266"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-[#FBE4D6] transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-8 md:w-8"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.837.737 5.523 2.137 7.91l-2.137 8.09 8.337-2.18c2.29 1.253 4.89 1.91 7.663 1.91 8.837 0 16-7.163 16-16s-7.163-16-16-16zm0 29.333c-2.56 0-5.013-.683-7.157-1.973l-.51-.297-4.96 1.297 1.317-4.91-.33-.51c-1.237-2.027-1.863-4.347-1.863-6.84 0-7.467 6.07-13.533 13.503-13.533 7.467 0 13.533 6.067 13.533 13.533 0 7.467-6.067 13.533-13.533 13.533zm7.467-10.667c-.41-.203-2.427-1.197-2.803-1.333-.377-.137-.65-.203-.923.203-.27.403-1.067 1.333-1.307 1.603-.243.27-.487.303-.897.1-.41-.203-1.733-.64-3.3-2.037-1.22-1.087-2.043-2.427-2.283-2.837-.243-.41-.027-.63.183-.833.187-.183.41-.487.617-.73.203-.243.27-.403.41-.67.137-.27.07-.503-.037-.703-.107-.203-.923-2.227-1.263-3.043-.33-.803-.663-.693-.923-.693-.243-.02-.503-.023-.77-.023-.27 0-.703.1-1.07.503-.37.403-1.37 1.337-1.37 3.253 0 1.917 1.403 3.767 1.6 4.027.203.27 2.747 4.213 6.63 5.9.927.4 1.65.637 2.213.817.93.297 1.777.257 2.447.157.747-.113 2.427-.993 2.77-1.96.343-.963.343-1.787.243-1.96-.1-.173-.37-.27-.77-.47z" />
              </svg>
            </a>
          </div>

          {/* Right Section: Quick Links */}
          <div className="flex flex-col items-start space-y-4 text-left w-full md:w-auto">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#gear"
                  className="hover:text-[#FBE4D6] transition duration-300"
                >
                 Gear
                </a>
              </li>
              <li>
                <a
                  href="#packages"
                  className="hover:text-[#FBE4D6] transition duration-300"
                >
                 packages
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#FBE4D6] transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-8">
          <p className="text-sm flex items-center justify-center">
            
            © 2025 All rights reserved by 7266 Entertainment Solutions
          </p>
        </div>
        </div>
      
       <div className="hidden md:block text-right object-bottom">
          <p className="text-[8px]">create by devarsh solanki</p>
        </div>
   </footer>
  );
};

export default Footar;