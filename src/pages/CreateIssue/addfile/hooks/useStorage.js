import { useState, useEffect } from "react";
import { projectStorage, timestamp, pushArrayUnion } from "db";
import db from "db";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const id = "dUrfVOuWOfZmww9dpLeZ";
  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(`issue_report/${file.name}`);
    const documentRef = db.collection("report").doc(id);

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        await documentRef.update({
          images: pushArrayUnion({
            url: url,
            titleImage: "",
          }),
        });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
