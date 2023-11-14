import { Props } from './props'

export default function ({ data }: Props) {
  return (
    <div>
      <h1>Result</h1>
      <h2>Hi, {data.name}!</h2>
      <p>
        Your email is {data.email}, tel is {data.tel}
      </p>
    </div>
  )
}
