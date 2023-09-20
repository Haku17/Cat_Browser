import { Link } from "react-router-dom";
import StyledCard from "../styles/CatCard.styles";

type CatCardProps = {
  photoId: string;
  url: string;
};

const CatCard = ({ photoId, url }: CatCardProps) => {
  return (
    <StyledCard>
      <img src={url} />
      <Link to={`/breed/${photoId}`}>View details</Link>
    </StyledCard>
  );
};

export default CatCard;
