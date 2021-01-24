import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
import { useToasts } from 'react-toast-notifications';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import SaveIcon from '@material-ui/icons/Save';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';
import {
  deleteReportImage,
  updateReportImage,
  useGetImagesForDoc,
} from 'api/report';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const ImageGrid = ({ setSelectedImg, _id }) => {
  const classes = useStyles();

  const { images } = useGetImagesForDoc(_id);

  return (
    <div className={classes.imageGrid}>
      {images &&
        images.map((element, index) => (
          <div key={element.createdAt} className={classes.image}>
            <ImgMediaCard
              _url={element.url}
              setSelectedImg={setSelectedImg}
              imageNote={element.imageNote}
              _id={_id}
              _indexImage={index}
              _createdAt={element.createdAt}
            />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 325,
  },
  deleteButton: {
    color: theme.palette.error.main,
  },
  imageGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  image: {
    margin: '1rem',
    [theme.breakpoints.down('sm')]: {
      margin: '3px',
    },
  },
}));

function ImgMediaCard(props) {
  const { addToast } = useToasts();

  const classes = useStyles();
  const {
    _url,
    imageNote,
    setSelectedImg,
    _id,
    _indexImage,
    _createdAt,
  } = props;
  const [expanded, setExpanded] = React.useState(false);
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const onsubmitSave = (e) => {
    e.preventDefault();
    updateReportImage(_id, _indexImage, 'imageNote', title, function (res) {
      if (res.success) {
        setExpanded(false);
        addToast(res.message, { appearance: 'success', autoDismiss: true });
      } else {
        addToast(res.errorMessage, { appearance: 'error', autoDismiss: true });
        console.log('error');
      }
    });
  };

  const handleDelete = () => {
    deleteReportImage(
      _id,
      {
        url: _url,
        imageNote: imageNote,
        createdAt: _createdAt,
      },
      _url
    );
  };

  useEffect(() => {
    setTitle(imageNote);
  }, [setTitle, imageNote]);

  const handleChangeAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={_url}
          title={imageNote}
          onClick={() => setSelectedImg(_url)}
        />
        <CardContent>
          <Accordion expanded={expanded} onChange={handleChangeAccordion(true)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography variant="subtitle1" gutterBottom>
                {imageNote ? imageNote : 'edit notes'}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <form onSubmit={onsubmitSave}>
                <TextField
                  label="Notes"
                  variant="outlined"
                  // fullWidth
                  onChange={handleChange}
                />
              </form>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </CardActionArea>
      <RowEl>
        <Button
          size="small"
          className={classes.deleteButton}
          onClick={handleDelete}
        >
          delete
        </Button>
        {expanded ? (
          <Button
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={onsubmitSave}
          >
            Save
          </Button>
        ) : null}
      </RowEl>
    </Card>
  );
}

const RowEl = styled(CardActions)`
  display: flex;
  justify-content: space-between;
`;
