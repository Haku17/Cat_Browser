import { useEffect, useState } from "react";
import CatCard from "./CatCard";

type CatPhotoProps = {
  id: string;
  url: string;
  width: number;
  height: number;
};

const CatCardList = ({ catId }: { catId: string }) => {
  const [catPhotos, setCatPhotos] = useState<CatPhotoProps[]>([]);

  // Fetches images of the selected cat breed by catId, then sets them to state variable (catPhoto) to be rendered below by CatCard component
  useEffect(() => {
    if (!catId) {
      return;
    }
    fetch(
      `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${catId}`
    )
      .then((response) => response.json())
      .then((data) => setCatPhotos(data))
      .catch((e) => console.log(e));
  }, [catId]);

  return (
    <>
      {!catId && <p>Select a breed to see more cats!</p>}
      <div>
        {catPhotos.map((photo) => (
          <CatCard key={photo.id} id={photo.id} url={photo.url} />
        ))}
      </div>
    </>
  );
};

export default CatCardList;
