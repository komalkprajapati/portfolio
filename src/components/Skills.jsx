import komalImg from "../assets/komal_CV.pdf";
export default function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      level: 95,
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      level: 90,
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      level: 80,
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      level: 65,
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      level: 70,
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      level: 60,
    },
  ];

  return (
    <section id="skills" className="pt-32 p-16 bg-gray-900 text-white  ">
      {/* Left Side: Skills Description */}

      <h2 className="text-4xl font-bold  text-orange-400 mb-5 ">
        <span className="text-gray-500">My</span> Skills
      </h2>
      <hr className="text-gray-500 border-1" />
      <div className="flex  flex-wrap  md:flex-row justify-center items-center gap-16 my-10 flex-col">
        <div className=" border-black/60 w-full md:w-1/2 p-2  shadow-2xl shadow-black/60  hover:shadow-gray-500/10 transition-all ">
          <div className="bg-slate-950 p-10">
            <p className="text-center max-w-2xl mx-auto mt-4 text-gray-300 leading-relaxed">
              I recently completed my Bachelor of Computer Applications (BCA)
              and have been actively learning full-stack web development. I'm
              passionate about building responsive and user-friendly websites
              using technologies like React.js, Node.js, and MongoDB. As a
              fresher, I'm eager to grow, collaborate on real-world projects,
              and continuously improve my skills in the tech industry.
            </p>

            <ul className="mt-6 space-y-3 text-gray-200 text-lg">
              <li>
                ✅ <strong>Front-End Development:</strong> Skilled in creating
                responsive UIs using React.js, JavaScript, Tailwind CSS, and
                HTML/CSS.
              </li>
              <li>
                ✅ <strong>Back-End Development:</strong> Comfortable building
                RESTful APIs with Node.js and Express.js, and working with
                MongoDB for database management.
              </li>
              <li>
                ✅ <strong>Version Control & Deployment:</strong> Familiar with
                using Git for version control and deploying projects through
                GitHub.
              </li>
            </ul>

            <button className="mt-6 px-6 py-3 font-bold bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300">
              <a href={komalImg} download>
                {" "}
                Download CV
              </a>
            </button>
          </div>
        </div>

        {/* Right Side: Skills Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center  ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative w-48 h-48 bg-slate-950  rounded-xl shadow-2xl flex flex-col items-center justify-center p-5
              transition-all duration-300 transform hover:scale-110 hover:shadow-gray-500/90 "
            >
              <img src={skill.icon} className="w-16 h-16 " alt={skill.name} />
              <p className="mt-3 text-lg font-semibold">{skill.name}</p>

              {/* Progress Bar */}
              <div
                className="w-full mt-3 bg-gray-700 rounded-full h-2 "
                style={{ boxShadow: "0px 0px 2px 1px gray" }}
              >
                <div
                  className="h-2 rounded-full transition-all duration-1000 ease-in-out"
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor:
                      skill.level > 80
                        ? "#22c55e"
                        : skill.level > 65
                        ? "#eab308"
                        : "#f43f5e",
                    boxShadow: "0px 0px 2px 1px",
                  }}
                ></div>
              </div>

              <p className="mt-1 text-sm text-gray-400">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
