import { useState, useEffect } from "react";
import BreedOption from "./BreedOption";

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
  const [breedList, setBreedList] = useState<BreedListProps[]>([]);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const breedId = e.target.value;
    onSelectChange(breedId);
  };

  useEffect(() => {
    // Fetch breeds and populate select options
    fetch("https://api.thecatapi.com/v1/breeds")
      .then((response) => response.json())
      .then((data) => setBreedList(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <label htmlFor="breed_select">Breed</label>
      <select id="breed_select" onChange={handleSelect}>
        <option disabled value="breed">
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
