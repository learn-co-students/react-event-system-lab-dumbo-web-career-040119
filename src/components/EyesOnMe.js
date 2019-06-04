import React from 'react'

class EyesOnMe extends React.Component {
  focusAction = () => {
    console.log("Good!");
  }

  blurAction = () => {
    console.log("Hey! Eyes on me!");
  }

  render() {
    return (
      <div>
        <button onFocus={this.focusAction} onBlur={this.blurAction} />
      </div>
    )
  }
}

export default EyesOnMe
