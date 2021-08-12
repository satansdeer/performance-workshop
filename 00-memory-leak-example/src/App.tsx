import { useState } from "react";
import { Fade } from "react-awesome-reveal"

type Item = {
	id: number
}

function App() {
  const [items, setItems] = useState<Item[]>([]);

	function addItem() {
		setItems(oldItems => [...oldItems, {id: Date.now()}])
	}

	function removeItem() {
		setItems(oldItems => oldItems.slice(1))
	}

  return (
    <>
      <button onClick={addItem}>Add item</button>
      <button onClick={removeItem}>Remove item</button>
      <ul>
        {items.map((item, i) => (
					<Fade key={item.id}>
      	    <li>Item {i}</li>
					</Fade>
        ))}
      </ul>
    </>
  );
}

export default App;
