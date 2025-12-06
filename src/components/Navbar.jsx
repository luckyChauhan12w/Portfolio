import { FaFilePdf, FaGithub } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { isDark } = useTheme();

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between p-5 border-b-2 z-20 transition-colors duration-200 ${
        isDark
          ? "bg-[#101828] border-gray-700 text-white"
          : "bg-white border-black text-black"
      }`}
    >
      <span className="font-bold text-xl">Lucky Chauhan</span>

      <ul className="flex gap-4 items-center">
        <li>
          <ThemeToggle />
        </li>

        <li>
          <a
            className={`px-3 py-1 flex items-center gap-2 border transition-colors ${
              isDark
                ? "border-gray-600 text-white hover:bg-gray-800"
                : "border-black text-black hover:bg-gray-100"
            }`}
            href="https://ik.imagekit.io/gaxmekqtag/Resume%20File/Lucky_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFilePdf /> Get Resume
          </a>
        </li>

        <li>
          <a
            className={`px-3 py-1 flex items-center gap-2 border transition-colors ${
              isDark
                ? "border-gray-600 text-white hover:bg-gray-800"
                : "border-black text-black hover:bg-gray-100"
            }`}
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
};

export default Navbar;
