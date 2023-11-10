import { Props } from './props'

export default function ({ onNext }: Props) {
  return (
    <div>
      <h1>Cart</h1>
      <hr />
      <button className="button button-primary" type="button" onClick={onNext}>
        Move to order
      </button>
    </div>
  )
}
