import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="home"
      className={`
        border-2 p-6 overflow-hidden relative transition-colors duration-200
        ${
          isDark
            ? "bg-[#101828] border-gray-700 text-white"
            : "bg-white border-black text-black"
        }
      `}
    >
      <div className="w-full h-full flex items-center justify-center relative">
        <img
          src="https://user-images.githubusercontent.com/74038190/225813708-98b745f2-7d22-48cf-9150-083f1b00d6c9.gif"
          alt="Introduction Animation"
          className="w-full"
          style={{ height: "80vh" }}
        />
      </div>
    </section>
  );
};

export default Home;
