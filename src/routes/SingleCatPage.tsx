import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useCatContext } from "../context/CatContext";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #262d40;
  padding: 1rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
  }

  p {
    color: #fff;
  }

  img {
    padding-top: 1rem;
  }

  a {
    background-color: #6a68f5;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 20px 40px;
    border-radius: 10px;
    align-self: flex-start;

    &:hover {
      background-color: #8684ff;
    }
  }
`;

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
    <Main>
      <Link to={`/?breed=${catBreedContext?.id}`}>Back</Link>
      <img src={`https://cdn2.thecatapi.com/images/${photoId}.jpg`}></img>
      <h1>{catBreedContext?.name}</h1>
      <p>{catBreedContext?.origin}</p>
      <p>{catBreedContext?.temperament}</p>
      <p>{catBreedContext?.description}</p>
    </Main>
  );
};

export default SingleCatPage;
