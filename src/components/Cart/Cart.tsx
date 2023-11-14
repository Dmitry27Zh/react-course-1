import { Props } from './props'
import Products from '../Products'
import { useState } from 'react'
import Modal from '../Modal'

export default function ({ onNext, settings }: Props) {
  const [showConfirm, setShowConfirm] = useState(false)

  return (
    <div style={{ background: settings.theme === 'dark' ? '#ececec' : '' }}>
      <h1>Cart</h1>
      <hr />
      <Products />
      <button className="button button-primary" type="button" onClick={() => setShowConfirm(true)}>
        Move to order
      </button>
      <Modal
        isActive={showConfirm}
        onClose={() => {
          setShowConfirm(false)
        }}
        onConfirm={() => {
          setShowConfirm(false)
          onNext()
        }}
        title="Confirmation"
        body="Are you sure?"
      />
    </div>
  )
}
