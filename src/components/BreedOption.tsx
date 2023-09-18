type BreedOptionProps = {
  id: string;
  name: string;
};

const BreedOption = ({ id, name }: BreedOptionProps) => {
  return <option value={id}>{name}</option>;
};

export default BreedOption;
