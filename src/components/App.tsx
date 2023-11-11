import { useState } from 'react'
import UserCard from './UserCard'
import Cart from './Cart'
import Order from './Order'
import Result from './Result'
import SettingsContext from '../contexts/settings'
import Products from './Products/Products'

export default function (): JSX.Element {
  const [page, setPage] = useState('cart')
  const moveToCart = () => setPage('cart')
  const moveToOrder = () => setPage('order')
  const moveToResult = () => setPage('result')
  const [settings, setSettings] = useState({ lang: 'ru', theme: 'light' })

  return (
    <SettingsContext.Provider value={settings}>
      <div className="container mt-5">
        {page === 'cart' && <Cart onNext={moveToOrder} />}
        {page === 'order' && <Order onNext={moveToResult} onPrev={moveToCart} />}
        {page === 'result' && <Result />}
        <UserCard name="user" text="hello" />
        <Products />
      </div>
    </SettingsContext.Provider>
  )
}
