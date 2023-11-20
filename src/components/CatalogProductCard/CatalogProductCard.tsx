import { observer } from 'mobx-react-lite'
import useStore from '../../hooks/useStore'
import { Props } from './props'
import { Link } from 'react-router-dom'

export default observer(CatalogProductCard)

export function CatalogProductCard({ id, price, title }: Props) {
  const { cart } = useStore()
  const renderButton = () => {
    if (cart.hasItem(id)) {
      return (
        <button className="btn btn-danger" type="button" onClick={() => cart.removeItem(id)}>
          Remove
        </button>
      )
    } else {
      return (
        <button className="btn btn-success" type="button" onClick={() => cart.addItem(id)}>
          Add
        </button>
      )
    }
  }

  return (
    <div className="p-4 g-col-4 w-25 flex-grow-1 border border-1 rounded-2">
      <h3>{title}</h3>
      <p>Price: {price}</p>
      <div className="d-flex align-items-center gap-3">
        <Link to={`products/${id}`}>Open</Link>
        {renderButton()}
      </div>
    </div>
  )
}
