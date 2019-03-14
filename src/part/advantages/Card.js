import React, { Component } from 'react'
import './Card.css'

export default class Card extends Component {
  render() {
    return (
      <div className='container'>
        <div className="wadah" ><img className='image' src={this.props.Image}/></div>
        <div><h1  className='title'>{this.props.title}</h1></div>
      </div>
    )
  }
}
