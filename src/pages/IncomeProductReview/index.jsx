import withAuthorization from 'components/Hooks/withAuthorization';
import { Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import OrderList from './OrderList';
const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '1024px',
    margin: 'auto',
    height: 'calc(100vh - 4em)',
    display: 'flex',
    maxHeight: 600,
    marginTop: '1rem',
  },
  list: {
    // width: '30%',
    height: 'calc(100vh - 4em)',
  },
  main: {
    backgroundColor: 'green',
    flexGrow: 1,
  },
}));

const IncomeProductReview = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.container}>
      <div className={classes.list}>
        <OrderList />
      </div>
      <div className={classes.main}></div>
    </Paper>
  );
};

export default withAuthorization(IncomeProductReview);
