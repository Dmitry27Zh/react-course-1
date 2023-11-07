import React from 'react'

type Props = {
  max: number
}

export default class extends React.Component<Props> {
  state = {
    current: 1,
  }

  increment = () => {
    if (this.state.current < this.props.max) {
      this.setState({ current: this.state.current + 1 })
    }
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
