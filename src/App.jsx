import { useState } from 'react';
import './App.css';
import Nave from './component/nave';
import Home from './pages/home';
import Gear from './pages/gear';
import Packages from './pages/packages';
import Contact from './pages/Contact';
import Footar from './component/footar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Nave />
      <Home />
      <Gear />
      <Packages />
      <Contact />
      <Footar />

      {/* WhatsApp Contact Button */}
      <a
        href="https://wa.me/+1 4314587266" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 mb-10 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
        style={{ zIndex: 1000 }}
      >
        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 32 32"
          fill="currentColor"
        >
          <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.837.737 5.523 2.137 7.91l-2.137 8.09 8.337-2.18c2.29 1.253 4.89 1.91 7.663 1.91 8.837 0 16-7.163 16-16s-7.163-16-16-16zm0 29.333c-2.56 0-5.013-.683-7.157-1.973l-.51-.297-4.96 1.297 1.317-4.91-.33-.51c-1.237-2.027-1.863-4.347-1.863-6.84 0-7.467 6.07-13.533 13.503-13.533 7.467 0 13.533 6.067 13.533 13.533 0 7.467-6.067 13.533-13.533 13.533zm7.467-10.667c-.41-.203-2.427-1.197-2.803-1.333-.377-.137-.65-.203-.923.203-.27.403-1.067 1.333-1.307 1.603-.243.27-.487.303-.897.1-.41-.203-1.733-.64-3.3-2.037-1.22-1.087-2.043-2.427-2.283-2.837-.243-.41-.027-.63.183-.833.187-.183.41-.487.617-.73.203-.243.27-.403.41-.67.137-.27.07-.503-.037-.703-.107-.203-.923-2.227-1.263-3.043-.33-.803-.663-.693-.923-.693-.243-.02-.503-.023-.77-.023-.27 0-.703.1-1.07.503-.37.403-1.37 1.337-1.37 3.253 0 1.917 1.403 3.767 1.6 4.027.203.27 2.747 4.213 6.63 5.9.927.4 1.65.637 2.213.817.93.297 1.777.257 2.447.157.747-.113 2.427-.993 2.77-1.96.343-.963.343-1.787.243-1.96-.1-.173-.37-.27-.77-.47z" />
        </svg>
      </a>
    </div>
  );
}

export default App;
