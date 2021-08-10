import { Morty } from "./types";
import AutoSizer from "react-virtualized-auto-sizer";
import { useState, useEffect } from "react";
import { Card } from "./Card";
import { FixedSizeGrid as Grid } from "react-window";
import { COLUMNS } from "./constants"

function App() {
  const [mortys, setMortys] = useState<Morty[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fetch("/mortys.json").then((res) => res.json());
      setMortys(data);
    })();
  }, []);

  if (!mortys) {
    return null;
  }

  return (
    <AutoSizer>
      {({ width, height }) => {
				const columnWidth = width/COLUMNS;

        return <Grid<Morty[]>
          itemData={mortys}
          rowCount={Math.ceil(mortys.length / COLUMNS)}
          columnCount={COLUMNS}
          columnWidth={columnWidth}
          rowHeight={columnWidth * 1.5}
          height={height}
          width={width}
        >
          {Card}
        </Grid>
      }}
    </AutoSizer>
  );
}

export default App;
