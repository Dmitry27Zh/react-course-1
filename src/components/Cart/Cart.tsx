import { Props } from './props'
import Products from '../Products'
import { useState } from 'react'
import Modal from '../Modal'
import useStore from '../../hooks/useStore'
import { observer } from 'mobx-react-lite'

export default observer(Cart)

export function Cart({ onNext }: Props) {
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
