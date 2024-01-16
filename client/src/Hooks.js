import { useEffect, useState } from "react"

export const Hooks = () => {
  const [count, setCount] = useState(0) // useState is a hook, when data changes, the component re-renders
    // count is the state
    // setCount is a function that changes the state

  useEffect(() => { // useEffect is a hook, it runs after the component renders
    // console.log('useEffect')
    // document.title = `Count: ${count}`
    alert (`Count: ${count}`)
  }, [count]) // useEffect takes a callback function and an array of dependencies
    // if the array is empty, the callback function runs only once
    // if the array is not empty, the callback function runs every time the dependencies change
  return (
    <>
      <h1>Hooks</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  )
}