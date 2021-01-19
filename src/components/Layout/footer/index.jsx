import { makeStyles } from '@material-ui/core';
import footerAdornment from 'assets/Footer Adornment.svg';
const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <img
        className={classes.adornment}
        alt="black decorative slash"
        src={footerAdornment}
      />
    </footer>
  );
};

export default Footer;

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    zIndex: 1302,
    position: 'relative',
  },
  adornment: {
    height: '4em',
    verticalAlign: 'bottom',
    alignContent: 'right',
  },
}));
