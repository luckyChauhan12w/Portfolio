const Skills = () => {
    const skillCategories = {
        Languages: ["JavaScript (ES6+)", "TypeScript", "golang"],
        Frameworks_Libraries: ["React.js", "Next.js", "Node.js", "Express.js", "LangChain"],
        Databases: ["MongoDB", "MySQL", "Redis", "Pinecone"],
        Cloud_DevOps: ["AWS EC2", "Docker", "CI/CD", "Git", "VS Code", "ImageKit", "Cloudinary"],
        Soft_Skills: ["Problem-Solving", "Teamwork", "Time Management", "Quick Learner"]
    };

    return (
        <section id="skills" className="border-2 border-black p-6 bg-white mb-8">
            <h2 className="text-2xl font-semibold mb-6">Skills</h2>
            {Object.entries(skillCategories).map(([category, skills]) => (
                <div key={category} className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">{category.replace(/_/g, ' ')}</h3>
                    <div className="flex flex-wrap gap-4">
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className="border border-black rounded-full px-4 py-1 text-sm font-medium"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Skills;
