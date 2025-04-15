import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Hero = () => {
  const typedRef = useRef('')
  useEffect(() => {
    var typed = new Typed(typedRef.current,{
      strings : ["React.js", "Node.js", "Express",  "MongoDB"],
      typeSpeed :150,
      backSpeed :150,
      loop :true
    })
  
    return () => {
      typed.destroy();
    }
  }, [])
  
  return (
    <>
      <section
        id="home"
        className="h-screen flex flex-col md:flex-row justify-center items-start pt-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-center md:text-left   "
      >
        {/* Text Content */}
        <div className="flex items-center ">
        <div className="p-10 ">
          <h1 className="text-5xl font-extrabold">Hi, I'm <span className="text-orange-400">Komal</span></h1>
          <p className="mt-4 text-lg">A passionate <span className="text-orange-300">Full-Stack Developer</span> skilled in building dynamic web applications using <span className="font-semibold">React.js, Node.js, Express, and MongoDB</span>.</p>
          <p className="mt-2 text-gray-300">I love solving real-world problems through code and continuously improving my skills. Let's build something amazing together!</p>
          <p className="mt-4 text-xl text-orange-300 animated-text">
                  <span className="auto-type" ref={typedRef}></span></p>
          <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300">
            Hire Me
          </button>
        </div>

        <div className="h-[600px] rounded-full  transition-all overflow-hidden duration-300 ">
          <img src="src\assets\komal.jpg" className=" h-[600px]  object-cover p-2 rounded-full border-4 border-gray-400 hover:scale-105 transition-all" alt="" />
        </div>
        </div>
        {/* Image Section */}
        <div class="ocean">
          <div class="wave"></div>
          <div class="wave wave2"></div>
        </div>
        
      </section>

      
      
    </>
    
  );
};

export default Hero;
