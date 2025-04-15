const Navbar = () => {
    return (
  
  <nav className="flex justify-between px-9 items-center p-4 backdrop-opacity-100  shadow-2xl backdrop-blur-3xl sticky top-0 z-50 font-serif">
    
        <div className="text-3xl font-bold text-orange-300"><span className="text-gray-300">My</span> Portfolio</div>
        <ul className="flex space-x-6  font-bold text-lg text-orange-200 ">
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  