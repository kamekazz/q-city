import React, { useEffect, useState } from 'react';
import useFirestore from '../hooks/useFirestore';
// import { motion } from 'framer-motion';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import SaveIcon from '@material-ui/icons/Save';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';
import { deleteReportImage, updateReportImage } from 'api/report';

const ImageGrid = ({ setSelectedImg, _id }) => {
  const { images } = useFirestore(_id);

  return (
    <div className="img-grid">
      {images &&
        images.map((element, index) => (
          <div key={element.createdAt}>
            <ImgMediaCard
              _url={element.url}
              setSelectedImg={setSelectedImg}
              _titleImage={element.titleImage}
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

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
});

function ImgMediaCard(props) {
  const classes = useStyles();
  const {
    _url,
    _titleImage,
    setSelectedImg,
    _id,
    _indexImage,
    _createdAt,
  } = props;
  const [title, setTitle] = useState('dfd');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const onsubmitSave = () => {
    updateReportImage(_id, _indexImage, 'titleImage', title);
  };

  const handleDelete = () => {
    deleteReportImage(
      _id,
      {
        url: _url,
        titleImage: _titleImage,
        createdAt: _createdAt,
      },
      _url
    );
  };

  useEffect(() => {
    setTitle(_titleImage);
  }, [setTitle, _titleImage]);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={_url}
          title={_titleImage}
          onClick={() => setSelectedImg(_url)}
        />
        <CardContent>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            value={title}
          />
        </CardContent>
      </CardActionArea>
      <RowEl>
        <Button size="small" color="secondary" onClick={handleDelete}>
          delete
        </Button>
        <Button
          color="primary"
          size="small"
          className={classes.button}
          startIcon={<SaveIcon />}
          onClick={onsubmitSave}
        >
          Save
        </Button>
      </RowEl>
    </Card>
  );
}

const RowEl = styled(CardActions)`
  display: flex;
  justify-content: space-between;
`;
