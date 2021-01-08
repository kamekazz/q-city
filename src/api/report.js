import db from "db";

export const createReport = (_report, handelStep, setMainData) =>
  db
    .collection("report")
    .add(_report)
    .then((snapshot) => {
      handelStep();
      setMainData({ ..._report, id: snapshot.id });
    })
    .catch(function (error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });

export const updateReportStepTwo = (
  _reportNewData,
  handelStep,
  setMainData,
  _id
) =>
  db
    .collection("report")
    .doc(_id)
    .update(_reportNewData)
    .then(() => {
      handelStep();
      setMainData((state) => ({ ...state, ..._reportNewData }));
    })
    .catch(function (error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
