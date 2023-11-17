import { FormEvent, useState } from 'react'
import { Input as InputType, ValidationData, ValidationParams, InputChange } from './types'
import { defaultValidationData, inputValidationMap, inputs } from './inputs'
import Input from '../Input'
import { validate } from '../../utils'
import { isFormValid } from './utils'
import useStore from '../../hooks/useStore'
import { Link, useNavigate } from 'react-router-dom'

export default function () {
  const { order } = useStore()
  const { data, update, send } = order
  const [validationData, setValidationData] = useState<ValidationData>(defaultValidationData)
  const navigate = useNavigate()
  const validateData = (data: InputChange) => {
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
    const change = { [name]: value }
    update(change)
    validateData(change)
  }
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    validateData(data)

    if (isFormValid(validationData)) {
      send()
      navigate('/result')
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
          <Link className="btn btn-secondary" to="/">
            Move to cart
          </Link>
          <button className="btn btn-primary" type="submit">
            Move to result
          </button>
        </div>
      </form>
    </div>
  )
}
