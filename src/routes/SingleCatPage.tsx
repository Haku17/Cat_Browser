import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useCatContext } from "../context/CatContext";
import Main from "../styles/SingleCatPage.styles";

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
        })
        .catch((err) => {
          console.error("Error: ", err);
          alert("Something went wrong. Please try again, Miau!");
        });
    }
  }, [catBreedContext]);

  return (
    <Main>
      <h1>{catBreedContext?.name}</h1>
      <img src={`https://cdn2.thecatapi.com/images/${photoId}.jpg`}></img>
      <p>
        <strong>Origin</strong> <br />
        {catBreedContext?.origin}
      </p>
      <p>
        <strong>Temperament</strong> <br />
        {catBreedContext?.temperament}
      </p>
      <p>
        <strong>Description</strong> <br />
        {catBreedContext?.description}
      </p>
      <Link to={`/?breed=${catBreedContext?.id}`}>Back</Link>
    </Main>
  );
};

export default SingleCatPage;
