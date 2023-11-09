import { GetProductChange } from '../../types'

export type Props = {
  min?: number
  max: number
  current: number
  onChange: (getProductChange: GetProductChange) => void
}
