export default function About() {
    return (
      <div id="about" className="text-center py-20 bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-700">
          Hi, I'm [Your Name], a passionate web developer with a focus on building beautiful and functional web applications. 
          I love coding and am always learning new technologies to improve my skillset.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc text-left max-w-2xl mx-auto text-lg space-y-2 text-gray-600">
          <li>JavaScript (React, Node.js)</li>
          <li>HTML & CSS (Tailwind CSS, SASS)</li>
          <li>Version Control (Git & GitHub)</li>
          <li>Responsive Web Design</li>
          <li>APIs & Web Services</li>
        </ul>
      </div>
    );
  }
  