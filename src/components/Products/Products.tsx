import { useContext } from 'react'
import Counter from '../Counter'
import { GetProductChange } from '../../types'
import StoreContext from '../../contexts/store'
import { Store } from '../../store'
import { observer } from 'mobx-react-lite'

export default observer(Products)
function Products() {
  const { cart } = useContext<Store>(StoreContext)
  const { products, changeProduct, removeProduct, total } = cart

  return (
    <div className="some">
      <h1>Products list</h1>
      {products.length}
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Current</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
          {products.map((product, index) => {
            return (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <Counter
                    max={product.rest}
                    current={product.current}
                    onChange={(getProductChange: GetProductChange) => changeProduct(product.id, getProductChange)}
                  />
                </td>
                <td>{product.current * product.price}</td>
                <td>
                  <button type="button" onClick={() => removeProduct(product.id)}>
                    X
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <strong>Total: ${total}</strong>
    </div>
  )
}
