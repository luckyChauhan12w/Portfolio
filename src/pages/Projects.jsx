import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => (
    <section id="projects" className="border-2 border-black p-6 bg-white">
        <h2 className="text-4xl font-semibold mb-4">Projects</h2>
        <div className="flex flex-row gap-8">
            {projects.map((project) => (
                <ProjectCard project={project} key={project.title} />
            ))}
        </div>
    </section>
);

export default Projects;
