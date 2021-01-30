import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import ImagesCarousel from './ImagesCarousel';
import { Button } from '@material-ui/core';
import DeleteModal from './DeleteModel';
import { useToasts } from 'react-toast-notifications';
import db from 'db';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import { updateReportFamiliar } from 'api/report';
import moment from 'moment';
const useStyles = makeStyles((theme) => ({
  errorCodeText: {
    color: theme.palette.error.main,
  },
  errorTextContainer: {
    display: 'flex',
  },
  topDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  topDivR: {
    display: 'flex',
    flexDirection: 'column',
  },
  contacted: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
    },
  },
  states: {},
  noteContainer: {
    marginRight: '2rem',
    marginLeft: '2rem',
    maxWidth: 400,
    minWidth: 325,
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
  bottomContainer: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));
const ReviewReport = (props) => {
  const classes = useStyles();
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
      <div className={classes.topDiv}>
        <div className={classes.errorTextContainer}>
          <Typography
            variant="h5"
            color="primary"
            style={{ marginRight: '6px' }}
          >
            Issue Code:
          </Typography>
          <Typography
            className={classes.errorCodeText}
            variant="h5"
            color="secondary"
          >
            {reportData.issue_code}
          </Typography>
        </div>
        <div className={classes.topDivR}>
          <ValueContainerH7
            _keyValue="Date:"
            _value={moment(reportData.createdAt.toDate().toString()).calendar()}
          />

          <ValueContainerH7
            _keyValue="Create By:"
            _value={reportData.createdBy}
          />
        </div>
      </div>
      <div className={classes.contacted}>
        <div className={classes.states}>
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
          <ValueContainer _keyValue="Status:" _value={reportData.status} />
          <ValueContainer _keyValue="Location:" _value={reportData.location} />
          <ValueContainer _keyValue="Lot:" _value={reportData.lot} />
          <ValueContainer
            _keyValue="Sample Size:"
            _value={reportData.sample_size}
          />
          <ValueContainer _keyValue="Pass:" _value={reportData.pass} />
          <ValueContainer _keyValue="Fail:" _value={reportData.failed} />
        </div>
        <div className={classes.noteContainer}>
          <Typography variant="h6" color="primary">
            Note:
          </Typography>
          <Typography paragraph>{reportData.note}</Typography>
        </div>
        {reportData.images.length && (
          <ImagesCarousel images={reportData.images} />
        )}
      </div>

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

      <div className={classes.bottomContainer}>
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
      </div>
    </form>
  );
};
export default ReviewReport;

const ValueContainer = ({ _keyValue, _value }) => {
  return (
    <ValueContainerEl>
      <Typography variant="h6" color="primary" gutterBottom>
        {_keyValue}
      </Typography>
      <Typography variant="h6" gutterBottom>
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
      <Typography variant="body2" color="primary" gutterBottom>
        {_keyValue}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {_value}
      </Typography>
    </ValueContainerEl>
  );
};
