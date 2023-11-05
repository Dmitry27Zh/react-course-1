import React from 'react'
import ReactDom from 'react-dom'
import UserCard from './components/UserCard'

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
