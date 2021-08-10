import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &:after {
    content: "";
    flex: auto;
  }

  &:after,
  & > * {
    width: calc(20% - 30px);
    margin-bottom: 20px;
  }

  @media (max-width: 800px) {
    &:after,
    & > * {
      width: 100%;
    }
  }
`;
