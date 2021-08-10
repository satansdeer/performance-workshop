import { useState, useRef } from "react";
import { Fade } from "react-awesome-reveal";

type Item = {
  id: number;
};

type Optional<T> = T | null;

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const memLeakRef = useRef<Optional<HTMLLIElement>[]>([]);

  function addItem() {
    setItems((oldItems) => [...oldItems, { id: Date.now() }]);
  }

  function removeItem() {
    setItems((oldItems) => oldItems.slice(1));
  }

  return (
    <>
      <button onClick={addItem}>Add item</button>
      <button onClick={removeItem}>Remove item</button>
      <ul>
        {items.map((item, i) => (
          <Fade>
            <li ref={(el) => memLeakRef.current.push(el)} key={item.id}>
              Item {i}
            </li>
          </Fade>
        ))}
      </ul>
    </>
  );
}

export default App;
