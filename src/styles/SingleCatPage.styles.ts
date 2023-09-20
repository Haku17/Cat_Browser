import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 840px;
  background-color: #262d40;
  padding: 1rem;
  margin: 0 auto;
  justify-content: start;
  text-align: start;
  box-shadow: 5px 5px 5px #111723;
  border-radius: 15px;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    margin: 0;
  }

  p {
    color: #fff;
    white-space: pre-line;
  }

  img {
    padding-top: 1rem;
  }

  a {
    width: 150px;
    padding: 8px 0;
    font-size: 1.2rem;
    background-color: #6a68f5;
    color: #fff;
    border-radius: 15px;
    transition: ease background-color 200ms;
    align-self: flex-start;
    text-align: center;

    &:hover {
      background-color: #8684ff;
    }
  }
`;

export default Main;
