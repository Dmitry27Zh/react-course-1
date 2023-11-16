import { useContext } from 'react'
import { Props } from './props'
import CartContext from '../../contexts/cart'

export default function ({ data }: Props) {
  const { total } = useContext(CartContext)

  return (
    <div>
      <h1>Result</h1>
      <h2>Hi, {data.name}!</h2>
      <p>
        Your email is {data.email}, tel is {data.tel}
      </p>
      <p>Total: ${total}</p>
    </div>
  )
}
