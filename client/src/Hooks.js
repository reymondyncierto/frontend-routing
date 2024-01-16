import { useState } from "react"

export const Hooks = () => {
  const [count, setCount] = useState(0) // useState is a hook, when data changes, the component re-renders
    // count is the state
    // setCount is a function that changes the state

  return (
    <>
      <h1>Hooks</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  )
}