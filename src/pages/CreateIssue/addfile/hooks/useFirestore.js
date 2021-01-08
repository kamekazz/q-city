import { useState, useEffect } from "react";
import db from "db";
const id = "dUrfVOuWOfZmww9dpLeZ";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unSub = db
      .collection("report")
      .doc(id)
      .onSnapshot(function (doc) {
        let allImages = doc.data().images;
        setDocs(allImages);
      });

    return () => unSub();
    // this is a cleanup function that react will run when
    // a component using the hook un mounts
  }, [collection]);

  return { docs };
};

export default useFirestore;
