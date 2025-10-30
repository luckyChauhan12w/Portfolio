import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
    FaHome,
    FaUser,
    FaBriefcase,
    FaTools,
    FaEnvelope,
    FaProjectDiagram,
} from 'react-icons/fa';

const sections = [
    { name: 'Home', to: '/', icon: <FaHome /> },
    { name: 'About', to: '/about', icon: <FaUser /> },
    { name: 'Experience', to: '/experience', icon: <FaBriefcase /> },
    { name: 'Skills', to: '/skills', icon: <FaTools /> },
    { name: 'Contact', to: '/contact', icon: <FaEnvelope /> },
];

const projectLinks = [
    { name: 'Swomato', to: '/projects#project-one', icon: <FaProjectDiagram /> },
    { name: 'MediConnect', to: '/projects#project-two', icon: <FaProjectDiagram /> },
    { name: 'SafeGuard', to: '/projects#project-three', icon: <FaProjectDiagram /> },
];

const Sidebar = () => {
    const location = useLocation();
    const [projectOpen, setProjectOpen] = useState(false);

    const isActive = (to) => {
        if (to.includes('#')) {
            const [path, hash] = to.split('#');
            return location.pathname === path && location.hash === `#${hash}`;
        }
        return location.pathname === to;
    };

    const isProjectActive =
        isActive('/projects') || projectLinks.some((p) => isActive(p.to));

    return (
        <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-50 border-r-2 border-black p-6 bg-white z-10 flex flex-col gap-4">
            <nav className="flex flex-col gap-2 mb-6">
                {sections.slice(0, 2).map((section) => (
                    <Link
                        key={section.name}
                        to={section.to}
                        className={`flex items-center gap-2 px-3 py-1 text-left ${isActive(section.to)
                            ? 'underline underline-offset-4 decoration-2 decoration-black'
                            : ''
                            }`}
                    >
                        <span className="text-black">{section.icon}</span> {section.name}
                    </Link>
                ))}
                <div
                    className="flex flex-col"
                    onMouseEnter={() => setProjectOpen(true)}
                    onMouseLeave={() => setProjectOpen(false)}
                >
                    <Link
                        to="/projects"
                        className={`flex items-center gap-2 px-3 py-1 text-left cursor-pointer ${isProjectActive
                            ? 'underline underline-offset-4 decoration-2 decoration-black'
                            : ''
                            }`}
                    >
                        <FaProjectDiagram /> Projects
                    </Link>
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ml-4 mt-1 ${projectOpen || isProjectActive
                            ? 'max-h-40 opacity-100'
                            : 'max-h-0 opacity-0'
                            }`}
                    >
                        {projectLinks.map((project) => (
                            <Link
                                key={project.name}
                                to={project.to}
                                className={`flex items-center gap-2 block px-3 py-1 text-left text-sm ${isActive(project.to)
                                    ? 'underline underline-offset-4 decoration-2 decoration-black'
                                    : ''
                                    }`}
                            >
                                <span className="text-black">{project.icon}</span> {project.name}
                            </Link>
                        ))}
                    </div>
                </div>
                {sections.slice(2).map((section) => (
                    <Link
                        key={section.name}
                        to={section.to}
                        className={`flex items-center gap-2 px-3 py-1 text-left ${isActive(section.to)
                            ? 'underline underline-offset-4 decoration-2 decoration-black'
                            : ''
                            }`}
                    >
                        <span className="text-black">{section.icon}</span> {section.name}
                    </Link>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
