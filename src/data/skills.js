import {
    FaJs,
    FaPython,
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaAws,
    FaDocker,
    FaGitAlt,
    FaCloud,
} from "react-icons/fa";

import {
    SiTypescript,
    SiGo,
    SiMongodb,
    SiMysql,
    SiRedis,
    SiNextdotjs,
    SiExpress,
    SiLangchain,
    SiCloudinary,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc"; // ✔ Correct and Available

const skills = [
    {
        category: "Languages",
        icon: FaJs,
        items: [
            { name: "JavaScript (ES6+)", icon: FaJs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "golang", icon: SiGo },
        ],
    },
    {
        category: "Frameworks Libraries",
        icon: FaReact,
        items: [
            { name: "React.js", icon: FaReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Node.js", icon: FaNodeJs },
            { name: "Express.js", icon: SiExpress },
            { name: "LangChain", icon: SiLangchain },
        ],
    },
    {
        category: "Databases",
        icon: FaDatabase,
        items: [
            { name: "MongoDB", icon: SiMongodb },
            { name: "MySQL", icon: SiMysql },
            { name: "Redis", icon: SiRedis },
            { name: "Pinecone", icon: FaCloud }, // using cloud icon
        ],
    },
    {
        category: "Cloud DevOps",
        icon: FaAws,
        items: [
            { name: "AWS EC2", icon: FaAws },
            { name: "Docker", icon: FaDocker },
            { name: "CI/CD", icon: FaGitAlt },
            { name: "Git", icon: FaGitAlt },
            { name: "VS Code", icon: VscVscode }, // ✔ Working icon
            { name: "ImageKit", icon: SiCloudinary },
            { name: "Cloudinary", icon: SiCloudinary },
        ],
    },
    {
        category: "Soft Skills",
        icon: FaPython,
        items: [
            { name: "Problem-Solving", icon: FaPython },
            { name: "Teamwork", icon: FaPython },
            { name: "Time Management", icon: FaPython },
            { name: "Quick Learner", icon: FaPython },
        ],
    },
];

export default skills;
