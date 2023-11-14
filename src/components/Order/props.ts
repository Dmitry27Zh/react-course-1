import { InputChange, InputData } from './types'

export type Props = {
  data: InputData
  onChange: (change: InputChange) => void
  onNext: () => void
  onPrev: () => void
}
