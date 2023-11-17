import { Props } from './props'

export default function ({ price, title }: Props) {
  return (
    <div className="p-4 g-col-4 w-25 flex-grow-1 border border-1 rounded-2">
      <h3>{title}</h3>
      <p>Price: {price}</p>
    </div>
  )
}
