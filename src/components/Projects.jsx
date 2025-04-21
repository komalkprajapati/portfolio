import data from "/src/data.js"; 
const Projects = () => {
  return (
    <section id="projects" className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-20 px-6 md:px-16">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-orange-400 mb-2">
        <span className="text-gray-500">My</span> Projects
      </h2>
      <div className="w-24 h-1 bg-orange-400 mx-auto mb-4" />
      <p className="text-gray-400 max-w-xl mx-auto">
        Here are a few highlights of the projects I’ve worked on—featuring responsive design,
        dynamic functionality, and real-world problem-solving.
      </p>
    </div>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {data.map((project) => (
        <div
          key={project.id}
          className="group relative overflow-hidden rounded-2xl bg-gray-800 border border-gray-800 p-6 shadow-md transition-transform hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="flex flex-col h-full justify-between">
            <div>
              <h3 className="text-2xl font-bold text-orange-400 group-hover:text-orange-300 transition-colors mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-4">
                {project.description}
              </p>
            </div>
            <div className="flex justify-between items-center mt-auto gap-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 transition px-4 py-2 rounded-lg"
              >
                GitHub
              </a>
              <a
                href={project.liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium text-gray-900 bg-white hover:bg-orange-100 transition px-4 py-2 rounded-lg"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
    );
};

export default Projects;
