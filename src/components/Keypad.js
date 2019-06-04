import React, { Component } from 'react';

export default class Keypad extends Component {

  toggleKeyUp() {
    console.log('Entering password...')
  }


  render() {
    return (
      <div> Keypad
      <input
      type="password"
      onKeyUp={this.toggleKeyUp}/>
      </div>
    );
  }

}
