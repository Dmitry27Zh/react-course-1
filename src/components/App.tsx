import { useState } from 'react'
import Cart from './Cart'
import Order from './Order'
import Result from './Result'
import SettingsContext from '../contexts/settings'
import { defaultInputData } from './Order/inputs'
import { InputChange, InputData } from './Order/types'
import { SETTINGS } from '../data/settings'

export default function (): JSX.Element {
  const [page, setPage] = useState('cart')
  const moveToCart = () => setPage('cart')
  const moveToOrder = () => setPage('order')
  const moveToResult = () => setPage('result')
  const [settings, setSettings] = useState(SETTINGS)
  const [data, setData] = useState<InputData>(defaultInputData)
  const handleChange = (change: InputChange) => {
    setData((prevState) => ({ ...prevState, ...change }))
  }

  return (
    <SettingsContext.Provider value={settings}>
      <div className="container mt-5 mb-5 pd-4">
        {page === 'cart' && <Cart onNext={moveToOrder} settings={settings} />}
        {page === 'order' && <Order data={data} onChange={handleChange} onNext={moveToResult} onPrev={moveToCart} />}
        {page === 'result' && <Result data={data} />}
      </div>
      <footer className="container pt-4 pb-4">
        <div className="d-flex gap-2">
          <button
            className={`btn btn-light ${settings.theme === 'light' ? 'active' : ''}`}
            type="button"
            onClick={() => setSettings((prevState) => ({ ...prevState, theme: 'light' }))}
          >
            Switch to light
          </button>
          <button
            className={`btn btn-dark ${settings.theme === 'dark' ? 'active' : ''}`}
            type="button"
            onClick={() => setSettings((prevState) => ({ ...prevState, theme: 'dark' }))}
          >
            Switch to dark
          </button>
        </div>
      </footer>
    </SettingsContext.Provider>
  )
}
