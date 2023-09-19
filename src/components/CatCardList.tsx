import { useEffect, useState } from "react";
import styled from "styled-components";
import CatCard from "./CatCard";
import FetchErrorAlert from "./FetchErrorAlert";

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  width: 100%;
  gap: 10px;
`;

// const ContainerStyles: CSSProperties = {
//   display: "flex",
//   flexWrap: "wrap",
//   justifyContent: "center",
//   alignItems: "start",
//   width: "100%",
//   gap: "10px",
// };

type CatPhotoProps = {
  id: string;
  url: string;
  width: number;
  height: number;
};

type CatCardListProps = {
  catId: string;
  errorMessage: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
};

const CatCardList = ({ catId, errorMessage, setError }: CatCardListProps) => {
  const [catPhotos, setCatPhotos] = useState<CatPhotoProps[]>([]);
  const [displayedPhotos, setDisplayedPhotos] = useState<CatPhotoProps[]>([]);
  const [startIndex, setStartIndex] = useState(0);

  // Function to load the next set of photos
  const loadNextPhotos = () => {
    const endIndex = startIndex + 3;
    setDisplayedPhotos(catPhotos.slice(0, endIndex));
    setStartIndex(endIndex);
    console.log("catPhotos: ", catPhotos.length);
    console.log("startIndex ", startIndex);
  };

  // Fetches images of the selected cat breed by catId, then sets them to state variable (catPhoto) to be rendered below by CatCard component
  useEffect(() => {
    if (!catId) {
      return;
    }
    // set error state back to false on next attempt
    setError(false);
    fetch(
      `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${catId}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data === null || Object.keys(data).length === 0) {
          throw new Error("Empty data set!");
        }

        setCatPhotos(data);
        // reset start index if new catPhotos
        setStartIndex(0);
      })
      .catch((e) => {
        console.error("Error", e);
        // empties cat photos on fail
        setCatPhotos([]);
        setError(true);
      });
  }, [catId]);

  // Inital call of loadNextPhots(), resets if catPhotos array changes
  useEffect(() => {
    loadNextPhotos();
  }, [catPhotos]);

  return (
    <>
      {!catId && <p>Select a breed to see more cats!</p>}
      {errorMessage && <FetchErrorAlert />}
      <StyledContainer>
        {displayedPhotos.map((photo) => (
          <CatCard key={photo.id} photoId={photo.id} url={photo.url} />
        ))}
      </StyledContainer>
      {/* show button as long as there are more photos in the array */}
      {startIndex < catPhotos.length && (
        <button onClick={loadNextPhotos}>Load More 😼</button>
      )}
    </>
  );
};

export default CatCardList;
