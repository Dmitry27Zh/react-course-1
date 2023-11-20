import { observer } from 'mobx-react-lite'
import { Navigate, useParams } from 'react-router-dom'
import useStore from '../../hooks/useStore'
import { getProduct } from './utils'
import Counter from '../../components/Counter'
import { GetCartItemChange } from '../../types'

export default observer(Product)

export function Product() {
  const { id = '' } = useParams()
  const { products, cart } = useStore()
  const product = getProduct(products, id)
  const item = cart.getItem(Number(id))

  if (product) {
    return (
      <div>
        <h3>{product.title}</h3>
        <p>Available: {product.rest}</p>
        <b>${product.price}</b>
        {item && (
          <Counter
            max={product.rest}
            current={item.current}
            onChange={(getCartItemChange: GetCartItemChange) => cart.changeItem(item.id, getCartItemChange)}
          />
        )}
      </div>
    )
  } else {
    return <Navigate to="/not-found" replace></Navigate>
  }
}
