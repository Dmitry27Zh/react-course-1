import { FormEvent } from 'react'
import { Input as InputType } from './types'
import { inputs } from '../../data/inputs'
import Input from '../../components/Input'
import useStore from '../../hooks/useStore'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

export default observer(Order)

export function Order() {
  const { order, cart } = useStore()
  const { data, validationData, update, send, checkValidity } = order
  const navigate = useNavigate()
  const handleChange = (name: InputType['name'], value: string) => {
    const change = { [name]: value }
    update(change)
  }
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (checkValidity()) {
      send()
      navigate('/result')
    }
  }

  if (cart.isEmpty) {
    return <Navigate to="/not-found" replace></Navigate>
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
          <Link className="btn btn-secondary" to="/cart">
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
