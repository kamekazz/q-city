import db from 'db';
import { removeArrayUnion } from 'db/index';
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

export const deleteReport = (_id, history, handleClose) => {
  db.collection('report')
    .doc(_id)
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
};

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

export const deleteReportImage = (_id, _value) => {
  let reportRef = db.collection('report').doc(_id);
  reportRef.update({
    images: removeArrayUnion(_value),
  });
};
