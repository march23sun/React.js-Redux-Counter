import React, { Component, PropTypes } from 'react'

class SubCounter extends Component {
  static propTypes = {
    MyState: PropTypes.object.isRequired,
    onRestart: PropTypes.func.isRequired,
  }

  incrementIfOdd = () => {

      this.props.onRestart();

  }


  render() {
    const { MyState, onIncrement, onDecrement } = this.props
    return (


      <p>
        Sub Counter
        clicked:
        {MyState.num}
        {' '}

        {' '}

        {' '}
        <button onClick={this.incrementIfOdd}>
          Set0
        </button>
        {' '}

      </p>
    )
  }
}

export default SubCounter
