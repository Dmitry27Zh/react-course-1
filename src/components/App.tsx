import { useState } from 'react'
import UserCard from './UserCard'
import Cart from './Cart'
import Order from './Order'
import Result from './Result'

export default function (): JSX.Element {
  const [page, setPage] = useState('cart')
  const moveToCart = () => setPage('cart')
  const moveToOrder = () => setPage('order')
  const moveToResult = () => setPage('result')

  return (
    <div className="container mt-5">
      {page === 'cart' && <Cart onNext={moveToOrder} />}
      {page === 'order' && <Order onNext={moveToResult} onPrev={moveToCart} />}
      {page === 'result' && <Result />}
      <UserCard name="user" text="hello" />
    </div>
  )
}
