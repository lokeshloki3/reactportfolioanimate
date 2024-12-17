import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/LWLogo-removebg-preview.png";

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between py-6 border-b border-stone-700">
      <div className="flex flex-shrink-0 items-center">
        <a href="/reactportfolioanimate/" aria-label="Home">
          <img
            src={logo}
            className="mx-2 rounded-xl"
            width={100}
            height={33}
            alt="Logo"
          />
        </a>
      </div>
      <div className="m-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-2xl">
        <a href="#technologies">Technologies</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <span className="flex flex-row gap-4">
          <a
            href="https://www.linkedin.com/in/lokesh021loki/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/lokeshloki3/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
