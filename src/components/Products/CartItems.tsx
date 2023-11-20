import Counter from '../Counter'
import { GetCartItemChange } from '../../types'
import { observer } from 'mobx-react-lite'
import useStore from '../../hooks/useStore'

export default observer(CartItems)
function CartItems() {
  const { cart, products } = useStore()
  const { items, changeItem, removeItem, total } = cart
  const { getById } = products

  return (
    <div className="mb-2">
      <p>Positions quantity: {items.length}</p>
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
          {items.map((item, index) => {
            const product = getById(item.id)!

            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <Counter
                    max={product.rest}
                    current={item.current}
                    onChange={(getCartItemChange: GetCartItemChange) => changeItem(item.id, getCartItemChange)}
                  />
                </td>
                <td>{item.current * product.price}</td>
                <td>
                  <button type="button" onClick={() => removeItem(item.id)}>
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
