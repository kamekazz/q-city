import { useState, useEffect } from 'react';
import  db from '../../../../db';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unSub = db.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
          documents.push({...doc.data(), id: doc.id});
        });
        setDocs(documents);
      });

    return () => unSub();
    // this is a cleanup function that react will run when
    // a component using the hook un mounts
  }, [collection]);

  return { docs };
}

export default useFirestore;