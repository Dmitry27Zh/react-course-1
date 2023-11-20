import { observer } from 'mobx-react-lite'
import { Navigate, useParams } from 'react-router-dom'
import useStore from '../../hooks/useStore'
import { getProduct } from './utils'

export default observer(Product)

export function Product() {
  const { id = '' } = useParams()
  const { products } = useStore()
  const product = getProduct(products, id)

  if (product) {
    return (
      <div>
        <h3>{product.title}</h3>
        <p>Available: {product.rest}</p>
        <b>${product.price}</b>
      </div>
    )
  } else {
    return <Navigate to="/not-found"></Navigate>
  }
}
