import { Link } from "react-router-dom"

export const YserList = () => {
  return(
    <>
      <h1>YSER List</h1>
      <Link to="/yser/1">YSER 1</Link>
      <br />
      <Link to="/yser/2">YSER 2</Link>
    </>
  )
}