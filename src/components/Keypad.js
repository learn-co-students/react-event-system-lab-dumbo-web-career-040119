import React from 'react'

class Keypad extends React.Component {
  keyAction =() => {
    console.log('Entering password...')
  }

  render() {
    return (
      <div>
        <input onKeyUp={this.keyAction} type="password" />
      </div>
    )
  }
}

export default Keypad
