import React from 'react'
import ReactDom from 'react-dom'
import UserCard from './components/UserCard'
import Counter from './components/Counter'
import CounterFn from './components/CounterFn'

ReactDom.render(
  <div className="some">
    <h2>Hello, World!</h2>
    <hr />
    <UserCard name="Dmitry" text="Hi there!" />
    <hr />
    <div>Text</div>
    <h3>Class max=3</h3>
    <Counter max={3} />
    <hr />
    <h3>Class max=5</h3>
    <Counter max={5} />
    <hr />
    <h3>Function min=0 max=2</h3>
    <CounterFn min={0} max={2} />
  </div>,
  document.querySelector('.app') as HTMLElement
)

React.createElement(UserCard, { name: 'Dmitry', text: 'Hi there!' })
