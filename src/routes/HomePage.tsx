import { useState } from "react";
import BreedSelect from "../components/BreedSelect";

const HomePage = () => {
  const [catId, setCatId] = useState("");
  return (
    <>
      <h1>Cat Browser!</h1>
      <BreedSelect onSelectChange={setCatId} />
      <p>{catId}</p>
    </>
  );
};

export default HomePage;
