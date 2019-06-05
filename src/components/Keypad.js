// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component{

  handleKeyPress = () => {
    console.log('Entering password...')
  }

  render(){
    return(
      <div>
        <form>
          <input
            onKeyUp={this.handleKeyPress}
            type="password"
            name="keypress"/>
        </form>
      </div>
    )
  }
}

export default Keypad
