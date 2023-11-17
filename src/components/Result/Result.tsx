import useStore from '../../hooks/useStore'

export default function () {
  const { cart, order } = useStore()
  const { total } = cart
  const { data } = order

  return (
    <div>
      <h1>Result</h1>
      <h2>Hi, {data.name}!</h2>
      <p>
        Your email is {data.email}, tel is {data.tel}
      </p>
      <p>Total: ${total}</p>
    </div>
  )
}
