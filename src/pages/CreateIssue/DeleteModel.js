import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import { deleteReport } from 'api/report';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  deleteButton: {
    backgroundColor: theme.palette.error.main,
    color: 'white',
  },
}));

export default function DeleteModal(props) {
  const { addToast } = useToasts();

  const { _id } = props;
  let history = useHistory();
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    deleteReport(_id, function (res) {
      console.log('res', res);
      if (res.success) {
        addToast(res.message, { appearance: 'success', autoDismiss: true });
        handleClose();
        history.push('/');
      } else {
        addToast(res.errorMessage, { appearance: 'error', autoDismiss: true });
      }
    });
  };

  const handleSave = () => {
    handleClose();
    history.push('/home');
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">would you like to continue?</h2>
      <p id="simple-modal-description">
        if you decide to save you can come back and finish a report at any time
      </p>
      <Button
        variant="contained"
        className={classes.deleteButton}
        style={{ marginRight: 6 }}
        onClick={handleDelete}
      >
        delete
      </Button>
      <Button
        variant="contained"
        style={{ marginRight: 6 }}
        onClick={handleClose}
      >
        resume
      </Button>
      <Button
        variant="contained"
        style={{ marginRight: 6 }}
        onClick={handleSave}
        color="primary"
      >
        save
      </Button>
    </div>
  );

  return (
    <div>
      <Button
        variant="contained"
        style={{ marginRight: 6 }}
        onClick={handleOpen}
      >
        cancel
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
