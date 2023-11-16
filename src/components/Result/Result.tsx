import { useContext } from 'react'
import { Props } from './props'
import StoreContext from '../../contexts/store'
import useStore from '../../hooks/useStore'

export default function ({ data }: Props) {
  const { cart } = useStore()
  const { total } = cart

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
