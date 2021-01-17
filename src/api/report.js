import db from 'db';
import { removeArrayUnion, projectStorage } from 'db/index';

export const createReport = (_report, handelStep, setMainData) =>
  db
    .collection('report')
    .add(_report)
    .then((snapshot) => {
      handelStep();
      setMainData({ ..._report, id: snapshot.id });
    })
    .catch(function (error) {
      // The document probably doesn't exist.
      console.error('Error updating document: ', error);
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

export const updateReportImage = (_id, _indexImage, _keyValue, _value) => {
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
          })
          .catch(function (error) {
            // The document probably doesn't exist.
            console.error('Error updating document: ', error);
          });
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
      }
    })
    .catch(function (error) {
      console.log('Error getting document:', error);
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
