import { inputs } from './inputs'

type Inputs = typeof inputs

export type Input = Inputs[number]

export type InputData = {
  [K in Input as K['name']]: K['value']
}
