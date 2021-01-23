import db, { removeArrayUnion, projectStorage, pushArrayUnion } from 'db';
import { useState, useEffect } from 'react';

export const createReport = (_report, callback) =>
  db
    .collection('report')
    .add(_report)
    .then((snapshot) => {
      callback({
        success: true,
        data: { id: snapshot.id },
        message:
          'All your actions will be saved; you can leave and come back at any time.',
        errorMessage: '',
      });
    })
    .catch(function (error) {
      // The document probably doesn't exist.

      console.log('error data:', error);
      callback({
        success: false,
        data: '',
        message: '',
        errorMessage: error.message,
      });
    });

export const updateReportStepTwo = (
  _reportNewData,
  handelStep,
  setMainData,
  _id
) =>
  db
    .collection('report')
    .doc(_id)
    .update(_reportNewData)
    .then(() => {
      handelStep();
      setMainData((state) => ({ ...state, ..._reportNewData }));
    })
    .catch(function (error) {
      // The document probably doesn't exist.
      console.error('Error updating document: ', error);
    });

export const updateReportImage = (
  _id,
  _indexImage,
  _keyValue,
  _value,
  callback
) => {
  let reportRef = db.collection('report').doc(_id);
  reportRef
    .get()
    .then(function (doc) {
      if (doc.exists) {
        let images = doc.data().images;
        images[_indexImage][_keyValue] = _value;
        reportRef
          .update({ images })
          .then(function () {
            console.log('Document successfully updated!');
            callback(true);
          })
          .catch(function (error) {
            // The document probably doesn't exist.
            console.error('Error updating document: ', error);
            callback(false);
          });
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
        callback(false);
      }
    })
    .catch(function (error) {
      console.log('Error getting document:', error);
      callback(false);
    });
};

export const deleteReportImage = (_id, _value, _url) => {
  let reportRef = db.collection('report').doc(_id);
  reportRef
    .update({
      images: removeArrayUnion(_value),
    })
    .then(() => {
      console.log('Document successfully deleteReportImage!,');
      deleteImage(_url);
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
};

const deleteImage = (_url) => {
  let imageRef = projectStorage.refFromURL(_url);
  imageRef
    .delete()
    .then(function () {
      // File deleted successfully
      console.log('File is delete form store,');
    })
    .catch(function (error) {
      // Uh-oh, an error occurred!
      console.log('error', error);
    });
};

const deleteMultipleImage = (_array) => {
  for (let i = 0; i < _array.length; i++) {
    const element = _array[i];
    deleteImage(element.url);
  }
};
export const deleteReport = (_id, history, handleClose) => {
  let reportRf = db.collection('report').doc(_id);
  reportRf
    .get()
    .then((doc) => {
      let arrayForImages = doc.data().images;
      deleteMultipleImage(arrayForImages);
      reportRf
        .delete()
        .then(function () {
          console.log('Document successfully deleted!');
          history.push('/home');
          handleClose();
        })
        .catch(function (error) {
          console.error('Error removing document: ', error);
          handleClose();
        });
    })
    .catch(function (error) {
      console.error('Error removing document: ', error);
      handleClose();
    });
};

export const updateReportFamiliar = (_id, _improvementR, callback) => {
  let reportRef = db.collection('report').doc(_id);
  reportRef
    .get()
    .then(function (doc) {
      if (doc.exists) {
        reportRef
          .update({ ..._improvementR, status: 'pending' })
          .then(function () {
            console.log('Document successfully updated!');
            callback(true);
          })
          .catch(function (error) {
            // The document probably doesn't exist.
            console.error('Error updating document: ', error);
            callback(false);
          });
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
        callback(false);
      }
    })
    .catch(function (error) {
      console.log('Error getting document:', error);
      callback(false);
    });
};

export const useGetImagesForDoc = (_id) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const unSub = db
      .collection('report')
      .doc(_id)
      .onSnapshot(function (doc) {
        if (doc.exists) {
          let allImages = doc.data().images;
          setImages(allImages);
        } else {
          console.log('No such document');
          setImages([]);
        }
      });

    return () => unSub();
    // this is a cleanup function that react will run when
    // a component using the hook un mounts
  }, [_id]);

  return { images };
};

const useStorageReport = (file, _id) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(
      `issue_report/${_id}/${_id + file.name}`
    );
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
            imageNote: '',
            createdAt: n,
          }),
        });
        setUrl(url);
      }
    );
  }, [file, _id]);

  return { progress, url, error };
};

export default useStorageReport;
