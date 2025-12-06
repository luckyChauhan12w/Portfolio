import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="contact"
      className={`
        border-2 p-6 my-8 mx-auto rounded-md transition-colors duration-200
        ${
          isDark
            ? "bg-[#101828] border-gray-700 text-white"
            : "bg-white border-black text-black"
        }
      `}
      style={{ maxWidth: "500px" }}
    >
      <h2
        className={`
          text-2xl font-semibold mb-4 pb-2 border-b
          ${isDark ? "border-gray-600" : "border-black"}
        `}
      >
        Contact
      </h2>

      <p className={`mb-4 ${isDark ? "text-gray-300" : "text-gray-800"}`}>
        You can reach me via email or LinkedIn, or fill the form below to send a
        message directly.
      </p>

      <ul className="space-y-3 mb-6">
        <li>
          <a
            className={`
              flex items-center gap-2 rounded-md px-4 py-2 text-center font-semibold justify-center transition-colors
              ${
                isDark
                  ? "border border-gray-600 text-white hover:bg-gray-800"
                  : "border border-black text-black hover:bg-black hover:text-white"
              }
            `}
            href="mailto:luckychauhan.12w@gmail.com"
          >
            <FaEnvelope className={isDark ? "text-white" : "text-black"} />
            luckychauhan.12w@gmail.com
          </a>
        </li>

        <li>
          <a
            className={`
              flex items-center gap-2 rounded-md px-4 py-2 text-center font-semibold justify-center transition-colors
              ${
                isDark
                  ? "border border-gray-600 text-white hover:bg-gray-800"
                  : "border border-black text-black hover:bg-black hover:text-white"
              }
            `}
            href="mailto:luckychauhan.dev@zohomail.in"
          >
            <FaEnvelope className={isDark ? "text-white" : "text-black"} />
            luckychauhan.dev@zohomail.in
          </a>
        </li>

        <li>
          <a
            className={`
              flex items-center gap-2 rounded-md px-4 py-2 text-center font-semibold justify-center transition-colors
              ${
                isDark
                  ? "border border-gray-600 text-white hover:bg-gray-800"
                  : "border border-black text-black hover:bg-black hover:text-white"
              }
            `}
            href="https://www.linkedin.com/in/luckychauhandev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={isDark ? "text-white" : "text-black"} />
            LinkedIn
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
