import React from 'react';
// import useFirestore from '../hooks/useFirestore';
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

const ImageGrid = ({ setSelectedImg, _id }) => {
  // const { images } = useFirestore(_id);
  const images = [
    {
      createdAt: 465463453342,
      titleImage: 'main images',
      url:
        'https://firebasestorage.googleapis.com/v0/b/w-city-53c78.appspot.com/o/issue_report%2Fnewdonod.png?alt=media&token=dd4e1e6a-39a5-40fb-93ed-cffd961908c6',
    },
    {
      createdAt: 465463452343342,
      titleImage: 'main images',
      url:
        'https://firebasestorage.googleapis.com/v0/b/w-city-53c78.appspot.com/o/issue_report%2Fnewdonod.png?alt=media&token=dd4e1e6a-39a5-40fb-93ed-cffd961908c6',
    },
    {
      createdAt: 4654643532453342,
      titleImage: 'main images',
      url:
        'https://firebasestorage.googleapis.com/v0/b/w-city-53c78.appspot.com/o/issue_report%2Fnewdonod.png?alt=media&token=dd4e1e6a-39a5-40fb-93ed-cffd961908c6',
    },
    {
      createdAt: 4654633452345342,
      titleImage: 'main images',
      url:
        'https://firebasestorage.googleapis.com/v0/b/w-city-53c78.appspot.com/o/issue_report%2Fnewdonod.png?alt=media&token=dd4e1e6a-39a5-40fb-93ed-cffd961908c6',
    },
    {
      createdAt: 4654633453254342,
      titleImage: 'main images',
      url:
        'https://firebasestorage.googleapis.com/v0/b/w-city-53c78.appspot.com/o/issue_report%2Fnewdonod.png?alt=media&token=dd4e1e6a-39a5-40fb-93ed-cffd961908c6',
    },
    {
      createdAt: 46546435323342,
      titleImage: 'main images',
      url:
        'https://firebasestorage.googleapis.com/v0/b/w-city-53c78.appspot.com/o/issue_report%2Fnewdonod.png?alt=media&token=dd4e1e6a-39a5-40fb-93ed-cffd961908c6',
    },
  ];

  return (
    <div className="img-grid">
      {images &&
        images.map((element) => (
          <div key={element.createdAt}>
            <ImgMediaCard
              _url={element.url}
              setSelectedImg={setSelectedImg}
              _titleImage={element.titleImage}
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
  const { _url, _titleImage, setSelectedImg } = props;

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
          <TextField label="Title" variant="outlined" fullWidth />
        </CardContent>
      </CardActionArea>
      <RowEl>
        <Button size="small" color="secondary">
          delete
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          startIcon={<SaveIcon />}
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
