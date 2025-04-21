import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // hamburger and close icons (or use any icons you like)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 shadow-xl sticky top-0 z-50 backdrop-blur-md backdrop-opacity-80 bg-gray-900/70 text-white">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-bold text-orange-300">
          <span className="text-gray-300">My</span> Portfolio
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-bold text-lg text-orange-200">
          <li><a href="#home" className="hover:text-white">Home</a></li>
          <li><a href="#skills" className="hover:text-white">Skills</a></li>
          <li><a href="#projects" className="hover:text-white">Projects</a></li>
          
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-orange-200 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col md:hidden mt-4 space-y-4 font-semibold text-orange-100 text-lg">
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
