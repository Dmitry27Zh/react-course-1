import { useContext, useState } from 'react'
import Cart from './Cart'
import Order from './Order'
import Result from './Result'
import SettingsContext from '../contexts/settings'
import CartContext from '../contexts/cart'
import { defaultInputData } from './Order/inputs'
import { InputChange, InputData } from './Order/types'
import cart from '../store/Cart'
import { observer } from 'mobx-react-lite'

export default observer(App)

function App(): JSX.Element {
  const [page, setPage] = useState('cart')
  const moveToCart = () => setPage('cart')
  const moveToOrder = () => setPage('order')
  const moveToResult = () => setPage('result')
  const [data, setData] = useState<InputData>(defaultInputData)
  const { settings, changeTheme } = useContext(SettingsContext)
  const handleChange = (change: InputChange) => {
    setData((prevState) => ({ ...prevState, ...change }))
  }

  return (
    <CartContext.Provider value={cart}>
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
            onClick={() => changeTheme('light')}
          >
            Switch to light
          </button>
          <button
            className={`btn btn-dark ${settings.theme === 'dark' ? 'active' : ''}`}
            type="button"
            onClick={() => changeTheme('dark')}
          >
            Switch to dark
          </button>
        </div>
      </footer>
    </CartContext.Provider>
  )
}
