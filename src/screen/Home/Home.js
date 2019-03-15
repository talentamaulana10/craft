import React, { Component } from 'react'
import Nav from '../../component/Navbar/Navbar';
import Jumbotron from '../../component/Jumbotron/Jumbotron';
import Advantages from '../../part/advantages/advantages';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Nav/>
          <Jumbotron judul="can be used alone can be resold" quotes="whe i was kidz i likes play te gae cald the sims if know where you can sreate the avatar and live in the fantas live have a dream jobs dream hhouuse dream car dream familiy drea everyting " />
         
      </div>
    )
  }
}
