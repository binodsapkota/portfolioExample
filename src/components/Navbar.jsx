import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <div className="hidden md:flex space-x-4">
        <Link to="home" smooth={true} duration={500} className="hover:underline cursor-pointer">
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} className="hover:underline cursor-pointer">
          About
        </Link>
        <Link to="projects" smooth={true} duration={500} className="hover:underline cursor-pointer">
          Projects
        </Link>
      </div>
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 right-4 bg-blue-600 text-white p-4 rounded-lg">
          <Link to="home" smooth={true} duration={500} className="block mb-2">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="block mb-2">
            About
          </Link>
          <Link to="projects" smooth={true} duration={500} className="block mb-2">
            Projects
          </Link>
        </div>
      )}
    </nav>
  );
}
