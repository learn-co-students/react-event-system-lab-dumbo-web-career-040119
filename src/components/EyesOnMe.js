// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends Component {


  onBlur = () => console.log('Hey! Eyes on me!')
  onFocus = () => console.log('Good!')


  render() {
    return (
      <div>

      <button onFocus={this.onFocus} onBlur={this.onBlur}></button>

      </div>
    );
  }

}

export default EyesOnMe;
