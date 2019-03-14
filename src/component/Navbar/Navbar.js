import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '../ButtonBar/Button'
import './Navbar.css'

export default class Nav extends Component{
render(){
  return (
    <div className="appbar">
      <AppBar position="static" color="default">
        <Toolbar className="toolbar">
         <Button nama="Home"/>
         <Button nama="Bussines" />
         <Button nama="Contact"/>
         <Button nama="About"/>
         <button className="mybu">Booking</button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
}
