import { Link } from 'react-router-dom'

export default function () {
  const links = [
    { text: 'Home', path: '/' },
    { text: 'Cart', path: '/cart' },
    { text: 'Order', path: '/order' },
    { text: 'Result', path: '/result' },
  ]

  return (
    <div className="d-flex flex-column">
      {links.map((link, index) => (
        <Link key={`${index}-${link.text}`} to={link.path}>
          {link.text}
        </Link>
      ))}
    </div>
  )
}
