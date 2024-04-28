import { Button } from "@/components/Button";
import { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);

	function increment() {
		setCount((prev) => ++prev);
	}

	function decrement() {
		setCount((prev) => --prev);
	}

	return (
		<div>
			<p>count is {count}</p>
			<Button variant="outline" onClick={increment}>
				increment
			</Button>
			<Button variant="destructive" onClick={decrement}>
				decrement
			</Button>
		</div>
	);
}

export { Counter };
