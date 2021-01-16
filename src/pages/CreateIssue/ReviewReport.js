import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import ImagesCarousel from './ImagesCarousel';
import { Button } from '@material-ui/core';
import DeleteModal from './DeleteModel';

const report_data = {
  ibm: '123456',
  issue_code: 'msg01',
  issue: 'Bar-code is not linked to the product IBM’s number (MS size).',
  lot: 412,
  pass: 234,
  vender: 2344,
  container: 'DFRE4343f045',
  createdAt: 'January 13, 2021 ay 6:27:37 PM UTC-5',
  createdBy: 'Manuel Taveras',
  createdByUid: 't34258asfy9845398afs8543',
  status: 'draft',
  location: 'Zone A',
  po: 'B1234',
  images: [
    {
      createdAt: 1235,
      titleImage: 'lafsfsbel',
      url:
        'https://firebasestorage.googleapis.com/v0/b/w-city-53c78.appspot.com/o/issue_report%2F1a7ab7f8-1370-482d-8e0a-2bcd13548591.jpg?alt=media&token=ea589281-9f1b-4450-8653-45c5afd5083b',
    },
    {
      createdAt: 1234,
      titleImage: 'lsfsabel',
      url:
        'https://firebasestorage.googleapis.com/v0/b/w-city-53c78.appspot.com/o/issue_report%2F1a7ab7f8-1370-482d-8e0a-2bcd13548591.jpg?alt=media&token=ea589281-9f1b-4450-8653-45c5afd5083b',
    },
    {
      createdAt: 1233,
      titleImage: 'lafsbel',
      url:
        'https://firebasestorage.googleapis.com/v0/b/w-city-53c78.appspot.com/o/issue_report%2F1a7ab7f8-1370-482d-8e0a-2bcd13548591.jpg?alt=media&token=ea589281-9f1b-4450-8653-45c5afd5083b',
    },
  ],
  note:
    'Sign up at http://RobinhoodPhil.com AND get a free stock referral from Robinhood. No money needed. Certain limitations apply. ***We are an affiliate partner & receive compensation when you sign up. ',
  improvementR: '',
  improvementS: '',
  improvementImages: [
    {
      createdAt: 1235,
      titleImage: 'label',
      url:
        'https://firebasestorage.googleapis.com/v0/b/w-city-53c78.appspot.com/o/issue_report%2Fjojo.jpg?alt=media&token=4094f101-00f9-4b67-bf1b-fe453ce4c831',
    },
    {
      createdAt: 1234,
      titleImage: 'label',
      url:
        'https://firebasestorage.googleapis.com/v0/b/w-city-53c78.appspot.com/o/issue_report%2Fjojo.jpg?alt=media&token=4094f101-00f9-4b67-bf1b-fe453ce4c831',
    },
    {
      createdAt: 1233,
      titleImage: 'label',
      url:
        'https://firebasestorage.googleapis.com/v0/b/w-city-53c78.appspot.com/o/issue_report%2Fjojo.jpg?alt=media&token=4094f101-00f9-4b67-bf1b-fe453ce4c831',
    },
  ],
  sample_size: 646,
  failed: 4352,
};

const ReviewReport = (props) => {
  const { mainData } = props;
  const [reportData, setReportData] = useState({});
  const getReportData = () => {
    setReportData(report_data);
  };

  useEffect(() => {
    getReportData();
  }, []);

  return (
    <div>
      <TopContainer>
        <TopL>
          <Typography variant="h5" color="secondary">
            {reportData.issue}
          </Typography>
        </TopL>
        <TopR>
          <ValueContainerH7 _keyValue="Date:" _value={reportData.createdAt} />
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
          <ValueContainer _keyValue="Lot:" _value={reportData.lot} />{' '}
          <ValueContainer _keyValue="SS:" _value={reportData.sample_size} />
          <ValueContainer _keyValue="Pass:" _value={reportData.pass} />
          <ValueContainer _keyValue="Fail:" _value={reportData.failed} />
        </ReportInfoDividerL>
        <ReportInfoDividerR>
          {reportData.images && <ImagesCarousel images={reportData.images} />}
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
          // defaultValue="Default Value"
          variant="outlined"
          fullWidth
        />
      </ImprovementInfoContainer>

      <BottomContainerEL>
        <DeleteModal _id={mainData.id} />
        <Button variant="contained" color="primary" onClick={props.handelStep}>
          Next
        </Button>
      </BottomContainerEL>
    </div>
  );
};
export default ReviewReport;
const TopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
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
`;
const ReportInfoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
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
  width: 450px;
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
      <Typography variant="h6" color="secondary">
        {_keyValue}
      </Typography>
      <Typography variant="h6" color="primary">
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
      <Typography variant="body2" color="secondary">
        {_keyValue}
      </Typography>
      <Typography variant="body2" color="primary">
        {_value}
      </Typography>
    </ValueContainerEl>
  );
};

const ValueContainerH7El = styled.div`
  display: flex;
`;
