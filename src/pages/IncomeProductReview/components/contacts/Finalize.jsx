import { Grid, Typography, Button } from '@material-ui/core';

import { Link } from 'react-router-dom';
const Finalize = () => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography
        variant="h5"
        style={{ textAlign: 'center', marginBottom: '2rem' }}
      >
        Will you like to start another Inspection?
      </Typography>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        style={{ marginBottom: '2rem' }}
      >
        <Button variant="contained" component={Link} to="/">
          no
        </Button>
        <Button variant="contained" color="primary">
          yes
        </Button>
      </Grid>
    </Grid>
  );
};

export default Finalize;
