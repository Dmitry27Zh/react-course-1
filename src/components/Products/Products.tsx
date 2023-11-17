import Counter from '../Counter'
import { GetProductChange } from '../../types'
import { observer } from 'mobx-react-lite'
import useStore from '../../hooks/useStore'

export default observer(Products)
function Products() {
  const { cart } = useStore()
  const { products, changeProduct, removeProduct, total } = cart

  return (
    <div className="mb-2">
      <p>Positions quantity: {products.length}</p>
      <table className="w-100 mb-3">
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
