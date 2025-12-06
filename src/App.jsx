import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects"; // Keep projects as component or move to page if preferred
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { isDark } = useTheme();
  return (
    <Router>
      <div
        className={` ${
          isDark ? "bg-gray-900" : "bg-white"
        }  text-black font-sans min-h-screen transition-colors duration-200`}
      >
        <Navbar />
        <Sidebar />
        <main className="p-3 ml-50 mt-18">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
