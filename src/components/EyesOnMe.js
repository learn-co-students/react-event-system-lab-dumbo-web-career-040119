import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  toggleFocus() {
    console.log('Good!')
  }

  toggleBlur() {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <div>EyesOnMe
      <button
         onFocus={this.toggleFocus}
         onBlur={this.toggleBlur}
       >
       </button>
      </div>
    );
  }

}
