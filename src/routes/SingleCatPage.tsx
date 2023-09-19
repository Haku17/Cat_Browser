import { useParams, Link } from "react-router-dom";
import { useCatContext } from "../context/CatContext";

const SingleCatPage = () => {
  const { catBreedContext } = useCatContext();
  // get BreedId parameter from URL
  const params = useParams();
  const breedId = params.breedId;

  return (
    <>
      <Link to={"/"}>Back</Link>
      <p>{catBreedContext?.name}</p>
      <p>{catBreedContext?.origin}</p>
      <p>{catBreedContext?.temperament}</p>
      <p>{catBreedContext?.description}</p>
      <img src={`https://cdn2.thecatapi.com/images/${breedId}.jpg`}></img>
    </>
  );
};

export default SingleCatPage;
