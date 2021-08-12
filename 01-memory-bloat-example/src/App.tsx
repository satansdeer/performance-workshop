import { Container } from "./App.styles";
import { Morty } from "./types";
import { useState, useEffect, useRef } from "react";
import { Card } from "./Card";

function App() {
  const [mortys, setMortys] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const loader = useRef<HTMLDivElement>(null);

  const handleObserver = (entities: IntersectionObserverEntry[]) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((p) => p + 1);
    }
  };

  useEffect(() => {
    setMortys((m) => [...m, ...m]);
  }, [page]);

  useEffect(() => {
    (async () => {
      const data = await fetch("/mortys.json").then((res) => res.json());
      setMortys(data);
    })();
    var options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  return (
		<>
    <Container>
      {mortys.map((morty: Morty) => (
        <Card key={morty.name} {...morty} />
      ))}
      <div ref={loader}>Loading more Mortys...</div>
    </Container>
		</>
  );
}

export default App;
