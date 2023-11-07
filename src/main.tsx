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
    <h3>Class max=3</h3>
    <hr />
    <h3>Function min=0 max=2</h3>
    <Counter min={0} max={2} />
  </div>,
  document.querySelector('.app') as HTMLElement
)

React.createElement(UserCard, { name: 'Dmitry', text: 'Hi there!' })
