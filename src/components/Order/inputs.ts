import { Inputs } from '../../types'
import { makeMap } from '../../utils'

export const inputs = [
  {
    label: 'Name',
    name: 'name',
    type: 'text',
    value: '',
    validation: {
      required: {
        action: (value) => value !== '',
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
      correct: {
        action: (value) => /([a-z0-9]+.?)+[a-z0-9]+@([a-z0-9]+.?)[a-z0-9]+\.[a-z]+/gi.test(value),
        message: "Name isn't correct",
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
        action: (value) => value !== '',
        message: 'Tel is required',
      },
    },
  },
] as const satisfies Inputs

export const defaultInputData = makeMap(inputs, 'name', 'value')
