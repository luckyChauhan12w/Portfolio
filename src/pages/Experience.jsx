import { useTheme } from "../context/ThemeContext";

const Experience = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="projects"
      className={`
        border-2 p-6 mb-8 transition-colors duration-200
        ${
          isDark
            ? "bg-[#101828] border-gray-700 text-white"
            : "bg-white border-black text-black"
        }
      `}
    >
      <h2 className="text-3xl font-bold mb-6">Experience</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Full-Stack Web Developer Intern
          </h3>

          <p
            className={`italic mb-4 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Sheryians Coding School (6 Months) <br />
            Bhopal, Madhya Pradesh, India
          </p>

          <ul
            className={`
              list-disc list-inside space-y-2 text-justify
              ${isDark ? "text-gray-300" : "text-gray-800"}
            `}
          >
            <li>
              Designed and developed the Skill Management Module, a key feature
              allowing users to dynamically add, edit, and visualize their
              professional skills with an optimized backend API and a responsive
              user interface.
            </li>
            <li>
              Built and integrated the Job Application Module, which streamlined
              the entire job application workflow. The system includes secure
              backend API connections, real-time status updates, and enhanced
              user experience through seamless frontend integration.
            </li>
            <li>
              Collaborated closely with cross-functional teams to ensure that
              the modules adhered to best practices in UI/UX design, security,
              and performance optimization.
            </li>
            <li>
              Assisted in deploying applications using modern DevOps practices
              and contributed to code reviews to maintain high code quality
              standards.
            </li>
          </ul>

          <div
            className={`mt-6 text-sm ${
              isDark ? "text-gray-400" : "text-gray-700"
            }`}
          >
            <p className="font-semibold mb-1">
              About SHERYIANS PRIVATE LIMITED:
            </p>

            <p>
              SHERYIANS PRIVATE LIMITED is an emerging leader in IT education
              and professional training in India. Incorporated on October 13,
              2022, the company has quickly established itself as a premier
              institution for developing talented coders and designers.
            </p>

            <p>
              The company operates from its headquarters located at 23-B, Sector
              C, Indrapuri, near Chai Sutta Bar, Bhopal, Madhya Pradesh 462022.
              It specializes in delivering state-of-the-art coding bootcamps,
              skill development programs, and job placement assistance.
            </p>

            <p>
              With a strong mission to empower aspiring developers through
              hands-on learning, SHERYIANS PRIVATE LIMITED focuses on innovative
              teaching methodologies, cutting-edge technology stacks, and
              fostering industry connections to help students achieve their
              career goals.
            </p>

            <p>
              The organization currently employs a growing team of instructors,
              developers, and administrative staff dedicated to maintaining its
              high standards of education and community outreach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
