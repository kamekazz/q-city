import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import ImagesCarousel from './ImagesCarousel';
import { Button } from '@material-ui/core';
import DeleteModal from './DeleteModel';
import { useToasts } from 'react-toast-notifications';
import db from 'db';

import { useForm } from 'react-hook-form';
import { updateReportFamiliar } from 'api/report';

const ReviewReport = (props) => {
  const { addToast } = useToasts();
  const { mainData } = props;
  const [disableButton, setDisableButton] = useState(false);
  const { register, handleSubmit } = useForm({
    mode: 'onBlur',
  });

  let [reportData, setData] = useState(null);
  useEffect(() => {
    db.collection('report')
      .doc(mainData.id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setData(doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });
    // this is a cleanup function that react will run when
    // a component using the hook un mounts
  }, [setData, mainData]);

  const onSubmit = (data) => {
    setDisableButton(true);
    updateReportFamiliar(mainData.id, data, function (res) {
      if (res) {
        props.handelStep();
        setDisableButton(false);
        addToast(
          'your report has been posted and will be waiting for review by the location admin.',
          {
            appearance: 'success',
            autoDismiss: true,
          }
        );
      } else {
        setDisableButton(false);
      }
    });
    console.log('data', data);
  };
  if (!reportData) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TopContainer>
        <TopL>
          <Typography variant="h5" color="secondary">
            {reportData.issue_code}
          </Typography>
        </TopL>
        <TopR>
          <ValueContainerH7
            _keyValue="Date:"
            _value={reportData.createdAt.toDate().toString()}
          />

          <ValueContainerH7
            _keyValue="Create By:"
            _value={reportData.createdBy}
          />
        </TopR>
      </TopContainer>

      <ReportInfoContainer>
        <ReportInfoDividerL>
          <ValueContainer _keyValue="IBM:" _value={reportData.ibm} />
          <ValueContainer _keyValue="PO:" _value={reportData.po} />
          <ValueContainer _keyValue="Vender:" _value={reportData.vender} />
          <ValueContainer
            _keyValue="Container:"
            _value={reportData.container}
          />
          <ValueContainer
            _keyValue="Issue Code:"
            _value={reportData.issue_code}
          />
        </ReportInfoDividerL>
        <ReportInfoDividerL>
          <ValueContainer _keyValue="Status:" _value={reportData.status} />
          <ValueContainer _keyValue="Location:" _value={reportData.location} />
          <ValueContainer _keyValue="Lot:" _value={reportData.lot} />
          <ValueContainer _keyValue="SS:" _value={reportData.sample_size} />
          <ValueContainer _keyValue="Pass:" _value={reportData.pass} />
          <ValueContainer _keyValue="Fail:" _value={reportData.failed} />
        </ReportInfoDividerL>
        <ReportInfoDividerR>
          {reportData.images.length && (
            <ImagesCarousel images={reportData.images} />
          )}
        </ReportInfoDividerR>
      </ReportInfoContainer>

      <NoteContainer>
        <Typography variant="h6" color="secondary">
          Note:
        </Typography>
        <Typography variant="subtitle2" color="primary">
          {reportData.note}
        </Typography>
      </NoteContainer>
      <Divider
        variant="middle"
        color="secondary"
        style={{ margin: '10px 0' }}
      />
      <ImprovementInfoContainer>
        <TextField
          id="outlined-multiline-static"
          label="Improvement Request"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          name="improvement_r"
          inputRef={register}
        />
      </ImprovementInfoContainer>

      <BottomContainerEL>
        <DeleteModal _id={mainData.id} />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={disableButton}
          //  onClick={props.handelStep}
          style={{ marginBottom: '2rem' }}
        >
          Next
        </Button>
      </BottomContainerEL>
    </form>
  );
};
export default ReviewReport;
const TopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const TopL = styled.div`
  display: flex;
  width: 50%;
`;
const TopR = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: 600px) {
    align-items: flex-start;
  }
`;
const ReportInfoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const ReportInfoDividerL = styled.div`
  display: flex;
  flex-direction: column;
`;
const ReportInfoDividerR = styled.div`
  /* width: 400px; */
  padding: 6px;
`;

const NoteContainer = styled.div`
  width: 100%;
`;

const ImprovementInfoContainer = styled.div`
  width: 100%;

  padding: 6px;
`;

const BottomContainerEL = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ValueContainer = ({ _keyValue, _value }) => {
  return (
    <ValueContainerEl>
      <Typography variant="h6" color="secondary" gutterBottom>
        {_keyValue}
      </Typography>
      <Typography variant="h6" color="primary" gutterBottom>
        {_value}
      </Typography>
    </ValueContainerEl>
  );
};

const ValueContainerEl = styled.div`
  display: flex;
`;

const ValueContainerH7 = ({ _keyValue, _value }) => {
  return (
    <ValueContainerEl>
      <Typography variant="body2" color="secondary" gutterBottom>
        {_keyValue}
      </Typography>
      <Typography variant="body2" color="primary" gutterBottom>
        {_value}
      </Typography>
    </ValueContainerEl>
  );
};
