import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto text-center">
        <p className="text-lg">
          © {new Date().getFullYear()} <span className="text-orange-400">Komal</span>. All rights reserved.
        </p>
    
        <div className="mt-4 flex justify-center space-x-6 text-xl">
          <a href="https://github.com/komalkprajapati" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-600">
            <FaGithub />
          </a>
          <a href="http://www.linkedin.com/in/komal-prajapati-b8b7272aa" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-600">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/art_diamond._/" className="text-orange-400 hover:text-orange-600">
            <FaInstagram/>
          </a>
        </div>
    
        <div className="mt-6 flex justify-center gap-6 text-sm">
          <a href="#home" className="hover:text-orange-400 transition">Home</a>
          <a href="#projects" className="hover:text-orange-400 transition">Projects</a>
          <a href="#skills" className="hover:text-orange-400 transition">Skills</a>
          <a href="#contact" className="hover:text-orange-400 transition">Contact</a>
        </div>
    
       
      </div>
    </footer>
    
    );
  };
  
  export default Footer;
  