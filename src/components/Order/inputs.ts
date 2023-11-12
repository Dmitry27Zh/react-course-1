import { Inputs } from '../../types'
import { makeMap } from '../../utils'

export const inputs = [
  {
    label: 'Name',
    name: 'name',
    type: 'text',
    value: '',
    validation: (value) => value !== '',
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    value: '',
    validation: (value) => /([a-z0-9]+.?)+[a-z0-9]+@([a-z0-9]+.?)[a-z0-9]+\.[a-z]+/gi.test(value),
  },
  {
    label: 'Tel',
    name: 'tel',
    type: 'tel',
    value: '',
    validation: (value) => !!value,
  },
] as const satisfies Inputs

export const defaultInputData = makeMap(inputs, 'name', 'value')
