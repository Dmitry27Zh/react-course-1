import React, { ChangeEvent, useEffect, useState, useMemo } from 'react'
import { debounce, clamp } from './utils'
import { COUNTER_TIMEOUT } from './constants'

type Props = {
  min?: number
  max: number
}

export default function ({ min = 1, max }: Props): JSX.Element | never {
  if (min > max) {
    throw new Error('Min should be less than max')
  }

  const [current, setCurrent] = useState<number>(min)
  const [input, setInput] = useState<string>(String(min))
  useEffect(() => {
    setInput(String(current))
  }, [current])
  const applyCurrent = (value: number) => {
    setCurrent((oldCurrent) => {
      const newCurrent = Number.isFinite(value) ? clamp(min, max, value) : oldCurrent
      setInput(String(newCurrent))

      return newCurrent
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
      applyCurrent(Number(input))
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
