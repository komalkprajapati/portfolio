const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8 ">
        <div className="container mx-auto text-center">
          <p className="text-lg">
            © {new Date().getFullYear()} <span className="text-orange-400">Komal</span>. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a
              href="https://github.com/komalkprajapati"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-600 transition-all"
            >
              GitHub
            </a>
           
            <a
              href="mailto:komalprajapati230105@gmail.com"
              className="text-orange-400 hover:text-orange-600 transition-all"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  