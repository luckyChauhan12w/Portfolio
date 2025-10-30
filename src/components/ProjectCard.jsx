const ProjectCard = ({ project }) => (
    <div className="border-2 border-black p-4 flex flex-col items-center bg-white w-[26vw]">
        <div className="w-full h-[45%] border-2 border-black mb-4 overflow-hidden">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full"
            />
        </div>

        <div className="flex flex-col justify-between h-[55%]">
            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="my-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 width-[70%]">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs border border-black rounded-full px-3 py-1"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <div className="mt-6">
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border px-3 py-1 mr-2"
                >
                    GitHub
                </a>
                <a
                    href={project.disabled ? undefined : project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`border px-3 py-1 ${project.disabled
                        ? "cursor-not-allowed opacity-50 pointer-events-none"
                        : ""
                        }`}
                    aria-disabled={project.disabled}
                >
                    Demo
                </a>
            </div>
        </div>
    </div>
);

export default ProjectCard;
