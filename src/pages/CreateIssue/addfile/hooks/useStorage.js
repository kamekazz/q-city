import { useState, useEffect } from 'react';
import { projectStorage, pushArrayUnion } from 'db';
import db from 'db';

const useStorage = (file, _id) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  // const id = "dUrfVOuWOfZmww9dpLeZ";
  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(`issue_report/${file.name}`);
    const documentRef = db.collection('report').doc(_id);

    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        // const createdAt = timestamp();
        let d = new Date();
        let n = d.getMilliseconds();
        await documentRef.update({
          images: pushArrayUnion({
            url: url,
            titleImage: '',
            createdAt: n,
          }),
        });
        setUrl(url);
      }
    );
  }, [file, _id]);

  return { progress, url, error };
};

export default useStorage;
