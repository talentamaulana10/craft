import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Logo from '../../asset/delivery.svg'
import './Jumbotron.css'
import Button from '@material-ui/core/Button'


const styles = theme => ({
  root: {
    flexGrow: 1,
    
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:490,
    justifyContent:"center"
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={0} style={{justifyContent:"center"}}>
        <Grid item xs={12} sm={6} >
          <div className={classes.paper}>
          <div style={{textAlign:'center'}}>
          <h1 className="judul">{props.judul}</h1><span  className="susah">{props.subjudul}</span>
          <h1 className="subjudul">{props.quotes}</h1>
          </div>
          <div style={{marginTop:100,}}>
            <button className="tombola">Pesan Sekarang</button>
          <button className="tombolb">Cari Tau Lagi?</button>
          </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} >
          <div className={classes.paper}>
          <img className="logo" src={Logo}/>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);