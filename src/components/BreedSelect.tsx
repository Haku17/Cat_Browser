import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BreedOption from "./BreedOption";
import { useCatContext } from "../context/CatContext";

type BreedListProps = {
  id: string;
  name: string;
  origin: string;
  temperament: string;
  description: string;
};

type BreedSelectProps = {
  onSelectChange: React.Dispatch<React.SetStateAction<string>>;
};

const BreedSelect = ({ onSelectChange }: BreedSelectProps) => {
  const { catBreedContext, setCatBreedContext } = useCatContext();
  const [breedList, setBreedList] = useState<BreedListProps[]>([]);

  // Access URL parameter if valid
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const breedParam = params.get("breed");

  // lifts BreedId state up to home page when select value changes
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const breedId = e.target.value;
    // filter breed info to update catContext
    const filterBreedList = breedList.filter((breed) => breed.id === breedId);
    // Update Cat context with breed info
    setCatBreedContext({
      id: filterBreedList[0].id,
      name: filterBreedList[0].name,
      origin: filterBreedList[0].origin,
      temperament: filterBreedList[0].temperament,
      description: filterBreedList[0].description,
    });
    onSelectChange(breedId);
  };

  useEffect(() => {
    // Fetch breeds and populate select options
    fetch("https://api.thecatapi.com/v1/breeds")
      .then((response) => response.json())
      .then((data) => setBreedList(data))
      .catch((err) => console.log(err));

    // Check if a previous breedId exists and set it if it does
    if (catBreedContext !== null && catBreedContext?.id !== "") {
      onSelectChange(catBreedContext.id);
    } else if (breedParam !== null) {
      onSelectChange(breedParam);
    }
  }, []);

  return (
    <>
      <label htmlFor="breed_select">Breed</label>
      <select
        id="breed_select"
        value={catBreedContext?.id || "default"}
        onChange={handleSelect}
      >
        <option disabled value="default" selected>
          Select breed
        </option>
        {breedList.map((breed) => (
          <BreedOption key={breed.id} id={breed.id} name={breed.name} />
        ))}
      </select>
    </>
  );
};

export default BreedSelect;
