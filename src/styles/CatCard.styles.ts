import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  background-color: #262d40;
  padding: 1rem;
  box-shadow: 5px 5px 5px #111723;
  border-radius: 15px;

  a {
    width: 150px;
    max-width: 100%;
    padding: 8px 0;
    font-size: 1.2rem;
    background-color: #6a68f5;
    color: #fff;
    border-radius: 15px;
    transition: ease background-color 200ms;
    align-self: center;
    margin-top: 1rem;

    &:hover {
      background-color: #8684ff;
    }
  }

  @media (max-width: 768px) {
    width: 80%;

    a {
      width: 80%;
    }
  }
`;

export default StyledCard;
