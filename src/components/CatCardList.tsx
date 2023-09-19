import { CSSProperties, useEffect, useState } from "react";
import CatCard from "./CatCard";

const ContainerStyles: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "start",
  width: "100%",
  gap: "10px",
};

type CatPhotoProps = {
  id: string;
  url: string;
  width: number;
  height: number;
};

const CatCardList = ({ catId }: { catId: string }) => {
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
    fetch(
      `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${catId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCatPhotos(data);
        // reset start index if new catPhotos
        setStartIndex(0);
      })
      .catch((e) => console.log(e));
  }, [catId]);

  // Inital call of loadNextPhots(), resets if catPhotos array changes
  useEffect(() => {
    loadNextPhotos();
  }, [catPhotos]);

  return (
    <>
      {!catId && <p>Select a breed to see more cats!</p>}
      <div style={ContainerStyles}>
        {displayedPhotos.map((photo) => (
          <CatCard key={photo.id} id={photo.id} url={photo.url} />
        ))}
      </div>
      {/* show button as long as there are more photos in the array */}
      {startIndex <= catPhotos.length && (
        <button onClick={loadNextPhotos}>Load More 😼</button>
      )}
    </>
  );
};

export default CatCardList;
