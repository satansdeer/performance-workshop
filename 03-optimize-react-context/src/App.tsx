import { memo } from "react";
import { ItemsProvider, useItems, useOnItemClick } from "./ItemsContext";

type ItemProps = {
  text: string;
  liked: boolean;
  id: number;
};

const Item = memo(({ text, id, liked }: ItemProps) => {
  const onItemClick = useOnItemClick();

  const onClick = () => {
    onItemClick(id);
  };

  return (
    <li onClick={onClick}>
      {text} <input type="checkbox" checked={liked} />
    </li>
  );
});

const ItemsList = memo(() => {
  const items = useItems();

  return (
    <ul>
      {items.map(({ id, liked, text }) => (
        <Item key={id} liked={liked} id={id} text={text} />
      ))}
    </ul>
  );
});

function App() {
  return (
    <>
      <ItemsProvider>
        <ItemsList />
      </ItemsProvider>
    </>
  );
}

export default App;
