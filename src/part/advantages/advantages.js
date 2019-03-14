import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from './Card';
import Time from '../../asset/time.svg'
import Drone from '../../asset/drone.svg'
import Happy from '../../asset/happy.svg'
import Diss from '../../asset/discount.svg'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <Grid container spacing={8}>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><Card title="24 hours services" Image={Time}/></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><Card title="easy and fast" Image={Happy} /></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><Card title="shipping throughout Indonesia" Image={Drone}/></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><Card title="discount for resseler" Image={Diss}/></Paper>
        </Grid>
      </Grid>
          </Paper>
        </Grid>
       
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
