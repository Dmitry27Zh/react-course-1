import React from 'react'
import ReactDom from 'react-dom'

function UserCard(props: { name: string; text: string }) {
  return (
    <>
      <div className="card">
        <h3>{props.name}</h3>
        <hr />
        <div>{props.text}</div>
      </div>
      <hr />
    </>
  )
}

ReactDom.render(
  <div className="some">
    <h2>Hello, World!</h2>
    <hr />
    <UserCard name="Dmitry" text="Hi there!" />
    <hr />
    <div>Text</div>
  </div>,
  document.querySelector('.app') as HTMLElement
)

React.createElement(UserCard, { name: 'Dmitry', text: 'Hi there!' })
