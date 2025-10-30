import { FaFilePdf, FaGithub } from 'react-icons/fa';
const Navbar = () => (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between border-b-2 border-black p-5 bg-white z-20">
        <span className="font-bold text-xl">Lucky Chauhan</span>
        <ul className="flex gap-4">
            <li>
                <a
                    className="border px-3 py-1 flex items-center gap-2"
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFilePdf /> Get Resume
                </a>
            </li>
            <li>
                <a
                    className="border px-3 py-1 flex items-center gap-2"
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
