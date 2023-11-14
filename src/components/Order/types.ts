import { ValidationStatus } from '../Input/types'
import { Validation } from './../../types/index'
import { inputs } from './inputs'

type Inputs = typeof inputs

export type Input = Inputs[number]

export type InputData = {
  [K in Input as K['name']]: K['value']
}

export type InputChange = Partial<InputData>

export type ValidationParams = {
  status: ValidationStatus
  error: string
}

export type ValidationData = {
  [key in Input['name']]: ValidationParams
} & Validation
