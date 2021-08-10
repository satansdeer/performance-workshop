import {
  createContext,
  FC,
  useState,
  useCallback,
  useContext,
  useMemo,
} from "react";

type ItemsContextValueType = {
  items: ItemType[];
  onItemClick(id: number): void;
};

const ItemsContext = createContext({} as ItemsContextValueType);

export type ItemType = {
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

export const ItemsProvider: FC = ({ children }) => {
  const [items, setItems] = useState(DEFAULT_ITEMS);

  const onItemClick = useCallback((id: number) => {
    setItems((oldItems) =>
      oldItems.map((oldItem) =>
        oldItem.id === id ? { ...oldItem, liked: !oldItem.liked } : oldItem
      )
    );
  }, []);

  const value = useMemo(() => ({ items, onItemClick }), [items, onItemClick]);

  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
};

export const useItems = () => useContext(ItemsContext);
export const useOnItemClick = () => {
	const {onItemClick} = useItems()
	return useMemo(() => onItemClick, [onItemClick])
}
