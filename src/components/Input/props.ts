import { Input } from '../../types'
import { ValidationStatus } from './types'

export type Props = Omit<Input, 'validation'> & {
  error: string
  validationStatus: ValidationStatus
  onChange: (value: string) => void
}
