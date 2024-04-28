import { Counter } from "@/features/Counter";
import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import reactLogo from "./assets/react.svg";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<div
					className={`
        my-4 text-center
        font-bold text-5xl tracking-tight
        bg-gradient-to-r from-green-500 via-blue-500 to-pink-500
        bg-clip-text text-transparent 
    `}
				>
					Tailwind CSS is Awesome
				</div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button type="button" onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>

				<Counter />
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
