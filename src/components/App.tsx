import { useState } from 'react'
import Cart from './Cart'
import Order from './Order'
import Result from './Result'
import { observer } from 'mobx-react-lite'
import useStore from '../hooks/useStore'

export default observer(App)

function App(): JSX.Element {
  const [page, setPage] = useState('cart')
  const moveToCart = () => setPage('cart')
  const moveToOrder = () => setPage('order')
  const moveToResult = () => setPage('result')
  const { settings: SettingsContext } = useStore()
  const { settings, changeTheme } = SettingsContext

  return (
    <>
      <div className="container mt-5 mb-5 pd-4">
        {page === 'cart' && <Cart onNext={moveToOrder} settings={settings} />}
        {page === 'order' && <Order onNext={moveToResult} onPrev={moveToCart} />}
        {page === 'result' && <Result />}
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
    </>
  )
}
