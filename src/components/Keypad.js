import React, { Component } from 'react';

export default class Keypad extends Component {

  handleKeyUp = (e) => {
    console.log("Entering password...")
  }

  render() {
    return (
      <div className="cell">
        <input type="password" onKeyUp={this.handleKeyUp} />
      </div>
    )
  }
}
