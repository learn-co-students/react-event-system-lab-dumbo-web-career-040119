import React, { Component } from 'react';

export default class Keypad extends Component {

  log = () => {console.log('Entering password...')}

  render() {
    return (
      <input onKeyUp={this.log} type='password'/>
    );
  }

}
