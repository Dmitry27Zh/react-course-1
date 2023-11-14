import { FormEvent, useState } from 'react'
import { Input as InputType, InputData, ValidationData, ValidationParams } from './types'
import { Props } from './props'
import { defaultInputData, defaultValidationData, inputValidationMap, inputs } from './inputs'
import Input from '../Input'
import { validate } from '../../utils'
import { isFormValid } from './utils'

export default function ({ onNext, onPrev }: Props) {
  const [data, setData] = useState<InputData>(defaultInputData)
  const [validationData, setValidationData] = useState<ValidationData>(defaultValidationData)
  const validateData = (data: Partial<InputData>) => {
    let newValidationData = {}
    Object.entries(data).forEach(([name, value]) => {
      const error = validate(inputValidationMap[name as InputType['name']], value)
      const validationParams: ValidationParams = {
        status: error ? 'invalid' : 'valid',
        error,
      }
      newValidationData = { ...newValidationData, [name]: validationParams }
    })

    setValidationData((prevState) => {
      return { ...prevState, ...newValidationData }
    })
  }
  const handleChange = (name: InputType['name'], value: string) => {
    setData((prevState) => ({ ...prevState, [name]: value }))
    validateData({ [name]: value })
  }
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    validateData(data)

    if (isFormValid(validationData)) {
      onNext()
    }
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
        <div className="d-flex gap-2">
          <button className="btn btn-secondary" type="button" onClick={onPrev}>
            Move to cart
          </button>
          <button className="btn btn-primary" type="submit">
            Move to result
          </button>
        </div>
      </form>
    </div>
  )
}
