import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Ensure initial theme class is applied before React hydrates to avoid flash
try {
	const stored = localStorage.getItem('theme-preference');
	if (stored === 'light' || stored === 'dark') {
		document.documentElement.classList.add(stored);
	} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
		document.documentElement.classList.add('light');
	} else {
		document.documentElement.classList.add('dark');
	}
} catch {}

createRoot(document.getElementById("root")!).render(<App />);
