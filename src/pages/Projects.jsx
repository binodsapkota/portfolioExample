export default function Projects() {
    return (
      <div id="projects" className="py-20 bg-white">
        <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4 max-w-6xl mx-auto">
          {/* Project 1 */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Project One</h2>
            <p className="text-gray-700 mb-4">
              A brief description of what the project is about. It can include technologies used and the purpose of the project.
            </p>
            <a
              href="https://github.com/yourusername/project-one"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              View on GitHub
            </a>
          </div>
          {/* Project 2 */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Project Two</h2>
            <p className="text-gray-700 mb-4">
              A brief description of what the project is about. It can include technologies used and the purpose of the project.
            </p>
            <a
              href="https://github.com/yourusername/project-two"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              View on GitHub
            </a>
          </div>
          {/* Project 3 */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Project Three</h2>
            <p className="text-gray-700 mb-4">
              A brief description of what the project is about. It can include technologies used and the purpose of the project.
            </p>
            <a
              href="https://github.com/yourusername/project-three"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    );
  }
  