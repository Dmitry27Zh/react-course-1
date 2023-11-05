import React from 'react'

export default class extends React.Component {
  state = {
    current: 1,
  }

  increment = () => {
    this.setState({ current: this.state.current + 1 })
  }

  render(): JSX.Element {
    return (
      <div>
        <span>{this.state.current}</span>
        <button type="button" onClick={this.increment}>
          +
        </button>
      </div>
    )
  }
}
