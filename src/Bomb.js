// your Bomb code here!
// your ImageSlider code here!
import React from 'react'

class Bomb extends React.Component {
   constructor(props) {
      super()
      this.state = {
         secondsLeft: props.initialCount
      }
   }

   render() {
      const message = this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`
      return (<p>{message}</p>)
   }
}

export default Bomb
