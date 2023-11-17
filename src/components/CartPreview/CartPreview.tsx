import { Link } from 'react-router-dom'
import useStore from '../../hooks/useStore'
import { observer } from 'mobx-react-lite'

export default observer(CartPreview)

export function CartPreview() {
  const { cart } = useStore()
  const { totalItems } = cart

  return (
    <Link className="d-inline-flex align-items-center gap-2 p-2 text-reset text-decoration-none" to="/cart">
      <i className="bi bi-cart4"></i>
      <span>: {totalItems}</span>
    </Link>
  )
}
