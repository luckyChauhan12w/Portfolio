const Experience = () => (
    <section id="projects" className="border-2 border-black p-6 bg-white mb-8">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="space-y-4">
            <div>
                <h3 className="font-semibold">Web Development Intern</h3>
                <p className="italic">ABC Company | Jan 2025 - Present</p>
                <ul className="list-disc list-inside">
                    <li>Built REST APIs using Node.js and Express</li>
                    <li>Worked with MongoDB for data storage</li>
                    <li>Implemented frontend components using React and Tailwind CSS</li>
                    <li>Collaborated on CI/CD pipelines and Git workflows</li>
                </ul>
            </div>
            <div>
                <h3 className="font-semibold">Junior Developer</h3>
                <p className="italic">XYZ Solutions | Jun 2023 - Dec 2024</p>
                <ul className="list-disc list-inside">
                    <li>Developed and maintained internal tools in JavaScript</li>
                    <li>Contributed to open-source projects</li>
                    <li>Automated testing using Jest and Supertest</li>
                </ul>
            </div>
        </div>
    </section>
);

export default Experience;
