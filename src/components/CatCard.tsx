import { Link } from "react-router-dom";
import StyledCard from "../styles/CatCard.styles";

const CatCard = ({ photoId, url }: { photoId: string; url: string }) => {
  return (
    <StyledCard>
      <img src={url} />
      <Link to={`/breed/${photoId}`}>View details</Link>
    </StyledCard>
  );
};

export default CatCard;
