import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const storedTheme = window.localStorage.getItem("theme");
if (storedTheme === "dark" || storedTheme === "light") {
  document.documentElement.classList.toggle("dark", storedTheme === "dark");
}

createRoot(document.getElementById("root")!).render(<App />);
