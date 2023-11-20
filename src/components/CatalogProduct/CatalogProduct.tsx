import useStore from '../../hooks/useStore'
import { Props } from './props'

export default function ({ id, price, title }: Props) {
  const { cart } = useStore()

  return (
    <div className="p-4 g-col-4 w-25 flex-grow-1 border border-1 rounded-2">
      <h3>{title}</h3>
      <p>Price: {price}</p>
      <button className="btn btn-success" type="button">
        Add
      </button>
      <button className="btn btn-danger" type="button">
        Remove
      </button>
    </div>
  )
}
