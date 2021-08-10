import styled from "styled-components"

export const Container = styled.div`
  border-radius: 16px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.035), 0 4px 25px rgba(0, 0, 0, 0.07);
  cursor: pointer;
	z-index: 1;

  &:hover {
    color: black;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.035), 0 6px 35px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
		z-index: 10;
  }
`;

export const Name = styled.h3`
  margin: 10px 5px;
  font-size: 0.5rem;
	text-align: center;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`;

export const Figure = styled.figure`
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
