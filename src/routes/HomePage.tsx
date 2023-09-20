import { useState } from "react";
import BreedSelect from "../components/BreedSelect";
import CatCardList from "../components/CatCardList";
import Subtext from "../styles/HomePage.styles";

const HomePage = () => {
  const [catId, setCatId] = useState("");
  const [error, setError] = useState(false);
  return (
    <>
      <h1>Cat browser</h1>
      <Subtext>Select a breed to see some cats, Miau!</Subtext>
      <BreedSelect onSelectChange={setCatId} setError={setError} />
      <CatCardList catId={catId} errorMessage={error} setError={setError} />
    </>
  );
};

export default HomePage;
