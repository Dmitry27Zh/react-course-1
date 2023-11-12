import { Inputs } from '../../types'
import Input from '../Input'
import { Props } from './props'

export default function ({ onNext, onPrev }: Props) {
  const inputs: Inputs = [
    {
      label: 'Name',
      name: 'name',
      type: 'text',
    },
    {
      label: 'Email',
      name: 'email',
      type: 'email',
    },
    {
      label: 'Tel',
      name: 'tel',
      type: 'tel',
    },
  ]

  return (
    <div>
      <h1>Order</h1>
      <hr />
      <div className="d-flex flex-column gap-2 mb-4">
        {inputs.map((input, index) => (
          <Input key={`${index}-${input.name}`} {...input} />
        ))}
      </div>
      <div className="d-flex gap-2">
        <button className="btn btn-secondary" type="button" onClick={onPrev}>
          Move to cart
        </button>
        <button className="btn btn-primary" type="button" onClick={onNext}>
          Move to result
        </button>
      </div>
    </div>
  )
}
