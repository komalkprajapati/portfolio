import data from "/src/data.js"; 
const Projects = () => {
  return (
    <section id="projects" className="p-16 bg-gray-900 text-white ">
      <h2 className="text-4xl font-bold  text-orange-400 mb-5 ">
        <span className="text-gray-500">My</span> Projects
      </h2>
      <hr className="text-gray-500 border-1" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto mt-10">
    {data.map((project) => (
        <div key={project.id} className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold text-orange-400 mb-3">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex justify-between">
            <a
              href={project.githubLink} // Replace with your GitHub link
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-400"
            >
              View on GitHub
            </a>
            <a
              href={project.liveDemoLink} // Replace with live demo URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-400"
            >
              Live Demo
            </a>
          </div>
        </div>
      ))}

      
      
      </div>
    </section>
  );
};

export default Projects;
