import React, { ChangeEvent, useEffect, useState, useCallback, useMemo } from 'react'
import { debounce } from './utils'
import { COUNTER_TIMEOUT } from './constants'

type Props = {
  min?: number
  max: number
}

export default function ({ min = 0, max }: Props): JSX.Element | never {
  if (min > max) {
    throw new Error('Min should be less than max')
  }

  const [current, setCurrent] = useState<number>(min)
  const [input, setInput] = useState<string>(String(min))
  useEffect(() => {
    setInput(String(current))
  }, [current])
  const applyCurrent = (value: number) => {
    if (value >= min && value <= max) {
      setCurrent(value)
      return true
    }

    return false
  }
  const decrement = () => {
    applyCurrent(current - 1)
  }
  const increment = () => {
    applyCurrent(current + 1)
  }
  const updateCurrent = useMemo<(input: string, current: number) => void>(() => {
    return debounce((input: string, current: number) => {
      let isApplied = false

      if (input) {
        isApplied = applyCurrent(Number(input))
      }

      if (!isApplied) {
        setInput(String(current))
      }
    }, COUNTER_TIMEOUT)
  }, [])
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target
    setInput(value)
    updateCurrent(value, current)
  }

  return (
    <div>
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
