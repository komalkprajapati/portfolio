const Projects = () => {
    return (
      <section id="projects" className="p-8 text-center">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="p-4 bg-gray-200 rounded">
            <h3 className="text-xl font-semibold">To-Do App</h3>
            <p>React-based to-do list application.</p>
          </div>
          <div className="p-4 bg-gray-200 rounded">
            <h3 className="text-xl font-semibold">E-Commerce Site</h3>
            <p>React & Node.js e-commerce project.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  