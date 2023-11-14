import { ValidationData } from './types'

export const isFormValid = (validationData: ValidationData) => {
  return Object.values(validationData).every((value) => value.status === 'valid')
}
