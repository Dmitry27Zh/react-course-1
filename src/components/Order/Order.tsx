import { FormEvent, useState } from 'react'
import { Input as InputType, InputData, ValidationData, ValidationParams } from './types'
import { Props } from './props'
import { defaultInputData, defaultValidationData, inputs } from './inputs'
import Input from '../Input'

export default function ({ onNext, onPrev }: Props) {
  const [data, setData] = useState<InputData>(defaultInputData)
  const [validationData, setValidationData] = useState<ValidationData>(defaultValidationData)
  const handleChange = (name: InputType['name'], value: string) => {
    setData((prevState) => ({ ...prevState, [name]: value }))
    const validationParams: ValidationParams = {
      status: 'invalid',
      error: validationData[name].error + '1',
    }
    setValidationData((prevState) => {
      return { ...prevState, [name]: validationParams }
    })
  }
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  return (
    <div>
      <h1>Order</h1>
      <hr />
      <form className="d-flex flex-column gap-2 mb-4" onSubmit={handleSubmit}>
        {inputs.map((input, index) => (
          <Input
            key={`${index}-${input.name}`}
            {...input}
            value={data[input.name]}
            error={validationData[input.name].error}
            validationStatus={validationData[input.name].status}
            onChange={(value) => handleChange(input.name, value)}
          />
        ))}
      </form>
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
