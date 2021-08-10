import { Morty } from "./types";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

const Container = styled.div`
  border-radius: 16px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.035), 0 4px 25px rgba(0, 0, 0, 0.07);
  cursor: pointer;

  &:hover {
    color: black;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.035), 0 6px 35px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;

const Name = styled.h3`
	display: block;
  margin: 10px 20px;
  font-size: 1.4rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

const Figure = styled.figure`
  padding: 100% 0 0;
  margin: 0;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 6px 6px 0 0;

  img {
    max-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

type CardProps = Morty;

export const Card = ({ name, imageFrontPath }: CardProps) => {

  return (
    <Fade>
      <Container>
        <Figure>
          <img src={imageFrontPath} alt="morty" />
        </Figure>
        <Name>{name}</Name>
      </Container>
    </Fade>
  );
};
