import { Inputs } from '../../types'
import { makeMap } from '../../utils'
import { ValidationData, ValidationParams } from './types'

export const inputs = [
  {
    label: 'Name',
    name: 'name',
    type: 'text',
    value: '',
    validation: {
      required: {
        action: (value) => value.trim() !== '',
        message: 'Name is required',
      },
    },
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    value: '',
    validation: {
      required: {
        action: (value) => value.trim() !== '',
        message: 'Email is required',
      },
      correct: {
        action: (value) => /([a-z0-9]+.?)+[a-z0-9]+@([a-z0-9]+.?)[a-z0-9]+\.[a-z]+/gi.test(value),
        message: "Email isn't correct",
      },
    },
  },
  {
    label: 'Tel',
    name: 'tel',
    type: 'tel',
    value: '',
    validation: {
      required: {
        action: (value) => value.trim() !== '',
        message: 'Tel is required',
      },
    },
  },
] as const satisfies Inputs

export const defaultInputData = makeMap(inputs, 'name', 'value')

export const defaultValidationData = Object.fromEntries<ValidationParams>(
  inputs.map((input) => [input.name, { status: '', error: '' }])
) as ValidationData

export const inputValidationMap = makeMap(inputs, 'name', 'validation')
