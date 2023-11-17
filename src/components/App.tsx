import { useState } from 'react'
import Cart from './Cart'
import Order from './Order'
import Result from './Result'
import { observer } from 'mobx-react-lite'
import Footer from './Footer'

export default observer(App)

function App(): JSX.Element {
  const [page, setPage] = useState('cart')
  const moveToCart = () => setPage('cart')
  const moveToOrder = () => setPage('order')
  const moveToResult = () => setPage('result')

  return (
    <>
      <div className="container mt-5 mb-5 pd-4">
        {page === 'cart' && <Cart onNext={moveToOrder} />}
        {page === 'order' && <Order onNext={moveToResult} onPrev={moveToCart} />}
        {page === 'result' && <Result />}
      </div>
      <Footer />
    </>
  )
}
