import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center font-extrabold text-orange-400">
          A Little About Me
        </h2>
        <p className="mt-4 text-lg text-center text-gray-300">
          Hey there! I'm Komal, a passionate Full Stack Developer with a love for
          creating websites that are both functional and beautiful. My journey in
          tech started when I realized how powerful coding can be in solving real-world
          problems, and that spark led me to dive deeper into web development.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <img
              src="https://via.placeholder.com/300" // Replace with your image link
              alt="Komal"
              className="w-72 h-72 rounded-full object-cover border-4 border-gray-400 hover:scale-105 transition-all"
            />
          </div>
          <div className="flex flex-col justify-center items-start">
            <p className="text-lg text-gray-300">
              I recently completed my Bachelor of Computer Applications (BCA), where I
              got the chance to explore a wide range of technologies. But my heart truly
              belongs to web development, especially when it comes to building full-stack
              applications using tools like React.js, Node.js, Express, and MongoDB.
            </p>
            <p className="mt-4 text-lg text-gray-300">
              I love the challenge of turning complex problems into elegant solutions. Whether
              it's designing user-friendly interfaces or building efficient back-end systems, 
              I'm always eager to learn and grow.
            </p>
            <p className="mt-6 text-lg text-gray-300">
              When I'm not coding, you can probably find me reading about new technologies,
              brainstorming ideas for my next project, or collaborating with like-minded people
              who share the same passion for tech. I’m always excited about new opportunities
              to contribute to meaningful projects and make an impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
