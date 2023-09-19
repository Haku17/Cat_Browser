import React, { createContext, useState, useContext } from "react";

type CatBreedContext = {
  id: string;
  name: string;
  origin: string;
  temperament: string;
  description: string;
};

type CatContextData = {
  catBreedContext: CatBreedContext | null;
  setCatBreedContext: React.Dispatch<
    React.SetStateAction<CatBreedContext | null>
  >;
};

type CatContextProviderProps = {
  children: React.ReactNode;
};

// Context about our cat breed
const CatContext = createContext<CatContextData | null>(null);

// Component that lets us pass context and the context setter
const CatContextProvider = ({ children }: CatContextProviderProps) => {
  const [catBreedContext, setCatBreedContext] =
    useState<CatBreedContext | null>({
      id: "",
      name: "",
      origin: "",
      temperament: "",
      description: "",
    });

  return (
    <CatContext.Provider
      value={{
        catBreedContext: catBreedContext,
        setCatBreedContext: setCatBreedContext,
      }}
    >
      {children}
    </CatContext.Provider>
  );
};

// Custom hook that validates our context is not empty before using
export const useCatContext = () => {
  const context = useContext(CatContext);
  if (!context) {
    throw new Error("No Specific cat breed data found!");
  }
  return context;
};

export default CatContextProvider;
