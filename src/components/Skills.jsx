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
    <section id="skills" className="bg-gray-900 text-white px-6 py-20 md:px-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-orange-400 mb-2">
          <span className="text-gray-500">My</span> Skills
        </h2>
        <div className="w-24 h-1 bg-orange-400 mx-auto mb-6" />
        <p className="text-gray-300 max-w-xl mx-auto">
          I recently completed my BCA and am exploring full-stack web development.
          I'm eager to build amazing UIs and efficient backends using modern technologies.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
       
        <div className="bg-slate-950 p-8 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all">
          <p className="text-gray-300 leading-relaxed mb-6">
            As a fresher, I’m passionate about creating clean, functional user interfaces,
            working with both front-end and back-end technologies, and collaborating on real-world
            projects to grow in the tech industry.
          </p>
          <ul className="space-y-3 text-gray-200 text-base">
            <li>✅ <strong>Front-End:</strong> React.js, JavaScript, Tailwind CSS, HTML/CSS</li>
            <li>✅ <strong>Back-End:</strong> Node.js, Express.js, MongoDB</li>
            <li>✅ <strong>Tools:</strong> Git, GitHub, Deployment skills</li>
          </ul>
          <a
            href={komalImg}
            download
            className="inline-block mt-6 px-6 py-3 font-semibold bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300"
          >
            Download CV
          </a>
        </div>

       
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-5 shadow-lg hover:shadow-orange-400/40 text-center transition-transform transform hover:scale-105"
            >
              <img src={skill.icon} alt={skill.name} className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-orange-400">{skill.name}</h3>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-3 mb-1">
                <div
                  className="h-2 rounded-full transition-all"
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor:
                      skill.level > 80
                        ? "#22c55e"
                        : skill.level > 65
                        ? "#eab308"
                        : "#f43f5e",
                  }}
                ></div>
              </div>
              <p className="text-sm text-gray-400">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
