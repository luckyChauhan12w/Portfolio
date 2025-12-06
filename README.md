# 💼 Lucky Chauhan - Portfolio

Personal portfolio website built with React, Vite, and Tailwind CSS v4.

## ✨ Features

- 🌙 **Dark Mode** - Toggle between light and dark themes with persistent storage
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development
- 🎨 **Modern UI** - Tailwind CSS v4 for beautiful, responsive design
- 🔄 **Smooth Transitions** - Framer Motion for elegant animations
- 📱 **Responsive** - Works seamlessly on all devices
- 🧭 **SPA Routing** - React Router for smooth page navigation

## 🚀 Quick Start

### Prerequisites
```bash
node >= 14.x
npm >= 6.x
```

### Installation

1. Clone the repository
```bash
git clone https://github.com/luckyChauhan12w/Portfolio.git
cd Portfolio
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## 🌙 Dark Mode Implementation

The dark mode feature is implemented using:
- **Context API** for global theme state
- **localStorage** for theme persistence
- **Tailwind CSS dark mode** with class strategy
- **Smooth transitions** for theme switching

### Usage
```jsx
import { useTheme } from './context/ThemeContext';

function Component() {
  const { theme, toggleTheme, isDark } = useTheme();
  return (
    <button onClick={toggleTheme}>
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
```

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **React Icons** - Icon library

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   └── ThemeToggle.jsx
│   ├── context/         # React Context
│   │   └── ThemeContext.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   ├── data/            # Static data
│   ├── assets/          # Images, icons
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/
└── package.json
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding Dark Mode to Components

Use Tailwind's `dark:` prefix for dark mode styles:

```jsx
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  Content here
</div>
```

### Theme Colors

Dark mode uses Tailwind's gray color palette:
- Background: `gray-900`
- Text: `white`
- Borders: `gray-700`
- Hover states: `gray-800`

## 👨‍💻 Author

**Lucky Chauhan**
- GitHub: [@luckyChauhan12w](https://github.com/luckyChauhan12w)
- LinkedIn: [Lucky Chauhan](https://www.linkedin.com/in/luckychauhandev/)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ by Lucky Chauhan**
