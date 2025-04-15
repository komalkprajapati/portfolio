const Projects = () => {
  return (
    <section id="projects" className="p-8 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center text-orange-400 mb-10">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* To-Do App Card */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold text-orange-400 mb-3">To-Do App</h3>
          <p className="text-gray-300 mb-4">A React-based to-do list application that allows users to add, edit, and delete tasks.</p>
          <div className="flex justify-between">
            <a
              href="https://github.com/yourusername/todo-app" // Replace with your GitHub link
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-400"
            >
              View on GitHub
            </a>
            <a
              href="https://yourusername.github.io/todo-app" // Replace with live demo URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-400"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* E-Commerce Site Card */}
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold text-orange-400 mb-3">E-Commerce Site</h3>
          <p className="text-gray-300 mb-4">An e-commerce website built using React and Node.js, with functionalities like product listing, shopping cart, and checkout.</p>
          <div className="flex justify-between">
            <a
              href="https://github.com/yourusername/e-commerce-site" // Replace with your GitHub link
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-400"
            >
              View on GitHub
            </a>
            <a
              href="https://yourusername.github.io/e-commerce-site" // Replace with live demo URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-400"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Additional Project Cards */}
        {/* You can add more project cards here in the same way as the above ones */}
      </div>
    </section>
  );
};

export default Projects;
