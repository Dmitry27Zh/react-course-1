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
  const decrement = () => {
    if (current > min) {
      setCurrent(current - 1)
    }
  }
  const increment = () => {
    if (current < max) {
      setCurrent(current + 1)
    }
  }
  const updateCurrent = useMemo<(input: string) => void>(() => {
    return debounce((input: string) => {
      const currentInput = Number(input)

      if (input && currentInput >= min && currentInput <= max) {
        setCurrent(currentInput)
      } else {
        setInput(String(current))
      }
    }, COUNTER_TIMEOUT)
  }, [])
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target
    setInput(value)
    updateCurrent(value)
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
