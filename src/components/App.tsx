import Counter from './Counter'
import UserCard from './UserCard'
import { useState } from 'react'
import { PRODUCTS } from './constants'
import { GetProductChange } from '../types'

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
  const removeProduct = (id: number) => {
    setProducts((oldProducts) => {
      return oldProducts.filter((product) => product.id !== id)
    })
  }
  const total = products.reduce((result, product) => result + product.current * product.price, 0)

  return (
    <>
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
              <th>Action</th>
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
                      onChange={(getProductChange: GetProductChange) =>
                        handleProductChange(product.id, getProductChange)
                      }
                    />
                  </td>
                  <td>{product.current * product.price}</td>
                  <td>
                    <button type="button" onClick={() => removeProduct(product.id)}>
                      X
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <strong>Total: ${total}</strong>
      </div>
      <UserCard name="user" text="hello" />
    </>
  )
}
