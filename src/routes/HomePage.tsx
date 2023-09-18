import { useState } from "react";
import BreedSelect from "../components/BreedSelect";
import CatCardList from "../components/CatCardList";

const HomePage = () => {
  const [catId, setCatId] = useState("");
  return (
    <>
      <h1>Cat Browser!</h1>
      <BreedSelect onSelectChange={setCatId} />
      <CatCardList catId={catId} />
    </>
  );
};

export default HomePage;
