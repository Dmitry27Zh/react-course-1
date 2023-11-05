import React from 'react'
import ReactDom from 'react-dom'
import UserCard from './components/UserCard'
import Counter from './components/Counter'

ReactDom.render(
  <div className="some">
    <h2>Hello, World!</h2>
    <hr />
    <UserCard name="Dmitry" text="Hi there!" />
    <hr />
    <div>Text</div>
    <Counter />
  </div>,
  document.querySelector('.app') as HTMLElement
)

React.createElement(UserCard, { name: 'Dmitry', text: 'Hi there!' })
