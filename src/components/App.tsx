import { useState } from 'react'
import Cart from './Cart'
import Order from './Order'
import Result from './Result'
import SettingsContext from '../contexts/settings'
import { defaultInputData } from './Order/inputs'
import { InputChange, InputData } from './Order/types'

export default function (): JSX.Element {
  const [page, setPage] = useState('cart')
  const moveToCart = () => setPage('cart')
  const moveToOrder = () => setPage('order')
  const moveToResult = () => setPage('result')
  const [settings, setSettings] = useState({ lang: 'ru', theme: 'light' })
  const [data, setData] = useState<InputData>(defaultInputData)
  const handleChange = (change: InputChange) => {
    setData((prevState) => ({ ...prevState, ...change }))
  }

  return (
    <SettingsContext.Provider value={settings}>
      <div className="container mt-5">
        {page === 'cart' && <Cart onNext={moveToOrder} />}
        {page === 'order' && <Order data={data} onChange={handleChange} onNext={moveToResult} onPrev={moveToCart} />}
        {page === 'result' && <Result />}
      </div>
    </SettingsContext.Provider>
  )
}
