import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  focus = (event) => {
    console.log("Good!");
  }

  blur = (e) => {
    console.log("Hey! Eyes on me!")
  }

  render() {
    return (
      <div>
        <button onFocus={this.focus} onBlur={this.blur}></button>
      </div>
    )
  }
}
