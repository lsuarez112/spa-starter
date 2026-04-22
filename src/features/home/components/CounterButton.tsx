import { useState } from 'react'

type CounterButtonProps = {
  initialCount?: number
}

export function CounterButton({ initialCount = 0 }: CounterButtonProps) {
  const [count, setCount] = useState(initialCount)

  return (
    <button className="counter" onClick={() => setCount((c) => c + 1)}>
      Count is {count}
    </button>
  )
}

