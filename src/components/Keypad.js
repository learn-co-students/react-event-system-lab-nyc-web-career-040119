import React from "react"

class Keypad extends React.Component {
  pressKey(event) {
    console.log('Entering password...')
  }
  render() {
    return (
      <form>
        <input
          type="password"
          placeholder="Enter password"
          onKeyUp={this.pressKey}
        />
      </form>
    )
  }
}

export default Keypad
