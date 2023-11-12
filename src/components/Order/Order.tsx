import { useState } from 'react'
import { Input as InputType, InputData } from './types'
import { Props } from './props'
import { defaultInputData, inputs } from './inputs'
import Input from '../Input'

export default function ({ onNext, onPrev }: Props) {
  const [data, setData] = useState<InputData>(defaultInputData)
  const handleChange = (name: InputType['name'], value: string) => {
    setData((prevState) => ({ ...prevState, [name]: value }))
  }

  return (
    <div>
      <h1>Order</h1>
      <hr />
      <div className="d-flex flex-column gap-2 mb-4">
        {inputs.map((input, index) => (
          <Input
            key={`${index}-${input.name}`}
            {...input}
            value={data[input.name]}
            onChange={(value) => handleChange(input.name, value)}
          />
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
