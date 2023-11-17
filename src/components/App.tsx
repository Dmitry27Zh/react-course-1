import Cart from '../pages/Cart'
import Order from '../pages/Order'
import Result from '../pages/Result'
import { observer } from 'mobx-react-lite'
import Footer from './Footer'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

export default observer(App)

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="container mt-5 mb-5 pd-4">
        <Routes>
          <Route path="/" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}
