import { useState, ChangeEvent, useMemo } from "react";

function factorialOf(n: number): number {
  console.log("factorialOf(n) was called!");
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}

function App() {
  const [number, setNumber] = useState(1);
  const [, setInc] = useState(0);

  const factorial = factorialOf(number);
	// const factorial = useMemo(() => factorialOf(number), [number]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(event.target.value));
  };

  const onClick = () => setInc((i) => i + 1);

  return (
    <div>
      Factorial of
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
			<hr/>
      <button onClick={onClick}>Re-render</button>
    </div>
  );
}

export default App;
