import { useState, useEffect } from "react";
import db from "db";
// const id = "dUrfVOuWOfZmww9dpLeZ";

const useFirestore = (_id) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const unSub = db
      .collection("report")
      .doc(_id)
      .onSnapshot(function (doc) {
        let allImages = doc.data().images;
        setImages(allImages);
      });

    return () => unSub();
    // this is a cleanup function that react will run when
    // a component using the hook un mounts
  }, [_id]);

  return { images };
};

export default useFirestore;
