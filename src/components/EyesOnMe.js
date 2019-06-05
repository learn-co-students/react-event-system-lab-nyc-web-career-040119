// Code EyesOnMe Component Here
import React, { Component } from 'react'

class EyesOnMe extends React.Component {
  foc = () => {
    console.log('Good!')
  }

  blu = () => {
    console.log('Hey! Eyes on me!')
  }

  render(){
    return(
    <div>
      <button onFocus={this.foc} onBlur={this.blu}></button>
    </div>
  );
  }
}

export default EyesOnMe
