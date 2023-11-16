import { useContext } from 'react'
import StoreContext from '../contexts/store'
import { Store } from '../store'
import Cart from '../store/Cart'

export default function () {
  const store = useContext(StoreContext)

  return store
}
