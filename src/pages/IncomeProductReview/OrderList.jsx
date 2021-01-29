import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  item: {
    fontWeight: 700,
    fontSize: '1rem',
    opacity: '0.7',
    '&:hover': {
      opacity: 1,
      color: theme.palette.secondary.dark,
    },
  },
}));
const OrderList = () => {
  const classes = useStyles();
  return (
    <List disablePadding>
      <ListItem
        divider
        button
        className={classes.item}
        // selected={value === i}
      >
        <ListItemText disableTypography>manuel taveras</ListItemText>
      </ListItem>
    </List>
  );
};

export default OrderList;
