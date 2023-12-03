import { clsx } from "clsx";
import { useState } from "react";
import { Card } from "./components/Card";
import { Nav } from "./components/Nav";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={clsx("h-dvh flex flex-col", darkMode && "dark text-white")}>
      <Nav dark={darkMode} setDark={setDarkMode} />
      <Card />
      <footer className="mt-auto flex py-5 text-gray-500 dark:border-gray-800">
        <span className="mx-auto">©Devisio {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}

export default App;
