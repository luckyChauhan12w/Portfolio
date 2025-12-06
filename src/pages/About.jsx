import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import img from "../assets/image.png";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="about"
      className={`
        border-2 p-6 flex flex-col gap-7 md:flex-row justify-between
        ${
          isDark
            ? "bg-[#101828] border-[#364153] text-white"
            : "bg-white border-[#101828] text-black"
        }
      `}
    >
      <div className="flex flex-col gap-5">
        <div>
          <h2 className="text-4xl font-semibold mb-5">About Me</h2>

          <p
            className={`
              mb-4 text-[1.1vw] leading-8 [word-spacing:0.6rem]
              ${isDark ? "text-gray-300" : "text-gray-800"}
            `}
          >
            Driven by curiosity and a passion for building scalable, impactful
            web solutions, I specialize in full-stack development using modern
            JavaScript, Node.js, and cloud-native technologies. With hands-on
            experience in React, Express, MongoDB, and DevOps fundamentals, I
            enjoy solving real-world challenges and translating ideas into
            reliable products. My approach combines robust backend architectures
            with clean, accessible frontend interfaces. Whether collaborating in
            teams or refining personal projects, I thrive in environments that
            encourage learning and growth. Beyond code, I actively share my
            technical journey and insights on developer communities and social
            platforms, always eager to explore the next big innovation in tech.
          </p>
        </div>

        <div className="flex gap-4 mt-4">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center gap-2 px-3 py-1 rounded border transition
              ${
                isDark
                  ? "border-gray-600 text-white hover:bg-gray-800"
                  : "border-black text-black hover:bg-gray-100"
              }
            `}
          >
            <FaLinkedin className={`${isDark ? "text-white" : "text-black"}`} />
            LinkedIn
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center gap-2 px-3 py-1 rounded border transition
              ${
                isDark
                  ? "border-gray-600 text-white hover:bg-gray-800"
                  : "border-black text-black hover:bg-gray-100"
              }
            `}
          >
            <FaGithub className={`${isDark ? "text-white" : "text-black"}`} />
            GitHub
          </a>

          <a
            href="mailto:your@email.com"
            className={`
              flex items-center gap-2 px-3 py-1 rounded border transition
              ${
                isDark
                  ? "border-gray-600 text-white hover:bg-gray-800"
                  : "border-black text-black hover:bg-gray-100"
              }
            `}
          >
            <FaEnvelope className={`${isDark ? "text-white" : "text-black"}`} />
            Email
          </a>
        </div>
      </div>

      <div
        className={`
          flex-shrink-0 mt-8 md:mt-0 md:ml-8 flex items-center justify-center 
          py-2 overflow-hidden rounded-xl border-2
          ${isDark ? "border-gray-700 bg-[#0d1520]" : "border-black bg-white"}
        `}
        style={{ width: "32vw", height: "80vh" }}
      >
        <img
          src={img}
          alt="Unique Developer Poster"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default About;
