import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
// import { useHistory } from 'react-router-dom';

import gunPhoto from 'assets/gun.jpeg';
import ducPhoto from 'assets/duc.jpg';
import batteryPhoto from 'assets/battery.jpg';
import Pin from './Pin';

export default function Landing() {
  const classes = useStyles();
  // const history = useHistory();

  return (
    <Paper className={classes.landing}>
      <Typography
        variant="h1"
        component="h1"
        gutterBottom
        align="center"
        className={classes.h1}
      >
        Gun Inventory System
      </Typography>
      <div className={classes.root}>
        {images.map((image) => (
          <ButtonBase
            // onClick={handelGoToAdminPage}
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        ))}
        <Pin />
      </div>
    </Paper>
  );
}

const images = [
  {
    url: gunPhoto,
    title: '< Log Out Equipment',
    width: '25%',
  },
  {
    url: batteryPhoto,
    title: 'Switch Battery',
    width: '25%',
  },
  {
    url: ducPhoto,
    title: 'Return Equipment >',
    width: '25%',
  },
];

const useStyles = makeStyles((theme) => ({
  landing: {
    gridArea: 'landing',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  h1: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 65,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 40,
    },
  },
}));
