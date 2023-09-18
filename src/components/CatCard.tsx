import { Link } from "react-router-dom";

const CatCard = ({ id, url }: { id: string; url: string }) => {
  return (
    <div>
      <img src={url} />
      <Link to={`breed/${id}`}>Learn More</Link>
    </div>
  );
};

export default CatCard;
