import { useParams } from 'react-router-dom';
export const Yser = () => {
  const { id } = useParams(); // useParams is a hook, it returns an object, we destructure it
    return (
      <div>
        <h1>YSER {id}</h1>
        <p>This is the YSER page</p>
      </div>
    )
}