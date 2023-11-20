import { Routes, Route } from 'react-router-dom'
import Cart from '../pages/Cart'
import Order from '../pages/Order'
import Result from '../pages/Result'
import Catalog from '../pages/Catalog'
import Error from '../pages/Error'

export default function () {
  return (
    <Routes>
      <Route path="/" element={<Catalog />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order" element={<Order />} />
      <Route path="/result" element={<Result />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}
