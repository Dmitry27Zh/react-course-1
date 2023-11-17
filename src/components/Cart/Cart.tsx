import { Props } from './props'
import Products from '../Products'
import { useState } from 'react'
import Modal from '../Modal'
import useStore from '../../hooks/useStore'

export default function ({ onNext }: Props) {
  const { settings: SettingsContext } = useStore()
  const { settings } = SettingsContext
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
