import { Props } from './props'
import Products from '../../components/Products'
import { useState } from 'react'
import Modal from '../../components/Modal'
import useStore from '../../hooks/useStore'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

export default observer(Cart)

export function Cart() {
  const { settings: SettingsContext } = useStore()
  const { settings } = SettingsContext
  const [showConfirm, setShowConfirm] = useState(false)
  const navigate = useNavigate()

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
          navigate('/order')
        }}
        title="Confirmation"
        body="Are you sure?"
      />
    </div>
  )
}
