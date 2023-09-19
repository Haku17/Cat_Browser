import { useParams, Link } from "react-router-dom";
import { useCatContext } from "../context/CatContext";
import { useEffect } from "react";

const SingleCatPage = () => {
  const { catBreedContext, setCatBreedContext } = useCatContext();
  // get photoId parameter from URL
  const params = useParams();
  const photoId = params.photoId;

  useEffect(() => {
    // This recreates the context if it is missing, or user refreshes the page and context is lost
    if (catBreedContext === null || catBreedContext?.id === "") {
      fetch(`https://api.thecatapi.com/v1/images/${photoId}`)
        .then((response) => response.json())
        .then((data) => {
          setCatBreedContext({
            id: data.breeds[0].id,
            name: data.breeds[0].name,
            origin: data.breeds[0].origin,
            temperament: data.breeds[0].temperament,
            description: data.breeds[0].description,
          });
        });
    }
  }, [catBreedContext]);

  return (
    <>
      <Link to={`/?breed=${catBreedContext?.id}`}>Back</Link>
      <p>{catBreedContext?.name}</p>
      <p>{catBreedContext?.origin}</p>
      <p>{catBreedContext?.temperament}</p>
      <p>{catBreedContext?.description}</p>
      <img src={`https://cdn2.thecatapi.com/images/${photoId}.jpg`}></img>
    </>
  );
};

export default SingleCatPage;
