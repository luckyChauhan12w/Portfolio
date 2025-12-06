import skills from "../data/skills";
import { useTheme } from "../context/ThemeContext";

const Skills = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="skills"
      className={`
        border-2 p-6 mb-8 transition-colors duration-200
        ${
          isDark
            ? "bg-[#101828] border-gray-700 text-white"
            : "bg-white border-black text-black"
        }
      `}
    >
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>

      {skills.map(({ category, icon: CategoryIcon, items }) => (
        <div key={category} className="mb-6">
          <h3
            className={`
              text-lg font-semibold mb-3 flex items-center gap-2
              ${isDark ? "text-gray-200" : "text-gray-800"}
            `}
          >
            <CategoryIcon
              className={`text-xl ${isDark ? "text-white" : "text-black"}`}
            />
            {category}
          </h3>

          <div className="flex flex-wrap gap-4">
            {items.map(({ name, icon: ItemIcon }, index) => (
              <span
                key={index}
                className={`
                  rounded-full px-4 py-1 text-sm font-medium border flex items-center gap-2
                  ${
                    isDark
                      ? "border-gray-600 text-white bg-[#1a2332]"
                      : "border-black text-black bg-white"
                  }
                `}
              >
                <ItemIcon
                  className={`text-md ${isDark ? "text-white" : "text-black"}`}
                />
                {name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
