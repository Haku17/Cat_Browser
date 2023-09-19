import { useState } from "react";
import BreedSelect from "../components/BreedSelect";
import CatCardList from "../components/CatCardList";

const HomePage = () => {
  const [catId, setCatId] = useState("");
  const [error, setError] = useState(false);
  return (
    <>
      <h1>Cat browser</h1>
      <p>Select a breed to see some cats, Miau!</p>
      <BreedSelect onSelectChange={setCatId} setError={setError} />
      <CatCardList catId={catId} errorMessage={error} setError={setError} />
    </>
  );
};

export default HomePage;
