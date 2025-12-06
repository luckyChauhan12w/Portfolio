import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { useTheme } from "../context/ThemeContext";

const Projects = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="projects"
      className={`border-2 p-6 transition-colors duration-300 ${
        isDark
          ? "border-[#364153] bg-[#101828] text-white"
          : "border-gray-900 bg-white text-gray-900"
      }`}
    >
      <h2 className="text-4xl font-semibold mb-4">Projects</h2>
      <div className="flex flex-row gap-8">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
