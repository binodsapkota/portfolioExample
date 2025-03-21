import About from "./About";
import Projects from "./Projects";
import { Link } from "react-scroll";
export default function Home(){
    return(
        <>
        <div id="home"  className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-center">
        <div className="px-8 py-16 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Hello, I'm Binod Sapkota!</h1>
          <p className="text-lg mb-6">
            I'm a passionate web developer, creating innovative and user-friendly websites.
          </p>
          
          <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-lg text-xl font-semibold transition duration-300"
                  >
                    Check Out My Work
                  </Link>
        </div>
      </div>
       <About/> 
       <Projects/>
       </>
    );
}