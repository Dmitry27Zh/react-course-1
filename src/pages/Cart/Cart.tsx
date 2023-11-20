import Products from '../../components/Products'
import { useState } from 'react'
import Modal from '../../components/Modal'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import useStore from '../../hooks/useStore'

export default observer(Cart)

export function Cart() {
  const [showConfirm, setShowConfirm] = useState(false)
  const { cart } = useStore()
  const navigate = useNavigate()

  return (
    <div>
      <h1>Cart</h1>
      <Products />
      {!cart.isEmpty && (
        <button className="button button-primary" type="button" onClick={() => setShowConfirm(true)}>
          Move to order
        </button>
      )}
      <Modal
        isActive={showConfirm}
        onClose={() => {
          setShowConfirm(false)
        }}
        onConfirm={() => {
          setShowConfirm(false)
          navigate('/order')
        }}
        title="Confirmation"
        body="Are you sure?"
      />
    </div>
  )
}
