import Counter from './Counter'
import { useState } from 'react'
import { PRODUCTS } from './constants'
import { GetProductChange } from './types'

export default function (): JSX.Element {
  const [products, setProducts] = useState(PRODUCTS)
  const handleProductChange = (id: number, getProductChange: GetProductChange) => {
    setProducts((oldProducts) => {
      const newProducts = oldProducts.map((product) => {
        if (product.id === id) {
          const productChange = getProductChange(product)
          product = { ...product, ...productChange }
        }

        return product
      })

      return newProducts
    })
  }
  const total = products.reduce((result, product) => result + product.current * product.price, 0)

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
            <th>Current</th>
            <th>Total</th>
          </tr>
          {products.map((product, index) => {
            return (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <Counter
                    max={product.rest}
                    current={product.current}
                    onChange={(getProductChange: GetProductChange) => handleProductChange(product.id, getProductChange)}
                  />
                </td>
                <td>{product.current * product.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <strong>Total: ${total}</strong>
    </div>
  )
}
