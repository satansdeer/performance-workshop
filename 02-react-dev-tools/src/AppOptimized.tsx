import { useState, memo, useCallback } from "react";

type ItemType = {
  text: string;
  id: number;
  liked: boolean;
};

const DEFAULT_ITEMS: ItemType[] = [
  { text: "test 0", id: 0, liked: false },
  { text: "test 1", id: 1, liked: false },
  { text: "test 2", id: 2, liked: false },
  { text: "test 3", id: 3, liked: false },
  { text: "test 4", id: 4, liked: false },
  { text: "test 5", id: 5, liked: false },
];

type ItemProps = {
	text: string
	liked: boolean
	id: number
	onItemClick: (id: number) => void
};

const Item = memo(({ text, id, liked, onItemClick }: ItemProps) => {
	const onClick = () => {
		onItemClick(id)
	}

  return (
    <li onClick={onClick}>
      {text} <input type="checkbox" checked={liked} />
    </li>
  );
})

function App() {
  const [items, setItems] = useState(DEFAULT_ITEMS);

  const onItemClick = useCallback((id: number) => {
    setItems((oldItems) =>
      oldItems.map((oldItem) =>
        oldItem.id === id ? { ...oldItem, liked: !oldItem.liked } : oldItem
      )
    );
  }, []);

  return (
    <ul>
      {items.map(({id, liked, text}) => (
        <Item key={id} liked={liked} id={id} text={text} onItemClick={onItemClick} />
      ))}
    </ul>
  );
}

export default App;
