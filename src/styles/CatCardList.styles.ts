import styled from "styled-components";

export const StyledContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  width: 100%;
  gap: 10px;
`;

export const Button = styled.button`
  font-size: 1.2rem;
  background-color: transparent;
  border: 2px solid #43b67d;
  margin-top: 2rem;
  width: 150px;
  padding: 8px 0;
  color: #43b67d;
  border-radius: 15px;
  transition: ease all 200ms;
  align-self: center;
  cursor: pointer;

  &:hover {
    color: #50db96;
    border: 2px solid #50db96;
  }
`;
