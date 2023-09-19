import { useState } from "react";
import BreedSelect from "../components/BreedSelect";
import CatCardList from "../components/CatCardList";

const HomePage = () => {
  const [catId, setCatId] = useState("");
  const [error, setError] = useState(false);
  return (
    <>
      <h1>Cat Browser!</h1>
      <h2>Select a breed to see some cats!</h2>
      <BreedSelect onSelectChange={setCatId} setError={setError} />
      <CatCardList catId={catId} errorMessage={error} setError={setError} />
    </>
  );
};

export default HomePage;
