import { Props } from './props'

export default function ({ onNext, onPrev }: Props) {
  return (
    <div>
      <h1>Order</h1>
      <hr />
      <button className="button button-secondary" type="button" onClick={onPrev}>
        Move to cart
      </button>
      <button className="button button-primary" type="button" onClick={onNext}>
        Move to result
      </button>
    </div>
  )
}
