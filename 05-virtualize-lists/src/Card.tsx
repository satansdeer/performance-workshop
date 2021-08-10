import { Morty } from "./types";
import { GridChildComponentProps } from "react-window";
import { Container, Figure, Name } from "./Card.styles";
import { Fade } from "react-awesome-reveal";
import { COLUMNS } from "./constants";

const GUTTER = 5;

type CardProps = GridChildComponentProps<Morty[]>;

export const Card = ({ data, style, columnIndex, rowIndex }: CardProps) => {
  const item = data[rowIndex * COLUMNS + columnIndex];

  if (!item) {
    return null;
  }

  return (
    <Fade
      style={{
        ...style,
        left: (style.left as number) + GUTTER / 2,
        width: (style.width as number) - GUTTER,
      }}
    >
      <Container>
        <Figure>
          <img src={item.imageFrontPath} alt="morty" />
        </Figure>
        <Name>{item.name}</Name>
      </Container>
    </Fade>
  );
};
