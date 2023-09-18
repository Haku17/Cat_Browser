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

  useEffect(() => {
    if (!catId) {
      return;
    }
    fetch(
      `https://api.thecatapi.com/v1/images/search?limit=3&breed_ids=${catId}`
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
          <CatCard id={photo.id} url={photo.url} />
        ))}
      </div>
    </>
  );
};

export default CatCardList;
