import UserCard from './UserCard'
import Counter from './Counter'
import { useState } from 'react'

export default function (): JSX.Element {
  const [maxItems, setMaxItems] = useState(2)
  const handleSetMaxItemsClick = () => setMaxItems(5)

  return (
    <div className="some">
      <h2>Hello, World!</h2>
      <hr />
      <UserCard name="Dmitry" text="Hi there!" />
      <hr />
      <div>Text</div>
      <h3>Class max=3</h3>
      <hr />
      <h3>Function min=1 max=2</h3>
      <Counter max={maxItems} key={`1: ${maxItems}`} />
      <button type="button" onClick={handleSetMaxItemsClick}>
        Set max items 5
      </button>
    </div>
  )
}
