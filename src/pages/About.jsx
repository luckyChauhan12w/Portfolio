import {
    FaLinkedin,
    FaGithub,
    FaEnvelope
} from 'react-icons/fa';
import img from '../assets/image.png';

const About = () => (
    <section id="about" className="border-2 border-black p-6 bg-white flex flex-col gap-7 md:flex-row justify-between">
        <div className="flex flex-col gap-5">
            <div>
                <h2 className="text-4xl font-semibold mb-5">About Me</h2>
                <p className="mb-4 text-[1.1vw] [word-spacing:0.6rem] leading-8">
                    Driven by curiosity and a passion for building scalable, impactful web solutions, I specialize in full-stack development using modern JavaScript, Node.js, and cloud-native technologies. With hands-on experience in React, Express, MongoDB, and DevOps fundamentals, I enjoy solving real-world challenges and translating ideas into reliable products. My approach combines robust backend architectures with clean, accessible frontend interfaces. Whether collaborating in teams or refining personal projects, I thrive in environments that encourage learning and growth. Beyond code, I actively share my technical journey and insights on developer communities and social platforms, always eager to explore the next big innovation in tech
                </p>
            </div>
            <div className="flex gap-4 mt-4">
                <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-black px-3 py-1 rounded text-black hover:bg-gray-100 transition"
                >
                    <FaLinkedin className="text-black" /> LinkedIn
                </a>
                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-black px-3 py-1 rounded text-black hover:bg-gray-100 transition"
                >
                    <FaGithub className="text-black" /> GitHub
                </a>
                <a
                    href="mailto:your@email.com"
                    className="flex items-center gap-2 border border-black px-3 py-1 rounded text-black hover:bg-gray-100 transition"
                >
                    <FaEnvelope className="text-black" /> Email
                </a>
            </div>
        </div>
        <div className="flex-shrink-0 mt-8 md:mt-0 md:ml-8 flex items-center justify-center py-2 overflow-hidden" style={{
            width: '32vw',
            height: '80vh',
            border: '2px solid #000',
            borderRadius: '12px',
            background: '#fff'
        }}>
            <img
                src={img}
                height="100%"
                width="100%"
                alt="Unique Developer Poster"
                className="w-full h-full "
            />
        </div>
    </section >
);

export default About;
