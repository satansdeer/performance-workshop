import { useState } from "react"

export const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<p>{count}</p>

			<button type="button" onClick={() => setCount((c) => c + 1)}>
				Increment
			</button>
		</div>
	);
};
