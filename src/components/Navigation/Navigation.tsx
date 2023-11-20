import { Link } from 'react-router-dom'
import useStore from '../../hooks/useStore'
import { observer } from 'mobx-react-lite'

export default observer(Navigation)

export function Navigation() {
  const { cart, order } = useStore()
  const links = [
    { text: 'Home', path: '/', available: true },
    { text: 'Cart', path: '/cart', available: true },
    { text: 'Order', path: '/order', available: !cart.isEmpty },
    { text: 'Result', path: '/result', available: !cart.isEmpty && order.isFormValid },
  ]
  return (
    <div className="d-flex flex-column">
      {links.map((link, index) => {
        const key = `${index} ${link.text} hoho`

        if (link.available) {
          return (
            <Link key={key} to={link.path}>
              {link.text}
            </Link>
          )
        } else {
          return <span key={key}>{link.text}</span>
        }
      })}
    </div>
  )
}
