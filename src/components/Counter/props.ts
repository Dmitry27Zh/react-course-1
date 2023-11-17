import { GetCartItemChange } from '../../types'

export type Props = {
  min?: number
  max: number
  current: number
  onChange: (getCartItemChange: GetCartItemChange) => void
}
