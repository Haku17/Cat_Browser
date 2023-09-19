import { CSSProperties } from "react";
import { Link } from "react-router-dom";

const ImgStyles: CSSProperties = {
  width: "200px",
  height: "200px",
  objectFit: "cover",
  objectPosition: "center",
};

const DivStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

const CatCard = ({ id, url }: { id: string; url: string }) => {
  return (
    <div style={DivStyles}>
      <img src={url} style={ImgStyles} />
      <Link to={`breed/${id}`}>Learn More</Link>
    </div>
  );
};

export default CatCard;
