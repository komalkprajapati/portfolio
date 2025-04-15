import Typed from "typed.js";
import { useEffect, useRef } from "react";
import komalImg from '../assets/komal.jpg'

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
        className="min-h-[90vh] flex flex-col-reverse md:flex-row justify-center items-center gap-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-center md:text-left"

      >
        {/* Text Content */}
     
        <div className=" md:p-10 flex flex-col items-center md:items-start  w-1/2">
          <h1 className="text-5xl font-extrabold">Hi, I'm <span className="text-orange-400">Komal</span></h1>
          <p className="mt-4 text-lg">
          I recently completed my <span className="text-orange-300">Bachelor of Computer Applications (BCA)</span> and I'm passionate about building full-stack web applications. I specialize in technologies like <span className="font-semibold">React.js, Node.js, Express, and MongoDB</span>, and I'm eager to grow as a developer by solving real-world problems through code.
        </p>

        
          <p className="mt-4 text-xl text-orange-300 animated-text">
                  <span className="auto-type" ref={typedRef}></span></p>
          <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300">
            Hire Me
          </button>
        </div>

        <div className="mb-6 md:mb-0">
          <img
            src={komalImg}
            className="h-72 w-72 md:h-[600px] md:w-[500px] object-cover p-2 rounded-full border-4 border-gray-400 hover:scale-105 transition-all"
            alt="Komal"
          />
        </div>
    
    
      </section>

      
      
    </>
    
  );
};

export default Hero;
