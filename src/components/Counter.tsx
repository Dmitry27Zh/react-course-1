import React, { ChangeEvent, useState, useMemo } from 'react'
import { debounce, clamp } from './utils'
import { COUNTER_TIMEOUT } from './constants'
import { GetProductChange } from './types'

type Props = {
  min?: number
  max: number
  current: number
  onChange: (getProductChange: GetProductChange) => void
}

export default function ({ min = 0, max, current, onChange }: Props): JSX.Element | never {
  if (min > max) {
    throw new Error('Min should be less than max')
  }

  const [input, setInput] = useState<string>(String(current))
  const applyCurrent = (value: number) => {
    onChange((oldProduct) => {
      const oldCurrent = oldProduct.current
      const newCurrent = Number.isFinite(value) ? clamp(min, max, value) : oldCurrent
      setInput(String(newCurrent))

      return { current: newCurrent }
    })
  }
  const decrement = () => {
    applyCurrent(current - 1)
  }
  const increment = () => {
    applyCurrent(current + 1)
  }
  const updateCurrent = useMemo<(input: string) => void>(() => {
    return debounce((input: string) => {
      applyCurrent(Number(input || 'incorrect'))
    }, COUNTER_TIMEOUT)
  }, [])
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target
    setInput(value)
    updateCurrent(value)
  }

  return (
    <div>
      {current}
      <button type="button" onClick={decrement}>
        -
      </button>
      <input type="text" value={input} onChange={handleChange} />
      <button type="button" onClick={increment}>
        +
      </button>
    </div>
  )
}
