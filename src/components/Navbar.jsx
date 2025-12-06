import { FaFilePdf, FaGithub } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full flex items-center justify-between border-b-2 border-black dark:border-gray-700 p-5 bg-white dark:bg-gray-900 z-20 transition-colors duration-200">
    <span className="font-bold text-xl text-black dark:text-white">Lucky Chauhan</span>
    <ul className="flex gap-4 items-center">
      <li>
        <ThemeToggle />
      </li>
      <li>
        <a
          className="border border-black dark:border-gray-600 px-3 py-1 flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-black dark:text-white"
          href="https://ik.imagekit.io/gaxmekqtag/Resume%20File/Lucky_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFilePdf /> Get Resume
        </a>
      </li>
      <li>
        <a
          className="border border-black dark:border-gray-600 px-3 py-1 flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-black dark:text-white"
          href="https://github.com/luckychauhan12w"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
