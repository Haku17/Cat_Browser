import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  height: 350px;
  background-color: #262d40;
  padding: 1rem;
  box-shadow: 5px 5px 5px #111723;

  img {
    height: 300px;
    object-fit: cover;
    object-position: center;
  }

  a {
    width: 55%;
    padding: 8px 0;
    background-color: #6a68f5;
    color: #fff;
    border-radius: 10px;
    transition: ease background-color 200ms;
    align-self: center;

    &:hover {
      background-color: #8684ff;
    }
  }
`;

const CatCard = ({ photoId, url }: { photoId: string; url: string }) => {
  return (
    <StyledCard>
      <img src={url} />
      <Link to={`/breed/${photoId}`}>View details</Link>
    </StyledCard>
  );
};

export default CatCard;
