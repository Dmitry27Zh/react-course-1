import UserCard from './UserCard'
import Counter from './Counter'
import { useState } from 'react'
import { PRODUCTS } from './constants'

export default function (): JSX.Element {
  const [products, setProducts] = useState(PRODUCTS)

  return (
    <div className="some">
      <h1>Products list</h1>
      {products.length}
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Cnt</th>
            <th>Total</th>
          </tr>
          {products.map((product, index) => {
            return (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
